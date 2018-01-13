function translate(phrase) {
	let newPhrase = [];
	let tempPhrase = [];
	let vowelExp = /[aeiou]/;
	phrase = phrase.split(' ');
	
	phrase.forEach(word => {
		tempPhrase.push(word);

		if (vowelExp.test(word.charAt(0))) {
			tempPhrase.push('ay');
			tempPhrase = tempPhrase.join('');
			newPhrase.push(tempPhrase);
			tempPhrase = [];
		}

		if (!vowelExp.test(word.charAt(0))) {
			let findVowel = 0;
			let slicePoint = 0;
			let i = 0;
			while (findVowel < 1) {
				if (vowelExp.test(tempPhrase[0].charAt(i))) {
					findVowel += 1;
					slicePoint = i;
				} else {
					i++;
				}
			}

			if(tempPhrase[0].charAt(slicePoint) == 'u') {
				if (tempPhrase[0].charAt(slicePoint - 1) == 'q') {
					slicePoint += 1;
				}
			}
			tempPhrase.push(tempPhrase[0].slice(slicePoint));
			tempPhrase.push(tempPhrase[0].slice(0, slicePoint));
			tempPhrase.push('ay');
			tempPhrase.shift();
			tempPhrase = tempPhrase.join('');
			newPhrase.push(tempPhrase);
			tempPhrase = [];
		}
	});
	newPhrase = newPhrase.join(' ');
	return newPhrase;
}


module.exports = {
	translate
}

