import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const text = "I am fresh and young";
const pathToDir = path.join(__dirname, "files");

export const create = async () => {
  fs.readdir(pathToDir, (err, files) => {
    if (err) {
      throw err;
    }

    try {
      if (files.includes("fresh.txt")) {
        throw new Error();
      } else {
        fs.writeFile(path.join(pathToDir, "fresh.txt"), text, (err) => {
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

create();
