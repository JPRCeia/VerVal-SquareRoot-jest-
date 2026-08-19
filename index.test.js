const squareOrSquareRoot = require('./index');

describe('squareOrSquareRoot', () => {
  test('returns square roots for perfect squares', () => {
    expect(squareOrSquareRoot([0, 1, 4, 9, 16, 25])).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('returns squares for non-perfect squares', () => {
    expect(squareOrSquareRoot([2, 3, 5, 7])).toEqual([4, 9, 25, 49]);
  });

  test('handles mixed input values', () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1]);
  });

  test('does not mutate the input array', () => {
    const numbers = [4, 3, 9];

    squareOrSquareRoot(numbers);

    expect(numbers).toEqual([4, 3, 9]);
  });

  test('returns an empty array for empty input', () => {
    expect(squareOrSquareRoot([])).toEqual([]);
  });
});