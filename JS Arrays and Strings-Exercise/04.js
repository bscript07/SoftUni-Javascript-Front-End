function solve(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        result.push(sortedArray[i]); // smallest number 
        i !== arr.length - i - 1 ? result.push(sortedArray[arr.length - i - 1]) : null; // biggest number
    }
    return result;

}