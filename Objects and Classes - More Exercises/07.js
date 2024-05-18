function solve(data) {

    data = data.map(element => JSON.parse(element));
    data.forEach(element => element.sort((a, b) => b - a)); // sorting in descending order

    const arr = []; // array for store 

    for (let i = 0; i < data.length; i++) {
        const currentArray = data[i];
        var isUnique = true;

        for (let k = 0; k < arr.length; k++) {
            const nextArray = arr[k];
            nextArray.toString() === currentArray.toString() ? isUnique = false : null;
        }

        isUnique ? arr.push(currentArray) : null;
    }
    arr.sort((a, b) => a.length - b.length);
    arr.forEach(element => console.log(`[${element.join(', ')}]`));
}