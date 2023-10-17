'use strict';

// Task 1
const a = 153;
const b = 13;
console.log(a + b, a - b, a * b, a / b, b ** 2, Math.sqrt(a));

// Task 2
let transform = 0;
console.log(typeof transform);
transform = transform.toString();
console.log(typeof transform, transform);
transform = Number(transform);
console.log(typeof transform, transform);
transform = !!transform;
console.log(typeof transform, transform);