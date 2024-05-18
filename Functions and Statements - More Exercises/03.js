function solve(arr) {

    const [x1, y1, x2, y2] = arr;
    const point1 = firstPoint();
    const point2 = secondPoint();
    const point3 = thirdPoint();

    point1 === Math.trunc(point1)
        ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) :
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)

    point2 === Math.trunc(point2)
        ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) :
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)

    point3 === Math.trunc(point3)
        ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) :
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)

    function firstPoint() {
        const checkFirstPoint = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkFirstPoint;
    }

    function secondPoint() {
        const checkSecondPoint = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checkSecondPoint;
    }

    function thirdPoint() {
        const checkThirdPoint = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThirdPoint;
    }
}