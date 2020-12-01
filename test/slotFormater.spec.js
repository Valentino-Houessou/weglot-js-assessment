const parseMinutesToHours = require("../src/utils/slotFormater.js")
  .parseMinutesToHours;

const formater = require("../src/utils/slotFormater.js").formater;

const slotFormater = require("../src/utils/slotFormater").slotFormater;

describe("parse minutes to hours", () => {
  it("must have a integer as argument", () => {
    expect(() => parseMinutesToHours()).toThrow(
      "expect an integer as argument"
    );
  });
  it("should return good result", () => {
    let hours = parseMinutesToHours(480);
    expect(hours).toBe("08:00");
    hours = parseMinutesToHours(839);
    expect(hours).toBe("13:59");
  });
});

describe("formatter from integer to hour format", () => {
  it("must have a integer as argument", () => {
    expect(() => formater()).toThrow("expect an integer as argument");
  });
  it("should return good result", () => {
    let formated = formater(0);
    expect(formated).toBe("00");
    formated = formater(8);
    expect(formated).toBe("08");
    formated = formater(11);
    expect(formated).toBe("11");
  });
});

describe("slot elements to string", () => {
  it("must have a integer as argument", () => {
    expect(() => slotFormater()).toThrow("expect an integer as argument");
  });
  it("should return good result", () => {
    let formated = slotFormater(1, 780, 839);
    expect(formated).toBe("1 13:00-13:59");
  });
});
