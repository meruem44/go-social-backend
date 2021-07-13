import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { Comment } from "../infra/typeorm/entities/Comment";
import { ICommentRepository } from "../repositories/ICommentRepository";
import { IUserRepository } from "@modules/Users/repositories/IUserRepositories";

interface IRequest {
  user_id: string;
  comment_id: string;
  post_id: string;
  content: string;
}

@injectable()
class UpdateCommentService {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentRepository,
    @inject("PostRepository")
    private postRepository: IPostRepository,
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    user_id,
    post_id,
    comment_id,
    content,
  }: IRequest): Promise<Comment> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new AppError("User not found");
    }

    const findPost = await this.postRepository.findById(post_id);

    if (!findPost) {
      throw new AppError("This is post not found");
    }

    const findComments = await this.commentsRepository.findById(comment_id);

    if (!findComments) {
      throw new AppError("Comments not found ");
    }

    findComments.content = content;

    await this.commentsRepository.save(findComments);

    return findComments;
  }
}

export { UpdateCommentService };
