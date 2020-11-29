const fs = require("fs");
const path = require("path");
const fsPromise = fs.promises;

const inputPath = path.join(__dirname, "../data/input3.txt");

const Slot = require(path.join(__dirname, "./Slot.js"));
const parseToMap = require(path.join(__dirname, "./utils/parseToMap.js"));

const main = async () => {
  try {
    // read the file
    const inputStream = await fsPromise.readFile(inputPath, "utf8");
    // parse the stream into array
    const data = inputStream.split("\n");
    const weekSlots = parseToMap(data);
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  console.log(err);
});
