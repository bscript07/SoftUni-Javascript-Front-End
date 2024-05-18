function addItem() {

    const html = {
        text: document.getElementById(`newItemText`),
        value: document.getElementById(`newItemValue`),
        menu: document.getElementById(`menu`)
    }

    const element = document.createElement(`option`)
    element.textContent = html.text.value;
    element.value = html.value.value;

    html.text.value = "";
    html.value.value = "";

    html.menu.appendChild(element);
}