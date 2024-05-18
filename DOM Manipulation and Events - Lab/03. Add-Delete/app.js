function addItem() {
    const list = document.getElementById('items');
    list.addEventListener('click', deleteItem);

    const newItemText = document.getElementById(`newItemText`);
    const newItem = document.createElement(`li`);
    newItem.innerHTML = `${newItemText.value} <a href="#">[Delete]</a>`;
    list.appendChild(newItem);
    newItemText.value = '';

    function deleteItem(item) {
        const el = item.target.parentNode;
        el.remove();
    }
}