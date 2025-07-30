// Exercise 3: Finding the Largest Number
export function findLargestNumber(arrayOfNumbers: number[]): number {
  if (arrayOfNumbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let largest: number = arrayOfNumbers[0];

  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > largest) {
      largest = arrayOfNumbers[i];
    }
  }

  return largest;
}