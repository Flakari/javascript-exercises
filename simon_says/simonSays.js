function echo(str) {
	return str;
}

function shout(str) {
	return str.toUpperCase();
}

function repeat(str, num) {
	if (!num) {
		str = str + ' ' + str;
		return str;
	}
	let newStr = str;
	for (let i = 1; i < num; i++) {
		newStr = newStr + ' ' + str;
	}
	return newStr;
}

function pieceOfWord(str, num) {
	return str.slice(0, num);
}

function firstWord(str) {
	str = str.split(' ');
	return str[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator() {
	
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
