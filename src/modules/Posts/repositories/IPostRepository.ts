import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { Post } from "../infra/typeorm/entities/Post";

interface IPostRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  list(): Promise<Post[]>;
  findById(user_id: string): Promise<Post[]>;
}

export { IPostRepository };
