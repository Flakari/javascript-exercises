var fibonacci = function(num) {
    if (num < 1) {
        return 'OOPS';
    }

    if (typeof num == 'string') {
        num = +num;
    }
    let arr = [1, 1];
    let next = 0;
    for (let i = 1; i < num - 1; i++) {
        next = arr[i] + arr [i - 1];
        arr.push(next);
    }
    return arr[num - 1];
}

module.exports = fibonacci
