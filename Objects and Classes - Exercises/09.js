function solve(jsonArray) {

    const dictionary = {};
    jsonArray.forEach(jsonString => {
        const object = JSON.parse(jsonString);
        const term = Object.keys(object)[0];
        const definition = object[term];
        dictionary[term] = definition;
    });

    const sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        const definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    });
}