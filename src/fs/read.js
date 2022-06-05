import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  fs.readdir(path.join(__dirname, "files"), (err, files) => {
    if (err) {
      throw err;
    }

    try {
      if (!files.includes("fileToRead.txt")) {
        throw new Error();
      } else {
        const readableStream = fs.createReadStream(
          path.join(__dirname, "files", "fileToRead.txt")
        );
        readableStream.on("data", (chunk) => console.log(chunk.toString()));
      }
    } catch (err) {
      console.error(`FS operation failed`);
    }
  });
};

read();
