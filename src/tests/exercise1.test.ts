import { containsConsecutive } from '../exercises/exercise1';

describe('Exercise 1: Detecting Two Consecutive Identical Numbers in Array', () => {
  test('Array does not contains consecutive identical numbers', () => {
    const arrayOfNumbers = [7,1,7];
    const numberToFind = 7;
    const result = containsConsecutive(arrayOfNumbers, numberToFind);

    expect(result).toBe(false);
  });

  test('Array does contains consecutive identical numbers', () => {
    const arrayOfNumbers = [1,7,7];
    const numberToFind = 7;
    const result = containsConsecutive(arrayOfNumbers, numberToFind);

    expect(result).toBe(true);
  });
});