import "reflect-metadata";

import app from "./app";

import { handleErrors } from "./middlewares/HandleErros";

app.use(handleErrors);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server is running");
});
