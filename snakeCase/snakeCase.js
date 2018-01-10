var snakeCase = function(variable) {
    let regExp = /\b\w+\b/g;
    let expTwo = /^([a-z]+)([A-Z][a-z]+)/;

    if (expTwo.test(variable)) {
        let newCase = [];
        variable = expTwo.exec(variable);
        for (let i = 1; i < 3; i++) {
            variable[i] = variable[i].toLowerCase();
            newCase.push(variable[i]);
        }
        newCase = newCase.join('_');
        return newCase;
    } else {
    variable = variable.toLowerCase();
    variable = variable.match(regExp).join('_');
    return variable;
    }
}

module.exports = snakeCase
