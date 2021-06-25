import { inject, injectable } from "tsyringe";

import { Contacts } from "../infra/typeorm/entities/Contacts";
import { IContactRepository } from "../repositories/IContactsRepository";
import { AppError } from "@shared/errors/AppError";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";

interface IRequest {
  user_id: string;
}

@injectable()
class ListUserContactService {
  constructor(
    @inject("ContactsRepository")
    private contactRepository: IContactRepository,
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<Contacts | undefined> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new AppError("User not found");
    }

    const contact = await this.contactRepository.findByUserId(user_id);

    return contact;
  }
}

export { ListUserContactService };
