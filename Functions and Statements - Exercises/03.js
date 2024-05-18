function solve(characterOne, characterTwo) {
    let startCharacter = Math.min(characterOne.charCodeAt(), characterTwo.charCodeAt());
    let endCharacter = Math.max(characterOne.charCodeAt(), characterTwo.charCodeAt());
    let view = "";

    for (let i = startCharacter + 1; i < endCharacter; i++) {
        const currentCharacter = String.fromCharCode(i);
        i + 1 === endCharacter ? view += ` ${currentCharacter}` : view += ` ${currentCharacter}`;
    }
    console.log(view);
}