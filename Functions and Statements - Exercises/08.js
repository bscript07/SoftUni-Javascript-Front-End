function solve(number) {
    let sum = 0;

    function perfectNumber(number) {
        number <= 1 ? false : null;

        for (let i = 1; i <= Math.floor(number / 2); i++) {
            number % i === 0 ? sum += i : null;
        }
        return sum === number;
    }

    perfectNumber(number)
        ? console.log("We have a perfect number!")
        : console.log("It's not so perfect.");

}