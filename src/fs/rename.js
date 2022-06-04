import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  fs.readdir(path.join(__dirname, "files"), (err, items) => {
    if (err) {
      throw err;
    }
    try {
      if (
        items.includes("properFilename.md") ||
        !items.includes("wrongFilename.txt")
      ) {
        throw new Error();
      } else {
        fs.rename(
          path.join(__dirname, "files", "wrongFilename.txt"),
          path.join(__dirname, "files", "properFilename.md"),
          (err) => {
            if (err) {
              throw err;
            }
          }
        );
      }
    } catch (err) {
      console.error("FS operation failed");
    }
  });
};

rename();
