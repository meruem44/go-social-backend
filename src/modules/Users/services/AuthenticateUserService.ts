import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { IHashProvider } from "@shared/container/providers/HashProvider/models/IHashProvider";
import { AppError } from "@shared/errors/AppError";
import { IUserRepository } from "../repositories/IUserRepositories";
import { User } from "../infra/typeorm/entities/User";
import { authConfig } from "@shared/config/auth";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("This is combination e-mail/password fails", 401);
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AppError("This is combination e-mail/password fails", 401);
    }

    const token = sign({}, authConfig.secret, {
      subject: user.id,
      expiresIn: authConfig.expiresIn,
    });

    user.password = "";

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserService };
