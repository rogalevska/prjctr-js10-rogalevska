"use strict";

// Task 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ЛолКек");
  } else if (i % 3 === 0) {
    console.log("Лол");
  } else if (i % 5 === 0) {
    console.log("Кек");
  } else {
    console.log(i);
  }
}

// Task 2
let value = 10;
for (let i = 1; i <= value; i++) {
  if (i % 2 !== 0) {
    continue;
  } else if (i % 2 === 0 && typeof i == "number") {
    console.log(i);
  } else {
    console.log("Таке чуство шо Бог десь наказує нас за шось");
  }
}
