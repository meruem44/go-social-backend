import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/Users/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";
import { User } from "../entities/User";

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    password,
    email,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      password,
      email,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }
}

export { UsersRepository };
