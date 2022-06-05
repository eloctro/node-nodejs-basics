import { pipeline, Transform } from "stream";

const read = process.stdin;
const write = process.stdout;

export const transform = async () => {
  const transform = new Transform({
    transform(data, encoding, callback) {
      const revers = data.toString().trim().split("").reverse().join("");
      callback(null, revers + '\n')
    },
  });
  pipeline(read, transform, write, (err) => {
    if (err) throw err;
  });
};

transform();
