function solve(modifiedNumber) {

    while (averageValue(modifiedNumber) < 5) {
        modifiedNumber += "9";
    }

    console.log(modifiedNumber);

    function sumValue(number) {
        let sum = 0;
        let toString = number.toString();

        for (let i = 0; i < toString.length; i++) {
            sum += parseInt(toString[i]);
        }

        return sum;
    }

    function averageValue(numReference) {
        return sumValue(numReference) / numReference.toString().length;
    }

}