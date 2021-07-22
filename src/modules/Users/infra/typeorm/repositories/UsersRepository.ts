import { getRepository, Repository, Not } from "typeorm";

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

  public async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async findAllUsers(except_user_id: string): Promise<User[]> {
    const users = await this.ormRepository.find({
      where: { id: Not(except_user_id) },
    });

    return users;
  }
}

export { UsersRepository };
