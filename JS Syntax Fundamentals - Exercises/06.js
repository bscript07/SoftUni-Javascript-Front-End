function solve(num) {
    let sum = 0;
    let toString = num.toString();

    for (let i = 0; i < toString.length; i++) {
        sum += parseInt(toString[i]);
    }
    return sum;
}