function solve(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const storage = [];
    const numberOfSongs = input.shift();
    const typeOfSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        const [type, name, time] = input[i].split("_");
        const song = new Song(type, name, time);
        storage.push(song);
    }

    if (typeOfSong === "all") {
        storage.forEach((i) => console.log(i.name));
    } else {
        const filteredSongs = storage.filter((i) => i.type === typeOfSong);
        filteredSongs.forEach((i) => console.log(i.name));
    }
}