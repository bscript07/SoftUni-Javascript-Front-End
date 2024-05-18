function solve(data) {

    const object = {};

    data[0].forEach(line => {
        const [flightNumber, destination] = line.split(" ");
        object[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    data[1].forEach(line => {
        const [flightNumber, status] = line.split(" ");
        object.hasOwnProperty(flightNumber) ?
            object[flightNumber].Status = status : null;
    });

    for (const flights in object) {
        object[flights].Status === String(data[2]) ?
            console.log(object[flights]) : null;
    }
}