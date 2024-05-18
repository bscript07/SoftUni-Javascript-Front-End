function solve(arr) {

    function palindromeIntegers(num) {
        const toString = num.toString();
        const reversedString = toString.split("").reverse().join("");
        return toString === reversedString;
    };

    arr.forEach(integer => {
        palindromeIntegers(integer) ? console.log("true") : console.log("false");
    });
}