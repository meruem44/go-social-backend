import { Router } from "express";

import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

import { CommentsController } from "../controllers/CommentsController";

const commentsRouter = Router();
const commentsController = new CommentsController();

commentsRouter.use(ensureAuthenticate);

commentsRouter.post("/", commentsController.create);
commentsRouter.get("/", commentsController.index);
commentsRouter.patch("/:comment_id", commentsController.update);
commentsRouter.delete("/:comment_id", commentsController.delete);

export { commentsRouter };
