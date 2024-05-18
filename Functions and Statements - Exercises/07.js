function solve(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) { // Matrix rows
        let row = [];

        for (let j = 0; j < n; j++) { // Matrix cols
            row.push(n);
        }

        matrix.push(row);
    }

    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(" "));
    }
}