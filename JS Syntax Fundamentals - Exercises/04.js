function solve(num1, num2) {
    let sum = 0;
    let numbers = "";

    for (let i = num1; i <= num2; i++) {
        sum += i;
        numbers += i + " ";
    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}