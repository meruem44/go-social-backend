import fs from "fs";
import { resolve } from "path";
import uploadConfig from "@shared/config/upload";

import { IStorageProvider } from "../models/IStorageProvider";

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      resolve(uploadConfig.tmpFolder, file),
      resolve(uploadConfig.uploadsFolder, file)
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch (error) {}

    await fs.promises.unlink(filePath);
  }
}

export { DiskStorageProvider };
