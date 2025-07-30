import { findLargestNumber } from '../exercises/exercise3';

describe('Exercise 3: Finding the Largest Number', () => {
  test('Number is the largest', () => {
    const arrayOfNumbers = [20, 50, 30, 100, 1, 99];
    const result = findLargestNumber(arrayOfNumbers);

    expect(result).toBe(100);
  });
});