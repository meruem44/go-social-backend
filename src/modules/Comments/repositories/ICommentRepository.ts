import { Comment } from "@modules/Comments/infra/typeorm/entities/Comment";
import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";

interface ICommentRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findById(comment_id: string): Promise<Comment | undefined>;
  findByUserId(user_id: string): Promise<Comment[]>;
  findByPostId(post_id: string): Promise<Comment[]>;
  deleteById(comment_id: string): Promise<void>;
  save(data: Comment): Promise<Comment>;
}

export { ICommentRepository };
