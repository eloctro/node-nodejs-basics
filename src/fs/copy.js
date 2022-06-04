import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  fs.readdir(path.join(__dirname), (err, files) => {
    if (err) {
      throw err;
    }

    try {
      if (files.includes("files-copy") || !files.includes("files")) {
        throw new Error();
      } else {
        fs.mkdir(path.join(__dirname, "files-copy"), (err) => {
          if (err) {
            console.log(err);
          }
        });

        fs.readdir(path.join(__dirname, "files"), (err, items) => {
          if (err) {
            throw err;
          }

          items.forEach((elem) => {
            fs.copyFile(
              path.join(__dirname, "files", `${elem}`),
              path.join(__dirname, "files-copy", `${elem}`),
              (err) => {
                if (err) throw err;
              }
            );
          });
        });
      }
    } catch (err) {
      console.error("FS operation failed");
    }
  });
};

copy();
