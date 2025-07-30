// Exercise 4: Sort Numbers Ascending
export function sortNumbersAscending(arrayOfNumbers: number[]): number[] {
  const arrayOfNumbersCopy = [...arrayOfNumbers];
  // If a - b is negative, 'a' comes before 'b'
  // If a - b is positive, 'b' comes before 'a'
  // If a - b is zero, their relative order remains unchanged (but in practice, they stay as is)
  arrayOfNumbersCopy.sort((a, b) => a - b);

  return arrayOfNumbersCopy;
}