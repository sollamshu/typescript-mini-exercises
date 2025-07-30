import { sortNumbersAscending } from '../exercises/exercise4';

describe('Exercise 4: Sort Numbers Ascending', () => {
  test('Number is the largest', () => {
    const arrayOfNumbers = [20, 50, 30, 100, 1, 99];
    const result = sortNumbersAscending(arrayOfNumbers);

    expect(result).toStrictEqual([1, 20, 30, 50, 99, 100]);
  });
});