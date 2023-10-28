"use strict";

function iterativeOddSumTo(number) {
  let sum = 0;
  if (number === 0) {
    return number;
  } else if (number % 2 !== 0) {
    sum = sum + number;
  }
  return sum + iterativeOddSumTo(number - 1);
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25

// Task 2

function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    } else {
      continue;
    }
  }
  return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
