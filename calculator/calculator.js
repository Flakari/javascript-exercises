function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	let sum = 0;
	arr.forEach(num => {
		sum = sum + num;
	});
	return sum;
}

function multiply (arr) {
	let sum = 1;
	arr.forEach(num => {
		sum = sum * num;
	});
	return sum;
}

function power(num1, num2) {
	sum = num1;
	for (let i = 1; i < num2; i++) {
		sum *= num1;
	}
	return sum;
}

function factorial(num) {
	if (num == 0) {
		return 1;
	}
	sum = 1;
	for (let i = num; i > 0; i--) {
		sum *= i;
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
