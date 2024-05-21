function solve(input) {
    let n = parseInt(input[0]);
    let characters = {};
  
    for (let i = 1; i <= n; i++) {
      let [name, hp, bullets] = input[i].split(" ");
      characters[name] = { hp: parseInt(hp), bullets: parseInt(bullets) };
    }
  
    for (let i = n + 1; i < input.length; i++) {
      let [action, ...params] = input[i].split(" - ");
      if (action === "Ride Off Into Sunset") break;
      executeAction(action, params, characters);
    }
  
    function executeAction(action, params, characters) {
      let [characterName, ...rest] = params;
      let character = characters[characterName];
  
      switch (action) {
        case "FireShot":
          let target = rest[0];
          if (character.bullets > 0) {
            character.bullets--;
            console.log(
              `${characterName} has successfully hit ${target} and now has ${character.bullets} bullets!`
            );
          } else {
            console.log(
              `${characterName} doesn't have enough bullets to shoot at ${target}!`
            );
          }
          break;
        case "TakeHit":
          let damage = parseInt(rest[0]);
          let attacker = rest[1];
          character.hp -= damage;
          if (character.hp > 0) {
            console.log(
              `${characterName} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`
            );
          } else {
            console.log(`${characterName} was gunned down by ${attacker}!`);
            delete characters[characterName];
          }
          break;
        case "Reload":
          if (character.bullets < 6) {
            let bulletsReloaded = 6 - character.bullets;
            character.bullets = 6;
            console.log(`${characterName} reloaded ${bulletsReloaded} bullets!`);
          } else {
            console.log(`${characterName}'s pistol is fully loaded!`);
          }
          break;
        case "PatchUp":
          let amountRecovered = parseInt(rest[0]);
          character.hp = Math.min(100, character.hp + amountRecovered);
          if (character.hp < 100) {
            console.log(
              `${characterName} patched up and recovered ${amountRecovered} HP!`
            );
          } else {
            console.log(`${characterName} is in full health!`);
          }
          break;
      }
    }
  
    for (let characterName in characters) {
      let character = characters[characterName];
      console.log(
        `${characterName}\n  HP: ${character.hp}\n  Bullets: ${character.bullets}`
      );
    }
  }