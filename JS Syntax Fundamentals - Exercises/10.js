function checkingCharacters(number) {
    let sum = 0;
    let toString = number.toString();
    let boolean = true;

    for (let i = 0; i < toString.length; i++) {
        sum += parseInt(toString[i]);

        if (toString[i] !== toString[0]) {
            boolean = false;
        }
    }

    console.log(boolean);
    console.log(sum);
}