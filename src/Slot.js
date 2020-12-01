const { parseMinutesToHours } = require('./utils/slotFormater.js');

module.exports = class Slot {
  /**
   * create a new slot
   * @param {string} slotString
   */
  constructor(slotString) {
    if (typeof slotString !== 'string') {
      throw new Error('expects a string input');
    }
    const slotData = slotString.split(' ');

    if (slotData.length < 2) {
      throw new Error('bad slot format');
    }

    const slotBound = slotData[1].split('-');
    if (slotBound.length < 2) {
      throw new Error('bad slot format');
    }

    const startBound = slotBound[0].split(':');
    const endBound = slotBound[1].split(':');

    if (startBound.length < 2 || endBound.length < 2) {
      throw new Error('bad slot format');
    }

    this.dayNumber = parseInt(slotData[0], 10);
    this.start = parseInt(startBound[0], 10) * 60 + parseInt(startBound[1], 10);
    this.end = parseInt(endBound[0], 10) * 60 + parseInt(endBound[1], 10);
  }

  toString() {
    return `${this.dayNumber} ${parseMinutesToHours(
      this.start
    )}-${parseMinutesToHours(this.end)}`;
  }
};
