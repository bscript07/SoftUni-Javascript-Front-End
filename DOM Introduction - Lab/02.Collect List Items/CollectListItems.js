function extractText() {

    const items = document.getElementById('items');
    const result = document.getElementById('result');

    result.textContent = items.textContent;
    items.innerHTML = "";
}