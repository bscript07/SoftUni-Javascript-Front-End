function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick() {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
      let bestResWorker = document.querySelector("#workers p");

      for (let data of input) {
         let [name, workerList] = data.split(" - ");
         if (!result.find(e => e.name === name)) {
            result.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
         }
         let currentRestaurant = result.find(e => e.name === name);
         workerList = workerList && workerList.split(", ");
         for (let currentWorker of workerList) {
            updateRestaurant(currentRestaurant, currentWorker)
         }
      }

      result.sort((a, b) => b.averageSalary - a.averageSalary);
      let bestRestaurant = result[0];

      bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)} `;

      let sortListOfWorker = bestRestaurant.workerList.sort((a, b) => b.salary - a.salary);
      let str = "";

      for (let worker of sortListOfWorker) {
         str += `Name: ${worker.name} With Salary: ${worker.salary} `
      }

      bestResWorker.textContent += str;
   }

   function updateRestaurant(object, worker) {
      let [name, salary] = worker.split(" ");
      let parsedSalary = Number(salary);
      object.sumSalary += parsedSalary;

      if (object.bestSalary < parsedSalary) {
         object.bestSalary = parsedSalary;
      }
      object.workerList.push({
         name,
         salary: parsedSalary
      });
      object.averageSalary = object.sumSalary / object.workerList.length
   }
}