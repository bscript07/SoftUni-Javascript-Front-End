function checkingArg(arg) {
    var res;
    var argType = typeof (arg);

    if (argType === "number") {
        res = Math.pow(arg, 2) * Math.PI;
        console.log(res.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }

}