import { inject, injectable } from "tsyringe";

import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepositories";

interface IRequest {
  user_id: string;
}

@injectable()
class ListUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllUsers(user_id);

    return users;
  }
}

export { ListUsersService };
