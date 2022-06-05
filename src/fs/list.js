import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  fs.readdir(path.join(__dirname), (err, src) => {
    if (err) {
      throw err;
    }

    try {
      if (!src.includes("files")) {
        throw new Error();
      } else {
        fs.readdir(path.join(__dirname, "files"), (err, files) => {
          if (err) {
            throw err;
          }

          files.forEach((file) => {
            stdout.write(file + '\n')
          });
        });
      }
    } catch (err) {
      console.error(`FS operation failed`);
    }
  });
};

list();
