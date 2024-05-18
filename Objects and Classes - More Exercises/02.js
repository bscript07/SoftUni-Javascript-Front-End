function solve(arr) {

    let catalog = {};

    for (const el of arr) {
        const [name, price] = el.split(" : ");
        const initial = name[0].toUpperCase();

        !catalog[initial] ? catalog[initial] = [] : null;
        catalog[initial].push({ name, price: Number(price) });
    }

    for (const initial in catalog) {
        catalog[initial].sort((a, b) => a.name.localeCompare(b.name));
    }

    const sortedInitials = Object.keys(catalog).sort();

    for (const initial of sortedInitials) {
        console.log(initial);

        for (const item of catalog[initial]) {
            console.log(`  ${item.name}: ${item.price}`);
        }
    }

}