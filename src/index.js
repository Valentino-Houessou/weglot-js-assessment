const fs = require("fs");
const path = require("path");
const fsPromise = fs.promises;

const inputPath = path.join(__dirname, "../data/input1.txt");

const main = async () => {
  try {
    // read the file
    const inputStream = await fsPromise.readFile(inputPath, "utf8");
    // parse the stream into array 
    const data = inputStream.split("\n");
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  console.log(err);
});
