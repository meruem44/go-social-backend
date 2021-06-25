import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreateContactService } from "@modules/Contacts/services/CreateContactService";
import { ListUserContactService } from "@modules/Contacts/services/ListUserContactService";
import { UpdateContactUserService } from "@modules/Contacts/services/UpdateContactUserService";

class ContactsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const { facebook, whatssap, instagram, telegram, link, linkedin } =
      request.body;

    const createContact = container.resolve(CreateContactService);

    const contact = await createContact.execute({
      user_id: id,
      facebook,
      whatssap,
      instagram,
      telegram,
      link,
      linkedin,
    });

    return response.json(contact);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserContact = container.resolve(ListUserContactService);

    const contact = await listUserContact.execute({
      user_id: id,
    });

    return response.json(contact);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const { facebook, whatssap, instagram, telegram, link, linkedin } =
      request.body;

    const updateContactUser = container.resolve(UpdateContactUserService);

    const contact = await updateContactUser.execute({
      user_id: id,
      facebook,
      whatssap,
      instagram,
      telegram,
      link,
      linkedin,
    });

    return response.json(contact);
  }
}

export { ContactsController };
