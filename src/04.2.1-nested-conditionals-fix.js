function numberIsDivisible(num) {
  if (num <= 0) {
    return "Number is not positive";
  }
  if (num % 2 === 0 && num % 3 === 0) {
    return "Divisible by 2 and 3";
  }
  if (num % 2 === 0) {
    return "Divisible by 2";
  }
  if (num % 3 === 0) {
    return "Divisible by 3";
  }
  return "Not divisible by 2 or 3";
}