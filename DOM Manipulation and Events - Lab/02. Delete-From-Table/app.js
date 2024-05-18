function deleteByEmail() {
    const email = document.getElementsByName(`email`)[0].value.trim();
    const tableCells = document.querySelectorAll(`#customers td:nth-child(2)`);
    let isFound = false;

    for (const cell of tableCells) {
        if (cell.textContent === email) {
            cell.parentElement.remove();
            isFound = true;
        }
    }

    const res = document.getElementById(`result`);
    isFound ? res.textContent = `Deleted` : res.textContent = `Not found.`;

}