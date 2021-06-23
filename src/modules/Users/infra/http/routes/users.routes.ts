import { Router } from "express";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

import { UsersController } from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);
usersRouter.get("/", ensureAuthenticate, usersController.index);
usersRouter.get("/:id", ensureAuthenticate, usersController.show);

export { usersRouter };
