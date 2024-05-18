function sumTable() {

    const rows = Array.from(document.querySelectorAll("table tbody tr"));
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cells = rows[i].querySelectorAll("td");
        const valueOfCells = parseFloat(cells[cells.length - 1].textContent);

        !isNaN(valueOfCells) ? sum += valueOfCells : null;
    }

    const result = document.getElementById("sum");
    result.textContent = sum.toFixed(2);
}