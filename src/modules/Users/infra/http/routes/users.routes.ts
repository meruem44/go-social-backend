import { Router } from "express";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import multer from "multer";
import uploadConfig from "@shared/config/upload";

import { UsersController } from "../controllers/UsersController";

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();

usersRouter.post("/", usersController.create);
usersRouter.get("/", ensureAuthenticate, usersController.index);
usersRouter.get("/:id", ensureAuthenticate, usersController.show);
usersRouter.get(
  "/avatar",
  ensureAuthenticate,
  upload.single("avatar"),
  usersController.show
);

export { usersRouter };
