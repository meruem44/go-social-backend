import express, { json, Application } from "express";
import "express-async-errors";

import "@shared/container";
import "@shared/infra/typeorm";
import uploadConfig from "@shared/config/upload";

import { routes } from "./routes";

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(json());
    this.server.use("/files", express.static(uploadConfig.uploadsFolder));
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
