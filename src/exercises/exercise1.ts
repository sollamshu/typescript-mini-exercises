// Exercise 1: Detecting Two Consecutive Identical Numbers in Array
export function containsConsecutive(arrayOfNumbers: number[], numberToFind: number = 7): boolean {
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] === numberToFind && arrayOfNumbers[i + 1] === numberToFind) {
      return true;
    }
  }

  return false;
}