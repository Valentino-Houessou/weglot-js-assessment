module.exports = class Slot {
  /**
   * create a new slot
   * @param {string} slotString
   */
  constructor(slotString) {
    if (typeof slotString !== "string") {
      throw "expects a string input";
    }
    const slotData = slotString.split(" ");

    if (slotData.length < 2) {
      throw "bad slot format";
    }

    const slotBound = slotData[1].split("-");
    if (slotBound.length < 2) {
      throw "bad slot format";
    }

    const startBound = slotBound[0].split(":");
    const endBound = slotBound[1].split(":");

    if (startBound.length < 2 || endBound.length < 2) {
      throw "bad slot format";
    }

    this.dayNumber = slotData[0];
    this.start = parseInt(startBound[0]) * 60 + parseInt(startBound[1]);
    this.end = parseInt(endBound[0]) * 60 + parseInt(endBound[1]);
  }
};
