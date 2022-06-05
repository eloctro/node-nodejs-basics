import fs, { createReadStream } from "fs";
import path, { dirname } from "path";
import { stdin } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rs = process.stdin
const writebleStream = fs.createWriteStream(
  path.join(__dirname, "files", "fileToWrite.txt")
);

export const write = async () => {
  rs.pipe(writebleStream)
};

write()