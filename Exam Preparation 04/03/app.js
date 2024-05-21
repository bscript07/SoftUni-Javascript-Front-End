const baseURL = "http://localhost:3030/jsonstore/tasks/";
const loadBtn = document.getElementById("load-vacations");
const vacationList = document.getElementById("list");
const nameInput = document.getElementById("name");
const numDaysInput = document.getElementById("num-days");
const fromDateInput = document.getElementById("from-date");
const addBtn = document.getElementById("add-vacation");
const editBtn = document.getElementById("edit-vacation");
const formElement = document.querySelector("#form form");

loadBtn.addEventListener("click", loadVacations);

addBtn.addEventListener("click", (e) => {
    e.preventDefault;

    // GET Data from inputs
    const newVacation = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    }

    // Sent POST and GET Request to server
    fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newVacation)
    })
    .then(loadVacations)
    clearInputFields();

});

editBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const vacationId = formElement.dataset.vacation;
    // get data
    const vacationData = {
        _id: vacationId,
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    };

    // PUT request
    fetch(`${baseURL}/${vacationId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vacationData)
    })

    // get vacations
    .then(loadVacations)
    .then(() => {

        // activate add button
        addBtn.removeAttribute("disabled");

        // deactivate Edit button
        editBtn.setAttribute("disabled", "disabled");

        // clear fields
        clearInputFields();

        // delete dataset
        delete formElement.dataset.vacation;
    })

});

function clearInputFields() {
    nameInput.value = "";
    numDaysInput.value = "";
    fromDateInput.value = "";
}

function loadVacations() {
  return fetch(baseURL)
    .then((data) => data.json())
    .then((res) => {
      renderVacations(Object.values(res));
    })
    .catch((err) => console.log(err));
}

function renderVacations(vacations) {
    vacationList.innerHTML = "";

    vacations.map(renderVacation)
    .forEach(vacationElement => vacationList.appendChild(vacationElement));
}

function renderVacation(vacation) {

  const container = document.createElement("div");
  container.className = "container";

  const h2Name = document.createElement("h2");
  h2Name.textContent = vacation.name;

  const h3Date = document.createElement("h3");
  h3Date.textContent = vacation.date;

  const h3Days = document.createElement("h3");
  h3Days.textContent = vacation.days;

  const changeBtn = document.createElement("button");
  changeBtn.className = "change-btn";
  changeBtn.textContent = "Change";
  changeBtn.addEventListener("click", () => {
      // add to form fields
      nameInput.value = vacation.name;
      numDaysInput.value = vacation.days;
      fromDateInput.value = vacation.date;
      // remove container
      container.remove();
    // activate edit vacation button
    editBtn.removeAttribute("disabled");
    // deactivate add vacation button
    addBtn.setAttribute("disabled", "disabled");

    // save vacation id
    formElement.dataset.vacation = vacation._id;
  });

  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", () => {
    // send delete request
    fetch(`${baseURL}/${vacation._id}`, {
        method: "DELETE"
    })

    // load vacation
    .then(loadVacations)
  });

  container.appendChild(h2Name);
  container.appendChild(h3Date);
  container.appendChild(h3Days);
  container.appendChild(changeBtn);
  container.appendChild(doneBtn);

  return container;
}
