import { container } from "tsyringe";

import "./providers";

import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";
import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { PostRepository } from "@modules/Posts/infra/typeorm/repositories/PostRepositpry";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPostRepository>("PostRepository", PostRepository);
