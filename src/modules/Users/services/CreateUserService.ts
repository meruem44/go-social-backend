import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepositories";
import { IHashProvider } from "@shared/container/providers/HashProvider/models/IHashProvider";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExist = await this.usersRepository.findByEmail(email);

    if (userExist) {
      throw new AppError("E-mail already used");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUserService };
