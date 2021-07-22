import { Router } from "express";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import multer from "multer";
import uploadConfig from "@shared/config/upload";

import { UsersController } from "../controllers/UsersController";
import { UpdateUserAvatarController } from "../controllers/UpdateUserAvatarController";

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", usersController.create);
usersRouter.get("/", ensureAuthenticate, usersController.index);
usersRouter.get("/:id", ensureAuthenticate, usersController.show);
usersRouter.patch(
  "/avatar",
  ensureAuthenticate,
  upload.single("avatar"),
  updateUserAvatarController.update
);

export { usersRouter };
