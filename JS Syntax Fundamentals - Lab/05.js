function calculate(arg1, arg2, operator) {

    var result;
    switch(operator) {
        case "+": result = arg1 + arg2; break;
        case "-": result = arg1 - arg2; break;
        case "*": result = arg1 * arg2; break;
        case "/": result = arg1 / arg2; break;
        case "%": result = arg1 % arg2; break;
        case "**": result = arg1 ** arg2; break;
    }
    console.log(result);
}