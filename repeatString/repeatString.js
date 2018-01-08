var repeatString = function(str, count) {
    if (count < 0) {
        return 'ERROR';
    }
    
    let newStr = '';
    for(let i = 0; i < count; i++) {
        newStr = newStr + str;
    }
    return newStr;
}

module.exports = repeatString
