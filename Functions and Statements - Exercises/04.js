function solve(int) {
    let toString = int.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < toString.length; i++) {
        let digit = parseInt(toString[i]);

        if (isNaN(digit)) {
            continue;
        }

        if (digit % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}