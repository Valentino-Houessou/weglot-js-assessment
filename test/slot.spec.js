const Slot = require('../src/Slot.js');
const slotWithoutDay = '08:45-12:59';
const slotWithoutBound = '1 12:59';
const slotWithoutMinute = '1 08-12:59';
const correctSlot = '1 08:45-12:59';

describe('the creation of a slot', () => {
  it('must have an input of type string', () => {
    expect(() => new Slot()).toThrow('expects a string input');
  });
  it('must have a good format', () => {
    expect(() => new Slot(slotWithoutDay)).toThrow('bad slot format');
    expect(() => new Slot(slotWithoutBound)).toThrow('bad slot format');
    expect(() => new Slot(slotWithoutMinute)).toThrow('bad slot format');
  });
  it('must have a day number', () => {
    const slot = new Slot(correctSlot);
    expect(slot.dayNumber).toBe(1);
  });
  it('must have a start', () => {
    const slot = new Slot(correctSlot);
    expect(slot.start).toBe(525);
  });
  it('must have an end', () => {
    const slot = new Slot(correctSlot);
    expect(slot.end).toBe(779);
  });
});

describe('slot to string', () => {
  it('must return a good string format', () => {
    const slot = new Slot(correctSlot);
    expect(slot.toString()).toBe(correctSlot);
  });
});
