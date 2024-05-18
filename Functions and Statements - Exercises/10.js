function solve(integerOne, integerTwo) {
    let factorialOne = 1;
    let factorialTwo = 1;

    for (let index = 1; index <= integerOne; index++) {
        factorialOne *= index;
    }

    for (let index = 1; index <= integerTwo; index++) {
        factorialTwo *= index;
    }

    let result = factorialOne / factorialTwo;
    console.log(result.toFixed(2));
}