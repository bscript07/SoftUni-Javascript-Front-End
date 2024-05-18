function calculate(arr) {
    var sum = 0;

    for (const el of arr) {
        const num = Number(el);
        if (num % 2 === 0) {
            sum += num;
        } else {
            sum -= num;
        }
    }

    console.log(sum);
}