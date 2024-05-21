function solve(input) {
    let horses = input.shift().split("|");
  
    let command = input.shift();
    while (command !== "Finish") {
      let [action, name1, name2] = command.split(" ");
  
      let indexName1, indexName2;
  
      switch (action) {
        case "Retake":
          indexName1 = horses.indexOf(name1);
          indexName2 = horses.indexOf(name2);
  
          if (indexName1 < indexName2) {
            console.log(`${name1} retakes ${name2}.`);
  
            horses[indexName1] = name2;
            horses[indexName2] = name1;
          }
          break;
        case "Trouble":
          indexName1 = horses.indexOf(name1);
          if (indexName1 > 0) {
            indexName2 = indexName1 - 1;
            let name2 = horses[indexName2];
            console.log(`Trouble for ${name1} - drops one position.`);
            horses[indexName2] = name1;
            horses[indexName1] = name2;
          }
          break;
        case "Rage":
          indexName1 = horses.indexOf(name1);
          if (indexName1 < horses.length - 2) {
            indexName2 = indexName1 + 2;
            let name2 = horses[indexName2];
            horses.splice(indexName1, 1);
            horses.splice(indexName2, 0, name1);
            console.log(`${name1} rages 2 positions ahead.`);
          } else if (indexName1 === horses.length - 2) {
            horses.splice(indexName1, 1);
            horses.push(name1);
            console.log(`${name1} rages 2 positions ahead.`);
          } else {
            console.log(`${name1} rages 2 positions ahead.`);
          }
          break;
        case "Miracle":
          let name = horses.shift();
          horses.push(name);
          console.log(`What a miracle - ${name} becomes first.`);
          break;
      }
  
      command = input.shift();
    }
  
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
  }