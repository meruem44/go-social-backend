import { inject, injectable } from "tsyringe";

import { Post } from "../infra/typeorm/entities/Post";
import { IPostRepository } from "../repositories/IPostRepository";

@injectable()
class ListAllPostService {
  constructor(
    @inject("PostRepository")
    private postsRepository: IPostRepository
  ) {}

  public async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.list();

    return posts;
  }
}

export { ListAllPostService };
