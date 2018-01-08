var sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let lowNumber = num1;
    let highNumber = num2;
    if (num2 < num1) {
        lowNumber = num2;
        highNumber = num1;
    }
    let sum = 0;
    for (let i = lowNumber; i <= highNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

module.exports = sumAll
