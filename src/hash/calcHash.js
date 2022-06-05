import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { createHash } = await import("crypto");

export const calculateHash = async () => {
  fs.readFile(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt"), (err, data) => {
      if (err) {
        throw err;
      }
      const hash = createHash("sha256").update(data).digest("hex");
      console.log(hash);
    }
  );
  
};

calculateHash();
