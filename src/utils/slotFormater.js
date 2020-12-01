const formater = (raw) => {
  if (!Number.isInteger(raw)) {
    throw "expect an integer as argument";
  }

  let formated = "";

  if (raw === 0) {
    formated = "00";
  } else if (parseInt(Math.log10(raw)) + 1 < 2) {
    formated = "0" + raw;
  } else {
    formated = raw.toString();
  }

  return formated;
};

const parseMinutesToHours = (minutes) => {
  if (!Number.isInteger(minutes)) {
    throw "expect an integer as argument";
  }
  const hours = Math.trunc(minutes / 60);
  const remainMinutes = minutes - hours * 60;

  return `${formater(hours)}:${formater(remainMinutes)}`;
};

const slotFormater = (day, start, end) => {
  if (
    !Number.isInteger(day) ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    throw "expect an integer as argument";
  }
  return `${day} ${parseMinutesToHours(start)}-${parseMinutesToHours(end)}`;
};

module.exports = { formater, parseMinutesToHours, slotFormater };
