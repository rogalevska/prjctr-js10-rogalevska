'use strict';

// Task 1
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let sum = 0;
    for(let arg of args) {
        sum += arg;
    };
    return sum;
}

// Task 2
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	function resultReturn(b) {
		return a * b;
	}
	return resultReturn;
}

// Task 3
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
		return function compare (a, b) {
			if (direction === '>') {
		if (a[property] > b[property]) return 1;
		if (a[property] === b[property]) return 0;
		if (a[property] < b[property]) return -1;
	} else if (direction === '<') {
			if (a[property] < b[property]) return 1;
			if (a[property] === b[property]) return 0;
			if (a[property] > b[property]) return -1;
	}}}


// Task 4
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];