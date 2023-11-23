'use strict';

// Task 1
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
	function display () {
		if (delay > 0) {
			console.log(delay);
			delay --;
		} else if (delay === 0) {
			console.log('BOOM!');
			clearInterval(timer);
		}
	}
	const timer = setInterval(display, 1000);
}

// Task 2

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
	let timer = setTimeout(display, 1000);
	function display () {
		if (delay > 0) {
			console.log(delay);
			delay --;
			timer = setTimeout(display, 1000);
		} else if (delay === 0) {
			console.log('BOOM!');
			clearTimeout(timer);
		}
	}
}

// Task 3

let me = {
	name: 'Valery',
	residency: 'Limassol',
	gender: 'female',
	age: 33,
	hobby: 'hiking',
	defaultMood: 'tired',
	currentMood: 'sleepy',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency}`);
	},
	prognose() {
		console.log(`I hope that next year I'm gonna be ${this.age-10}`);
	},
	describeMyMood(){
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
	}
}

me.introduce();
me.prognose();
me.describeMyMood();

// Task 4

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат

// Task 5 тут до кінця не виходить 

function someFunction(a, b) {
	console.log(a * b);
} // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
	console.log('Chill out, you will get you result in 5 seconds');
	return function(...args){
		setTimeout(() => {
			func(...args)}, seconds * 1000);

};
};

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction(5, 2); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'
