function solve(day, age) {

    if (day == "Weekday") {
        if (0 <= age && age <= 18) {
            console.log(`${12}$`);
            return;
        } else if (18 < age && age <= 64) {
            console.log(`${18}$`);
            return;
        } else if (64 < age && age <= 122) {
            console.log(`${12}$`);
            return;
        } else if (age < -1 || age > 122) {
            console.log("Error!");
            return;
        }
    } else if (day == "Weekend") {
        if (0 <= age && age <= 18) {
            console.log(`${15}$`);
            return;
        } else if (18 < age && age <= 64) {
            console.log(`${20}$`);
            return;
        } else if (64 < age && age <= 122) {
            console.log(`${15}$`);
            return;
        } else if (age < -1 || age > 122) {
            console.log("Error!");
            return;
        }
    } else if (day == "Holiday") {
        if (0 <= age && age <= 18) {
            console.log(`${5}$`);
            return;
        } else if (18 < age && age <= 64) {
            console.log(`${12}$`);
            return;
        } else if (64 < age && age <= 122) {
            console.log(`${10}$`);
            return;
        } else if (age < -1 || age > 122) {
            console.log("Error!");
            return;
        }
    }
}