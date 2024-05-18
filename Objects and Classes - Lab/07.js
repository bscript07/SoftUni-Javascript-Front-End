function solve(arr) {

    const storage = {};

    for (let i = arr.length - 1; i >= 0; i--) {
        const [name, address] = arr[i].split(":");
      
      !storage[name] ? storage[name] = address : null;
    }

    const sortedNames = Object.keys(storage).sort();
    sortedNames.forEach(name => {
        const address = storage[name];
        console.log(`${name} -> ${address}`);
    });
}