var reverseString = function(str) {
    let newStr = [];
    let endArr = str.length - 1;
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        newStr[i] = str[endArr];
        endArr--;
    }
    newStr = newStr.join('');
    return newStr;
}

module.exports = reverseString
