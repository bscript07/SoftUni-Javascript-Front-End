function solve(words, text) {
    const arr = words.split(", ");

    for (const word of arr) {
        const match = `${"*".repeat(word.length)}`;
        text = text.replace(match, word);
    }

    console.log(text);
}