function solve(int1, int2, int3) {
    let result;

    function sum() {
        return result = int1 + int2;
    }

    function subtract() {
        sum();
        return result - int3;
    }

    return subtract();
}