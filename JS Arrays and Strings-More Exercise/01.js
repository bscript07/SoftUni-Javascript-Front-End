function login(arr) {
    let username = arr.shift();
    let password = username.split("").reverse().join("");
    let counter = 0;
    let currentPassword = arr.shift();

    while (currentPassword !== password && counter < 3) {
        counter++;
        console.log("Incorrect password. Try again.");
        currentPassword = arr.shift();
    }

    currentPassword === password ? console.log(`User ${username} logged in.`)
        : console.log(`User ${username} blocked!`);
}