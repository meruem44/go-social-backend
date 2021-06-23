import { inject, injectable } from "tsyringe";

import { Post } from "../infra/typeorm/entities/Post";
import { IPostRepository } from "../repositories/IPostRepository";

interface IRequet {
  user_id: string;
  content: string;
}

@injectable()
class CreatePostService {
  constructor(
    @inject("PostRepository")
    private postsRepository: IPostRepository
  ) {}

  public async execute({ user_id, content }: IRequet): Promise<Post> {
    const post = await this.postsRepository.create({
      user_id,
      content,
    });

    return post;
  }
}

export { CreatePostService };
