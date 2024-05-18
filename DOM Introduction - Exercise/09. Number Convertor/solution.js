function solve() {
    const menu = document.getElementById(`selectMenuTo`);

    const binaryOption = document.createElement(`option`);
    binaryOption.textContent = `Binary`;
    binaryOption.value = `binary`;

    const hexadecimalOption = document.createElement(`option`);
    hexadecimalOption.textContent = `Hexadecimal`;
    hexadecimalOption.value = `hexadecimal`;

    menu.appendChild(binaryOption);
    menu.appendChild(hexadecimalOption);

    const map = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    const convert = document.querySelector(`#container > button`);

    convert.addEventListener('click', (e) => {
        const input = document.getElementById(`input`);
        const result = document.getElementById(`result`);

        result.value = map[menu.value](+input.value);
    });
}