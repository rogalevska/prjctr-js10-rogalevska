"use strict";

// Task 1
// Variant 1

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];
let initials = [];
const firstLetters = userNames.sort().join(' ').split(' ').map(function(item) {
    return item[0];
  });

for (let i = 0; i < firstLetters.length; i += 3) {
  initials.push(`${firstLetters[i]}.${firstLetters[i+1]}.${firstLetters[i+2]}.`);
}

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// Variant 2

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];
let initials = [];
const sortedNames = userNames.sort();
for (let i = 0; i < sortedNames.length; i++) {
let x = sortedNames[i].indexOf(' ') + 1;
let y = sortedNames[i].indexOf(' ', x) + 1;
initials.push(`${sortedNames[i][0]}.${sortedNames[i][x]}.${sortedNames[i][y]}.`)
}

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// Task2

// умовна конструкція
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
const vowels = 'АЕЄИІЇОУЮЯ';
for (let i = 0; i < userNames.length; i++) {
  if (vowels.indexOf(userNames[i][0]) >= 0) {
    filteredNames.push(userNames[i]);
  }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// вбудований метод масивів
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
for (let i = 0; i < userNames.length; i++) {
  if (vowels.includes(userNames[i][0])) {
    filteredNames.push(userNames[i]);
  }
}


console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// Task 3

const currentMaxValue = 4589;
let reverseMaxValue;
reverseMaxValue = Math.floor(currentMaxValue.toString().split("").reverse().join(""));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Task 4

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;
const flatResultsArray = resultsArray.flat(Infinity);
console.log(flatResultsArray);
productOfArray = 1;
for (let i = 0; i < flatResultsArray.length; i++) {
  productOfArray = productOfArray * flatResultsArray[i];
}

console.log(productOfArray); // 24
