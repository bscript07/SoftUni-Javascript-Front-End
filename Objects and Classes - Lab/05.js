function solve(arr) {
    const phoneBook = {};

    arr.forEach(input => {
        const [name, phoneNumber] = input.split(" ");
        phoneBook[name] = phoneNumber;
    });

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}