import { container } from "tsyringe";

import "./providers";

import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";
import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { PostRepository } from "@modules/Posts/infra/typeorm/repositories/PostRepositpry";

import { IContactRepository } from "@modules/Contacts/repositories/IContactsRepository";
import { ContactsRepository } from "@modules/Contacts/infra/typeorm/repositories/ContactsRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPostRepository>("PostRepository", PostRepository);

container.registerSingleton<IContactRepository>(
  "ContactsRepository",
  ContactsRepository
);
