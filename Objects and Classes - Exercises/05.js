function solve(arr) {

    let heroes = [];

    for (const el of arr) {
        const [names, level, items] = el.split(" / ");
        heroes.push({ name: names, level: parseInt(level), items: items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}