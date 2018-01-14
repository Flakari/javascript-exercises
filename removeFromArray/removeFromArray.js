var removeFromArray = function(arr) {
    let args = [...arguments];
    for (let i = 1; i < args.length; i++) {
        for(let j = 0; j < args[0].length; j++) {
            if (args[0][j] == args[i]) {
                args[0].splice(j, 1);
            }
        }
    }
    return args[0];
}

module.exports = removeFromArray
