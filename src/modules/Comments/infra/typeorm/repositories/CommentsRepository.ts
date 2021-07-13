import { getRepository, Repository } from "typeorm";

import { Comment } from "../entities/Comment";

import { ICreateCommentDTO } from "@modules/Comments/dtos/ICreateCommentDTO";
import { ICommentRepository } from "@modules/Comments/repositories/ICommentRepository";

class CommentsRepository implements ICommentRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create({
    content,
    post_id,
    user_id,
  }: ICreateCommentDTO): Promise<Comment> {
    console.log("Executando");

    console.log({
      content,
      post_id,
      user_id,
    });

    const comment = this.ormRepository.create({
      content,
      post_id,
      user_id,
    });

    await this.ormRepository.save(comment);

    return comment;
  }

  public async findById(comment_id: string): Promise<Comment | undefined> {
    const comment = await this.ormRepository.findOne(comment_id);

    return comment;
  }

  public async findByUserId(user_id: string): Promise<Comment[]> {
    const comments = await this.ormRepository.find({
      where: { user_id },
    });

    return comments;
  }

  public async deleteById(comment_id: string): Promise<void> {
    await this.ormRepository.delete(comment_id);
  }

  public async findByPostId(post_id: string): Promise<Comment[]> {
    const comments = await this.ormRepository.find({
      where: { post_id },
    });

    return comments;
  }

  public async save(comment: Comment): Promise<Comment> {
    return this.ormRepository.save(comment);
  }
}

export { CommentsRepository };
