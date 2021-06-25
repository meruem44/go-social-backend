import { getRepository, Repository } from "typeorm";

import { Contacts } from "../entities/Contacts";
import { IContactRepository } from "@modules/Contacts/repositories/IContactsRepository";
import { ICreateContactsDTO } from "@modules/Contacts/dtos/ICreateContactsDTO";

class ContactsRepository implements IContactRepository {
  private ormRepository: Repository<Contacts>;

  constructor() {
    this.ormRepository = getRepository(Contacts);
  }

  public async create({
    user_id,
    facebook,
    whatssap,
    instagram,
    telegram,
    link,
    linkedin,
  }: ICreateContactsDTO): Promise<Contacts> {
    const contact = this.ormRepository.create({
      user_id,
      facebook,
      whatssap,
      instagram,
      telegram,
      link,
      linkedin,
    });

    await this.ormRepository.save(contact);

    return contact;
  }

  public async findByUserId(user_id: string): Promise<Contacts | undefined> {
    const contact = await this.ormRepository.findOne({
      where: { user_id },
    });

    return contact;
  }

  public async update(contact: Contacts): Promise<Contacts> {
    await this.ormRepository.save(contact);

    return contact;
  }
}

export { ContactsRepository };
