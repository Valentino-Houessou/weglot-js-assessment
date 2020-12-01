const slotFormater = require("./utils/slotFormater").slotFormater;
const {
  WORKING_BOUND_START,
  WORKING_BOUND_END,
  WEEK_DAYS_COUNT,
  MEETING_DURATION,
} = require("./constants.js");

module.exports = (weekSlots) => {
  if (!(weekSlots instanceof Map)) {
    throw "expects a Map instance as argument";
  }

  for (let idx = 1; idx <= WEEK_DAYS_COUNT; idx++) {
    let starting = WORKING_BOUND_START;
    let ending = starting + MEETING_DURATION;

    // If we come across a day without unavailability then we return his first slot
    if (!weekSlots.has(idx)) {
      return slotFormater(idx, starting, ending);
    }

    const daySlots = weekSlots.get(idx);
    // we sort the daySlots here to avoid sorting them right away on init for each day
    daySlots.sort((slot_1, slot_2) => slot_1.start - slot_2.start);

    for (slot of daySlots) {
      // traverse the day slots
      if (ending < slot.start) {
        // if the slot we are checking ending is before the current slot start value
        // then we found an available slot
        return slotFormater(slot.dayNumber, starting, ending);
      } else if (starting <= slot.end) {
        // if the slot we are checking starting is less or equal than the current slot end
        // then the starting new value is the current slot end + 1 minutes
        starting = slot.end + 1;
        ending = starting + MEETING_DURATION;
        if (ending >= WORKING_BOUND_END) {
          // if the ending is greater or equal than the working bound end
          // then there is no available slot
          break;
        }
      }
    }
  }

  return null;
};
