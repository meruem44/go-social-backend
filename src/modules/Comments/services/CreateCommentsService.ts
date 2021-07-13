import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { Comment } from "../infra/typeorm/entities/Comment";
import { ICommentRepository } from "../repositories/ICommentRepository";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";

interface IRequest {
  content: string;
  post_id: string;
  user_id: string;
}

@injectable()
class CreateCommentsService {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentRepository,
    @inject("PostRepository")
    private postRepository: IPostRepository,
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    content,
    post_id,
    user_id,
  }: IRequest): Promise<Comment> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new AppError("User not found");
    }

    const findPost = await this.postRepository.findById(post_id);

    if (!findPost) {
      throw new AppError("This is post not found");
    }

    const comment = await this.commentsRepository.create({
      content,
      post_id,
      user_id,
    });

    return comment;
  }
}

export { CreateCommentsService };
