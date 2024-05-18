function solve(cars) {
    const garage = {};

    for (const car of cars) {
        const [garageNumber, carInfo] = car.split(' - ');
        const carDetails = carInfo.split(', ');
        !(garageNumber in garage) ? garage[garageNumber] = [] : null;

        const carStorage = {};
        for (const kvp of carDetails) {
            const [key, value] = kvp.split(': ');
            carStorage[key] = value;
        }
        garage[garageNumber].push(carStorage);
    }

    for (const garageNumber in garage) {
        const garageCars = garage[garageNumber];
        console.log(`Garage № ${garageNumber}`);

        for (const car of garageCars) {
            const carDetails = Object.entries(car)
                .map(([key, value]) => `${key} - ${value}`)
                .join(', ');
            console.log(`--- ${carDetails}`);
        }
    }
}