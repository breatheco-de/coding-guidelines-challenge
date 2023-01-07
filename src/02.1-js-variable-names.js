function sumPositiveNumbers(numbers) {
  let positiveSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
    }
  }
  return positiveSum;
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(sumPositiveNumbers(numbers));