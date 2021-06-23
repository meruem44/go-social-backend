import { getRepository, Repository } from "typeorm";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { Post } from "../entities/Post";
import { ICreatePostDTO } from "@modules/Posts/dtos/ICreatePostDTO";

class PostRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async list(): Promise<Post[]> {
    const posts = await this.ormRepository.find();

    return posts;
  }

  public async create({ user_id, content }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({
      user_id,
      content,
    });

    await this.ormRepository.save(post);

    return post;
  }

  public async findById(user_id: string): Promise<Post[]> {
    const posts = await this.ormRepository.find({ where: { user_id } });

    return posts;
  }
}

export { PostRepository };
