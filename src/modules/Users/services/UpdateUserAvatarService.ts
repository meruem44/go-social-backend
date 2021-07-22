import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { join } from "path";
import fs from "fs";
import uploadConfig from "@shared/config/upload";

import { IUserRepository } from "../repositories/IUserRepositories";
import { User } from "../infra/typeorm/entities/User";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/models/IStorageProvider";

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticate users can changes avatar");
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(avatarFileName);
    }

    const fileName = await this.storageProvider.saveFile(avatarFileName);

    user.avatar = fileName;

    await this.usersRepository.save(user);

    return user;
  }
}

export { UpdateUserAvatarService };
