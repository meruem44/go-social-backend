import { container } from "tsyringe";

import { IHashProvider } from "./HashProvider/models/IHashProvider";
import { BCryptHashProvider } from "./HashProvider/implementations/BCryptHashProvider";

import { IStorageProvider } from "./StorageProvider/models/IStorageProvider";
import { DiskStorageProvider } from "./StorageProvider/implementations/DiskStorageProvider";

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DiskStorageProvider
);
