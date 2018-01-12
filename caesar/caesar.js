var caesar = function(str, num) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charCodeAt(0);
        if (str[i] < 65 || (str[i] > 90 && str[i] < 97) || str[i] > 122) {
            str[i] = String.fromCharCode(str[i]);
        } else {
            let numCount = 0;
            let originalCount = str[i];
            str[i] += num;

            if (num > 0) {
                if ((originalCount >= 65 && originalCount <= 90) && str[i] > 90) {
                    while (str[i] > 90) {
                        let numCount = str[i] - 91;
                        str[i] = 65;
                        str[i] += numCount;
                    }
                }

                if ((originalCount >= 97 && originalCount <= 122) && str[i] > 122) {
                    while (str[i] > 122) {
                        let numCount = str[i] - 123;
                        str[i] = 97;
                        str[i] += numCount;
                    }
                }
            }

            if (num < 0){
                if ((originalCount >= 65 && originalCount <= 90) && str[i] < 65) {
                    while (str[i] < 65) {
                        let numCount = str[i] - 64;
                        str[i] = 90;
                        str[i] += numCount;
                    }
                }

                if ((originalCount >= 97 && originalCount <= 122) && str[i] < 97) {
                    while (str[i] < 97) {
                        let numCount = str[i] - 96;
                        str[i] = 122;
                        str[i] += numCount;
                    }
                }
            }
            str[i] = String.fromCharCode(str[i]);
        }
    }
    str = str.join('');
    return str;
}

module.exports = caesar
