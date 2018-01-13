function translate(phrase) {
	let newPhrase = [];
	let tempPhrase = [];
	let vowelExp = /[aeiou]/;
	phrase = phrase.split(' ');
	
	phrase.forEach(word => {
		tempPhrase.push(word);

		if (vowelExp.test(word.charAt(0))) {
			tempPhrase.push('ay');
		}

		if (!vowelExp.test(word.charAt(0))) {
			word.split('');
		}
	});
	tempPhrase = tempPhrase.join('');
	return tempPhrase;
}


module.exports = {
	translate
}

