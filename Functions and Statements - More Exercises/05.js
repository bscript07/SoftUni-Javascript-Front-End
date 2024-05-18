function solve(number) {

    const str = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {

        i % 4 === 0 ? console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`) : null;
        i % 4 === 1 ? console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`) : null;
        i % 4 === 2 ? console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`) : null;
        i % 4 === 3 ? console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`) : null;

        counter += 2;
    }
}
