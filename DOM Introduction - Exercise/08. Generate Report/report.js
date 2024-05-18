function generateReport() {
    const tableRows = document.querySelectorAll("tbody tr");
    const tableHeads = document.querySelectorAll("thead tr th");

    let res = [];
    for (let i = 0; i < tableRows.length; i++) {
        let tableCells = tableRows[i].cells;

        let object = {};
        for (let k = 0; k < tableCells.length; k++) {
            let headerInfo = tableHeads[k].childNodes;

            if (headerInfo[1].checked) {
                object[headerInfo[0].textContent.trim().toLocaleLowerCase()] = tableCells[k].textContent;
            }
        }

        res.push(object);
    }

    const json = JSON.stringify(res);
    document.getElementById("output").textContent = json;
}