function solve(json) {
    const parseToObject = JSON.parse(json);

    for (const key in parseToObject) {
        console.log(`${key}: ${parseToObject[key]}`);
    }
}