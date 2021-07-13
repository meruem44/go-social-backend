import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreateCommentsService } from "@modules/Comments/services/CreateCommentsService";
import { ListCommentsService } from "@modules/Comments/services/ListCommentsPostService";
import { UpdateCommentService } from "@modules/Comments/services/UpdateCommentService";
import { DeleteCommentUserService } from "@modules/Comments/services/DeleteCommentUserService";

class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    console.log("chamou");

    const { post_id, content } = request.body;
    const user_id = request.user.id;

    console.log({
      content,
      post_id,
      user_id,
    });

    const createComments = container.resolve(CreateCommentsService);

    const comment = await createComments.execute({
      content,
      post_id,
      user_id,
    });

    return response.json(comment);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { post_id } = request.body;

    const listComments = container.resolve(ListCommentsService);

    const comments = await listComments.execute({
      post_id,
    });

    return response.json(comments);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { comment_id } = request.params;
    const { post_id, content } = request.body;
    const user_id = request.user.id;

    const updateComment = container.resolve(UpdateCommentService);

    const comment = await updateComment.execute({
      post_id,
      comment_id,
      user_id,
      content,
    });

    return response.json(comment);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { comment_id } = request.params;
    const { post_id, content } = request.body;
    const user_id = request.user.id;

    const deleteCommentUser = container.resolve(DeleteCommentUserService);

    await deleteCommentUser.execute({
      post_id,
      comment_id,
      user_id,
      content,
    });

    return response.status(203);
  }
}

export { CommentsController };
