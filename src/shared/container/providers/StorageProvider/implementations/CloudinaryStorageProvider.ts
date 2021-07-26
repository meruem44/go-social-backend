import cloudnary from "cloudinary";
import { IStorageProvider } from "../models/IStorageProvider";

import cloudinaryConfig from "../../../../config/upload";

class CloudinaryStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    cloudnary.v2.config(cloudinaryConfig);

    const fileUrl = await cloudnary.v2.uploader.upload(file, {
      upload_preset: "dev_lices",
    });

    console.log(fileUrl);

    return "";
  }

  public async deleteFile(file: string): Promise<void> {}
}

export { CloudinaryStorageProvider };
