function addItem() {

    const inputElementText = document.getElementById(`newItemText`).value;
    const newListItemElement = document.createElement(`li`);
    newListItemElement.appendChild(document.createTextNode(inputElementText));
    document.getElementById(`items`).appendChild(newListItemElement);
    document.getElementById(`newItemText`).value = "";

}