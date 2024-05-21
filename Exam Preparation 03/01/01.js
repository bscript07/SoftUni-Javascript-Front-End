function solve(input) {
  const astronauts = [];

  const astronautsCount = Number(input.shift());
  for (let currentAstronaut = 1; currentAstronaut <= astronautsCount; currentAstronaut++) {
    const [name, oxygen, energy] = input.shift().split(" ");

    astronauts.push({
      name,
      oxygen: Number(oxygen),
      energy: Number(energy),
    });
  }

  while (input.length > 0) {
    const command = input.shift();

    if (command === "End") {
      break;
    }

    const [action, name, value] = command.split(" - ");

    switch (action) {
      case "Explore":
        const astronaut = astronauts.find(
          (astronaut) => astronaut.name === name
        );
        const energyNeeded = Number(value);

        if (astronaut && astronaut.energy >= energyNeeded) {
          astronaut.energy -= energyNeeded;
          console.log(
            `${name} has successfully explored a new area and now has ${astronaut.energy} energy!`
          );
        } else if (astronaut) {
          console.log(`${name} does not have enough energy to explore!`);
        }
        break;
      case "Refuel":
        const astronautToRefuel = astronauts.find(
          (astronaut) => astronaut.name === name
        );
        const amount = Number(value);

        if (astronautToRefuel) {
          const energyRecovered = Math.min(
            amount,
            200 - astronautToRefuel.energy
          );
          astronautToRefuel.energy += energyRecovered;

          console.log(`${name} refueled their energy by ${energyRecovered}!`);
        }
        break;
      case "Breathe":
        const astronautToBreathe = astronauts.find(
          (astronaut) => astronaut.name === name
        );
        const amountOxygen = Number(value);

        if (astronautToBreathe) {
          const oxygenRecovered = Math.min(
            amountOxygen,
            100 - astronautToBreathe.oxygen
          );
          astronautToBreathe.oxygen += oxygenRecovered;

          console.log(
            `${astronautToBreathe.name} took a breath and recovered ${oxygenRecovered} oxygen!`
          );
        }
        break;
    }
  }

  astronauts.forEach((astronaut) => {
    console.log(
      `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`
    );
  });
}
