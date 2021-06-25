import { inject, injectable } from "tsyringe";

import { Contacts } from "../infra/typeorm/entities/Contacts";
import { IContactRepository } from "../repositories/IContactsRepository";
import { AppError } from "@shared/errors/AppError";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";
import { ICreateContactsDTO } from "../dtos/ICreateContactsDTO";

@injectable()
class CreateContactService {
  constructor(
    @inject("ContactsRepository")
    private contactRepository: IContactRepository,
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    user_id,
    facebook,
    whatssap,
    linkedin,
    telegram,
    instagram,
    link,
  }: ICreateContactsDTO): Promise<Contacts> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new AppError("User not founds");
    }

    const contact = await this.contactRepository.create({
      user_id,
      facebook,
      whatssap,
      linkedin,
      telegram,
      instagram,
      link,
    });

    return contact;
  }
}

export { CreateContactService };
