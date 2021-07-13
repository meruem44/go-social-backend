import { Router } from "express";

import { usersRouter } from "@modules/Users/infra/http/routes/users.routes";
import { sessiosRouter } from "@modules/Users/infra/http/routes/sessions.routes";
import { postRouter } from "@modules/Posts/infra/http/routes/posts.routes";
import { contactRouter } from "@modules/Contacts/infra/http/routes/contacts.routes";
import { commentsRouter } from "@modules/Comments/infra/http/routes/comments.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessiosRouter);
routes.use("/posts", postRouter);
routes.use("/contacts", contactRouter);
routes.use("/comments", commentsRouter);

export { routes };
