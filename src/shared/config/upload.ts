import multer from "multer";
import { resolve } from "path";
import crypyo from "crypto";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "..", "temp", "uploads"),
    filename(req, file, cb) {
      const fileHash = crypyo.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
};
