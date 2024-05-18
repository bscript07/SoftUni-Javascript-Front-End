function solve(speed, area) {
    let view = "";
    let status = "";
    let speedLimit = 0;
    let difference = 0;

    if (area === "motorway") {
        speedLimit = 130;
    } else if (area === "interstate") {
        speedLimit = 90;
    } else if (area === "city") {
        speedLimit = 50;
    } else if (area === "residential") {
        speedLimit = 20;
    }

    if (speed <= speedLimit && speed > 0) {
        view = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
            status = "speeding";
        } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        view = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    console.log(view);
}