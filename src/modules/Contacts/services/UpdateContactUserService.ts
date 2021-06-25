import { inject, injectable } from "tsyringe";

import { Contacts } from "../infra/typeorm/entities/Contacts";
import { IContactRepository } from "../repositories/IContactsRepository";
import { AppError } from "@shared/errors/AppError";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";

import { ICreateContactsDTO } from "../dtos/ICreateContactsDTO";

@injectable()
class UpdateContactUserService {
  constructor(
    @inject("ContactsRepository")
    private contactRepository: IContactRepository,
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    user_id,
    whatssap,
    linkedin,
    facebook,
    telegram,
    instagram,
    link,
  }: ICreateContactsDTO): Promise<Contacts | undefined> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new AppError("User not found");
    }

    const findContact = await this.contactRepository.findByUserId(user_id);

    if (!findContact) {
      throw new AppError("Contact to user not found");
    }

    Object.assign(findContact, {
      whatssap,
      linkedin,
      telegram,
      instagram,
      link,
      facebook,
    });

    const updateContact = await this.contactRepository.update(findContact);

    return updateContact;
  }
}

export { UpdateContactUserService };
