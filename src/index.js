const fs = require('fs');
const parseToMap = require('./utils/parseToMap.js');
const getAvailableSlot = require('./getAvailableSlot.js');

const fsPromise = fs.promises;

const main = async (inputPath) => {
  // read the file
  const inputStream = await fsPromise.readFile(inputPath, 'utf8');
  // parse the stream into array
  const data = inputStream.split('\n');
  // parse the array into map
  const weekSlots = parseToMap(data);
  // get the available slot
  const availableSlot = getAvailableSlot(weekSlots);

  return availableSlot;
};

module.exports = main;
