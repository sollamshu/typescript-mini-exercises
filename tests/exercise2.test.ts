import { isOdd } from '../src/exercises/exercise2';

describe('Exercise 2: Detecting if Number is Odd', () => {
  test('Number is odd', () => {
    const numberInput = 7;
    const result = isOdd(numberInput);

    expect(result).toBe(true);
  });

  test('Number is not odd', () => {
    const numberInput = 6;
    const result = isOdd(numberInput);

    expect(result).toBe(false);
  });
});