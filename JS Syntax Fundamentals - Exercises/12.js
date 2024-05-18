function solve(startingPoint, arg1, arg2, arg3, arg4, arg5) {

    startingPoint = manipulationString(startingPoint, arg1);
    startingPoint = manipulationString(startingPoint, arg2);
    startingPoint = manipulationString(startingPoint, arg3);
    startingPoint = manipulationString(startingPoint, arg4);
    startingPoint = manipulationString(startingPoint, arg5);

    function manipulationString(number, operations) {
        switch (operations) {
            case "chop": number /= 2; console.log(number); break;
            case "dice": number = Math.sqrt(number); console.log(number); break;
            case "spice": number += 1; console.log(number); break;
            case "bake": number *= 3; console.log(number); break;
            case "fillet": number *= 0.8; console.log(number); break;
        }
        return number;
    }
}