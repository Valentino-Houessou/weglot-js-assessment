const fs = require("fs");
const fsPromise = fs.promises;
const parseToMap = require("./utils/parseToMap.js");
const getAvailableSlot = require("./getAvailableSlot.js");

const main = async (inputPath) => {
  try {
    // read the file
    const inputStream = await fsPromise.readFile(inputPath, "utf8");
    // parse the stream into array
    const data = inputStream.split("\n");
    // parse the array into map
    const weekSlots = parseToMap(data);
    // get the available slot
    const availableSlot = getAvailableSlot(weekSlots);

    return availableSlot;
  } catch (error) {
    throw error;
  }
};

module.exports = main;
