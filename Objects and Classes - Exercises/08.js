function solve(arr) {
    const carsNumbers = new Map();
    const fullList = arr.map(el => el.split(', '));

    fullList.forEach(element => {
        const command = element[0];
        const carNumber = element[1];

        command === 'IN' ? carsNumbers.set(carNumber, command) : null;
        command === 'OUT' ? carsNumbers.delete(carNumber) : null;
    });

    const sortedCarNumbers = Array.from(carsNumbers).sort((a, b) => a[0].localeCompare(b[0]));
    sortedCarNumbers.length === 0 ? console.log('Parking Lot is Empty') : null;
    sortedCarNumbers.forEach((carNum) => console.log(carNum[0]));
}