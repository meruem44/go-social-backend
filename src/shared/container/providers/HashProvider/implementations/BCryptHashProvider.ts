import { hash, compare } from "bcryptjs";

import { IHashProvider } from "../models/IHashProvider";

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const hashed = await hash(payload, 8);

    return hashed;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BCryptHashProvider };
