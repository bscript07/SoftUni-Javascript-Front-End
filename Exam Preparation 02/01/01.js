function solve(input) {
    const baristas = [];
    const baristasCount = Number(input.shift());
  
    for (
      let currentBarista = 1;
      currentBarista <= baristasCount;
      currentBarista++
    ) {
      const [name, shift, ...coffeTypes] = input.shift().split(" ");
      const coffeType = coffeTypes.join(" ");
  
      baristas.push({
        name,
        shift,
        coffeTypes: coffeType.split(","),
      });
    }
  
    while (input.length > 0) {
      const [action, ...args] = input.shift().split(" / ");
  
      switch (action) {
        case "Prepare":
          {
            const [baristaName, shift, coffeType] = args;
            const barista = baristas.find(
              (barista) => barista.name === baristaName
            );
  
            if (
              barista &&
              barista.shift === shift &&
              barista.coffeTypes.includes(coffeType)
            ) {
              console.log(`${baristaName} has prepared a ${coffeType} for you!`);
            } else {
              console.log(
                `${baristaName} is not available to prepare a ${coffeType}.`
              );
            }
          }
          break;
  
        case "Change Shift":
          {
            const [baristaNameChange, newShift] = args;
            const baristaChange = baristas.find(
              (barista) => barista.name === baristaNameChange
            );
  
            if (baristaChange) {
              baristaChange.shift = newShift;
              console.log(
                `${baristaNameChange} has updated his shift to: ${newShift}`
              );
            }
          }
          break;
  
        case "Learn":
          {
            const [baristaName, newCoffeType] = args;
            const baristaLearn = baristas.find(
              (barista) => barista.name === baristaName
            );
  
            if (baristaLearn) {
              if (baristaLearn.coffeTypes.includes(newCoffeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeType}.`);
              } else {
                baristaLearn.coffeTypes.push(newCoffeType);
                console.log(
                  `${baristaName} has learned a new coffee type: ${newCoffeType}.`
                );
              }
            }
          }
          break;
      }
    }
  
    baristas.forEach((barista) =>
      console.log(
        `Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeTypes.join(", ")}`
      )
    );
  }