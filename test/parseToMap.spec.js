const parseToMap = require('../src/utils/parseToMap.js');
const slotsData = [
  '5 08:00-17:59',
  '1 08:00-17:59',
  '3 08:00-17:59',
  '2 09:00-17:59',
  '4 08:00-17:59',
];
describe('parse slot array to map', () => {
  it('must have an input of type array', () => {
    expect(() => parseToMap()).toThrow('expects an array as input');
  });
  it('must return an instance of Map', () => {
    expect(() => parseToMap(slotsData)).toBeInstanceOf(Function);
  });
});
