import { inject, injectable } from "tsyringe";

import { Post } from "../infra/typeorm/entities/Post";
import { IPostRepository } from "../repositories/IPostRepository";

interface IRequest {
  user_id: string;
}

@injectable()
class ListAllPostsUserService {
  constructor(
    @inject("PostRepository")
    private postsRepository: IPostRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<Post[]> {
    const posts = await this.postsRepository.findById(user_id);

    return posts;
  }
}

export { ListAllPostsUserService };
