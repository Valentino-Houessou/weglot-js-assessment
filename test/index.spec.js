const fs = require('fs');
const path = require('path');
const fsPromise = fs.promises;
const main = require('../src/index.js');

const fileNumbers = Array.from({ length: 5 }, (_, i) => i + 1);
const inputPaths = fileNumbers.map((idx) =>
  path.join(__dirname, `../data/input${idx}.txt`)
);
const outputPaths = fileNumbers.map((idx) =>
  path.join(__dirname, `../data/output${idx}.txt`)
);

describe('integration tests', () => {
  inputPaths.forEach((path, idx) => {
    it('must resolve a good result', async () => {
      const resolvedOutput = await main(path);
      const expectedOutput = await fsPromise.readFile(outputPaths[idx], 'utf8');
      expect(resolvedOutput).toBe(expectedOutput);
    });
  });
});
