import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readableStream = fs.createReadStream(
  path.join(__dirname, "files", "fileToRead.txt")
);

export const read = async () => {
  readableStream.on("data", (chunk) => process.stdout.write(chunk.toString()));
};

read();
