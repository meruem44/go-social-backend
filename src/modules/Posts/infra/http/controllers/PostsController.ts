import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreatePostService } from "@modules/Posts/services/CreatePostService";
import { ListAllPostService } from "@modules/Posts/services/ListAllPostService";
import { ListAllPostsUserService } from "@modules/Posts/services/ListAllPostsUserService";

class PostsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllPost = container.resolve(ListAllPostService);

    const posts = await listAllPost.execute();

    return response.json(posts);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listAllPostsUser = container.resolve(ListAllPostsUserService);

    console.log(id);

    const posts = await listAllPostsUser.execute({
      user_id: id,
    });

    return response.json(posts);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const { content } = request.body;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute({
      user_id: id,
      content,
    });

    return response.json(post);
  }
}

export { PostsController };
