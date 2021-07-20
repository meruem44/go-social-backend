import { inject, injectable } from "tsyringe";
import { IListPostDTO } from "../dtos/IListPostDTO";

import { IPostRepository } from "../repositories/IPostRepository";

@injectable()
class ListAllPostService {
  constructor(
    @inject("PostRepository")
    private postsRepository: IPostRepository
  ) {}

  public async execute(): Promise<IListPostDTO[]> {
    const posts = await this.postsRepository.list();

    return posts;
  }
}

export { ListAllPostService };
