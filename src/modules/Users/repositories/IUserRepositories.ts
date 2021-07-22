import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findAllUsers(except_user_id: string): Promise<User[]>;
}

export { IUserRepository };
