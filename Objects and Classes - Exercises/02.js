function solve(arr) {

    const res = [];
    for (const el of arr) {
        var [town, latitude, longitude] = el.split(" | ");
        latitude = parseFloat(latitude).toFixed(2);
        longitude = parseFloat(longitude).toFixed(2);

        res.push({
            town,
            latitude,
            longitude
        });
    }

    res.forEach(entry => console.log(entry));
}