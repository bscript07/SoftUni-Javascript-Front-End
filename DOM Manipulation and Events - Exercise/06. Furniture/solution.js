function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const [incomeTextArea, resultTextArea] =
    document.querySelectorAll("textarea");
  const tableBody = document.querySelector("tbody");

  generateBtn.addEventListener("click", generateHandler);
  buyBtn.addEventListener("click", buyHandler);

  function generateHandler(e) {
    if (!incomeTextArea.value) {
      return;
    }
    let value = JSON.parse(incomeTextArea.value);
    for (let el of value) {
      let domElements = createTable(el);
      tableBody.appendChild(domElements);
    }
  }

  function createTable(data) {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML =
      "<td>" +
      `<img src=${data.img}>` +
      "</td>" +
      "<td>" +
      `<p>${data.name}</p>` +
      "</td>" +
      "<td>" +
      `<p>${data.price}</p>` +
      "</td>" +
      "<td>" +
      `<p>${data.decFactor}</p>` +
      "</td>" +
      "<td>" +
      "<input type='checkbox'/>" +
      "</td>";

    return tableRow;
  }

  function buyHandler(e) {
    let names = [];
    let totalPrice = 0;
    let averageDecFactor = 0;
    let selectCheckbox = Array.from(
      document.querySelectorAll("input[type=checkbox]")
    ).filter((el) => el.checked);

    selectCheckbox.forEach((el) => {
      let [img, name, price, decorFactor, mark] = Array.from(
        el.parentElement.parentElement.children
      );
      names.push(name.children[0].textContent);
      totalPrice += Number(price.children[0].textContent);
      averageDecFactor += Number(decorFactor.children[0].textContent);
    });
    let res = `Bought furniture: ${names.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      averageDecFactor / names.length
    }`;
    res = res === "" ? "empty" : res;
    resultTextArea.value = res;
  }
}
