const getAvailableSlot = require("../src/getAvailableSlot.js");
const parseToMap = require("../src/utils/parseToMap.js");
const slotsData = [
  "5 08:00-17:59",
  "1 08:00-17:59",
  "3 08:00-17:59",
  "2 09:00-17:59",
  "4 08:00-17:59",
];

describe("get the first available slot", () => {
  const weekSlots = parseToMap(slotsData);
  
  it("must have a Map instance as argument", () => {
    expect(() => getAvailableSlot()).toThrow(
      "expects a Map instance as argument"
    );
  });
});
