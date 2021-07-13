import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { IPostRepository } from "@modules/Posts/repositories/IPostRepository";
import { Comment } from "../infra/typeorm/entities/Comment";
import { ICommentRepository } from "../repositories/ICommentRepository";

interface IRequest {
  post_id: string;
}

@injectable()
class ListCommentsService {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentRepository,
    @inject("PostRepository")
    private postRepository: IPostRepository
  ) {}

  public async execute({ post_id }: IRequest): Promise<Comment[]> {
    const findPost = await this.postRepository.findById(post_id);

    if (!findPost) {
      throw new AppError("This is post not found");
    }

    const comments = await this.commentsRepository.findByPostId(post_id);

    return comments;
  }
}

export { ListCommentsService };
