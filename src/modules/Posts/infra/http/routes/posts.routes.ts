import { Router } from "express";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

import { PostsController } from "../controllers/PostsController";

const postRouter = Router();
const postsController = new PostsController();

postRouter.use(ensureAuthenticate);

postRouter.post("/", postsController.create);
postRouter.get("/", postsController.index);
postRouter.get("/user/:id", postsController.show);

export { postRouter };
