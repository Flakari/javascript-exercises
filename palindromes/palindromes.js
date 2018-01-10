var palindromes = function(word) {
    regExp = /\w/g;
    word = word.toLowerCase();
    palinCheck = word;
    let newWord = [];
    word = word.match(regExp);
    for (let i = word.length - 1; i >= 0; i--) {
        newWord.push(word[i]);
    }
    word = word.join();
    newWord = newWord.join();
    return newWord == word;
}

module.exports = palindromes
