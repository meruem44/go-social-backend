import { container } from "tsyringe";
import { Request, Response } from "express";

import { UpdateUserAvatarService } from "@modules/Users/services/UpdateUserAvatarService";

class UpdateUserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      avatarFileName: String(request.file?.filename),
      user_id: request.user.id,
    });

    return response.json(user);
  }
}

export { UpdateUserAvatarController };
