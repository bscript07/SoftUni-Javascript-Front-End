function solve(arg1, arg2, arg3) {
    let countOfNegativeNumbers = [arg1, arg2, arg3].filter(num => num < 0).length;
    if (countOfNegativeNumbers % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}