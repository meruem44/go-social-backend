import multer from "multer";
import { resolve } from "path";
import crypyo from "crypto";

const tmpFolder = resolve(__dirname, "..", "..", "..", "temp");

export default {
  tmpFolder,
  uploadsFolder: resolve(tmpFolder, "uploads"),

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, cb) {
      const fileHash = crypyo.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
};
