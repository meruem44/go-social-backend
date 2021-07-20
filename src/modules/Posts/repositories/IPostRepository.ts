import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IListPostDTO } from "../dtos/IListPostDTO";
import { Post } from "../infra/typeorm/entities/Post";

interface IPostRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  list(): Promise<IListPostDTO[]>;
  findById(user_id: string): Promise<Post[]>;
}

export { IPostRepository };
