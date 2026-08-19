function squareOrSquareRoot(numbers) {
  return numbers.map((number) => {
    const squareRoot = Math.sqrt(number);

    return Number.isInteger(squareRoot) ? squareRoot : number ** 2;
  });
}

module.exports = squareOrSquareRoot;
