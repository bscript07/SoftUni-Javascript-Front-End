function editElement(reference, param1, param2) {

    const content = reference.textContent;
    const match = new RegExp(param1, 'g');
    const result = content.replace(match, param2);

    reference.textContent = result;
}