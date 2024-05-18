function solve(str) {
    const words = str.split(' ');

    for (const word of words) {
        const isValid = word.startsWith('#') && word.length > 1;
        if (isValid) {
            let isLetter = true;
            let copyWord = '';

            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                char.charCodeAt() < 97 || char.charCodeAt() > 122 ? isLetter = false : copyWord += word[i];
            }
            isLetter ? console.log(copyWord) : null;
        }
    }
}