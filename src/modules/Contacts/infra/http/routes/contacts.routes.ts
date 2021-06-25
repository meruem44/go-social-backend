import { Router } from "express";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

import { ContactsController } from "../controllers/ContactsController";

const contactRouter = Router();
const contactsController = new ContactsController();

contactRouter.use(ensureAuthenticate);

contactRouter.post("/", contactsController.create);
contactRouter.get("/", contactsController.show);
contactRouter.put("/", contactsController.update);

export { contactRouter };
