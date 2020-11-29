const Slot = require("../Slot.js");

module.exports = (data) => {
  if (!Array.isArray(data)) {
    throw "expects an array as input";
  }

  const weekSlots = new Map();

  data.forEach((elt) => {
    const slot = new Slot(elt);
    if (weekSlots.has(slot.dayNumber)) {
      weekSlots.set(slot.dayNumber, [...weekSlots.get(slot.dayNumber), slot]);
    } else {
      weekSlots.set(slot.dayNumber, [slot]);
    }
  });
  return weekSlots;
};
