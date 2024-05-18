function solve(arr) {
    const movies = [];

    arr.forEach(line => {
        if (line.includes('addMovie ')) {
            const name = line.split('addMovie ')[1];
            movies.push({ name });
        } else if (line.includes('directedBy')) {
            const [name, director] = line.split(' directedBy ');
            const movie = movies.find(m => m.name === name);
            movie ? movie.director = director : null;

        } else if (line.includes('onDate')) {
            const [name, date] = line.split(' onDate ');
            const movie = movies.find(m => m.name === name);
            movie ? movie.date = date : null;
        }
    });

    movies.forEach(movie => {
        movie.name && movie.director && movie.date ?
            console.log(JSON.stringify(movie)) : null;
    })
}