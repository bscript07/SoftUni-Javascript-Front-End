function solve(password) {

    let isSymbol = false;
    let count = 0;

    for (let i = 0; i < password.length; i++) {
        const char = password[i].charCodeAt();
        const digit = char >= 48 && char <= 57;
        const smallLetter = char >= 97 && char <= 122;
        const bigLetter = char >= 65 && char <= 90;

        digit ? count++ : null;
        !digit && !smallLetter && !bigLetter ? isSymbol = true : null;
    }

    password.length < 6 || password.length > 10 ? console.log("Password must be between 6 and 10 characters") : null;
    isSymbol ? console.log("Password must consist only of letters and digits") : null;
    count < 2 ? console.log("Password must have at least 2 digits") : null;
    count >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10) ? console.log("Password is valid") : null;

}