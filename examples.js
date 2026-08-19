const squareOrSquareRoot = require('./index');

const examples = [
  [4, 3, 9, 7, 2, 1],
  [16, 25, 5, 10],
  [1, 2, 8, 36],
];

for (const numbers of examples) {
  console.log(`${JSON.stringify(numbers)} -> ${JSON.stringify(squareOrSquareRoot(numbers))}`);
}
