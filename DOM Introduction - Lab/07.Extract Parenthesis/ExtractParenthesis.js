function extract(content) {

    const args = document.getElementById(content).textContent;
    const module = /\(([^)]+)\)/g;
    let result = args.matchAll(module);

    let collection = [];
    for (const el of result) {
        collection.push(el[1]);
    }

    return collection.join("; ");
}