import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "@modules/Users/services/CreateUserService";
import { ListUsersService } from "@modules/Users/services/ListUsersService";
import { ShowUserDetailsService } from "@modules/Users/services/ShowUserDetailsService";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    user.password = "";

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute({ user_id: id });

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserDetails = container.resolve(ShowUserDetailsService);

    const user = await showUserDetails.execute({ user_id: id });

    return response.json(user);
  }
}

export { UsersController };
