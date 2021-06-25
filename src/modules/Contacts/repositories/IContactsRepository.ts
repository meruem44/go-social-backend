import { ICreateContactsDTO } from "../dtos/ICreateContactsDTO";
import { Contacts } from "../infra/typeorm/entities/Contacts";

interface IContactRepository {
  create(data: ICreateContactsDTO): Promise<Contacts>;
  findByUserId(user_id: string): Promise<Contacts | undefined>;
  update(data: Contacts): Promise<Contacts>;
}

export { IContactRepository };
