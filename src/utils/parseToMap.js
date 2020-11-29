const path = require("path");
const Slot = require(path.join(__dirname, "../Slot.js"));

module.exports = (data) => {
  if (!Array.isArray(data)) {
    throw "expects an array as input";
  }

  const weekSlots = new Map();

  data.forEach((elt) => {
    const slot = new Slot(elt);
    weekSlots[slot.dayNumber] = weekSlots[slot.dayNumber]
      ? [...weekSlots[slot.dayNumber], slot]
      : [slot];
  });

  return weekSlots;
};
