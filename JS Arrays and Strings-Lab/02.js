function solve(number, arr) {
    let newArray = [];

    for (let i = 0; i < number; i++) {
        newArray.push(arr[i]);
    }

    newArray.reverse();
    let view = newArray.join(' ');
    console.log(view);
}