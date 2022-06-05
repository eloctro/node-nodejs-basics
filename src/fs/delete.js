import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  fs.readdir(path.join(__dirname, "files"), (err, files) => {
    if (err) {
      throw err;
    }

    try {
      if (!files.includes("fileToRemove.txt")) {
        throw new Error();
      } else {
        fs.rm(path.join(__dirname, "files", "fileToRemove.txt"), (err) => {
          if (err) {
            throw err;
          }
        });
      }
    } catch (err) {
      console.error(`FS operation failed`);
    }
  });
};

remove();
