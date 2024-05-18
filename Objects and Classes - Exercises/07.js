function solve(str) {

    let result = {};
    let view = "";
    let words = str.split(' ').map(w => w.toLowerCase());

    for (const word of words) {
        result[word] == undefined ? result[word] = 1 : result[word]++;
    }

    for (const word of words) {
        if (result[word] % 2 === 1) {
            view += `${word} `;
            delete result[word]
        }
    }

    console.log(view);
}