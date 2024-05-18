function solve(word, text) {
    const words = text.toLowerCase().split(" ");
    const target = word.toLowerCase();
    const matching = words.includes(target);
    matching ? console.log(word) : console.log(`${word} not found!`);
}