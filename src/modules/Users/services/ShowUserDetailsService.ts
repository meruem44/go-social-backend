import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepositories";

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserDetailsService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export { ShowUserDetailsService };
