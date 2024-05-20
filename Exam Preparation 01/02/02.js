function solve() {
    const placeInputField = document.getElementById("place");
    const actionInputField = document.getElementById("action");
    const personInputField = document.getElementById("person");
  
    const taskListInputField = document.getElementById("task-list");
    const doneListInputField = document.getElementById("done-list");
  
    const addBtn = document.getElementById("add-btn");
  
    let place, action, person; // Declare variables in the outer scope
  
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (
        !placeInputField.value ||
        !actionInputField.value ||
        !personInputField.value
      ) {
        return;
      }
  
      place = placeInputField.value; // Assign values to the variables
      action = actionInputField.value;
      person = personInputField.value;
  
      const liElement = document.createElement("li");
      liElement.className = "clean-task";
  
      const articleElement = document.createElement("article");
  
      const pPlaceElement = document.createElement("p");
      pPlaceElement.textContent = `Place:${placeInputField.value}`;
  
      const pActionElement = document.createElement("p");
      pActionElement.textContent = `Action:${actionInputField.value}`;
  
      const pPersonElement = document.createElement("p");
      pPersonElement.textContent = `Person:${personInputField.value}`;
  
      const divButtons = document.createElement("div");
      divButtons.className = "buttons";
  
      const editBtn = document.createElement("button");
      editBtn.className = "edit";
      editBtn.textContent = "Edit";
  
      const doneBtn = document.createElement("button");
      doneBtn.className = "done";
      doneBtn.textContent = "Done";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      deleteBtn.textContent = "Delete";
  
      articleElement.appendChild(pPlaceElement);
      articleElement.appendChild(pActionElement);
      articleElement.appendChild(pPersonElement);
  
      divButtons.appendChild(editBtn);
      divButtons.appendChild(doneBtn);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(divButtons);
  
      taskListInputField.appendChild(liElement);
  
      clearInputFields();
  
      editBtn.addEventListener("click", (e) => {
        placeInputField.value = place;
        actionInputField.value = action;
        personInputField.value = person;
  
        taskListInputField.removeChild(liElement);
      });
  
      doneBtn.addEventListener("click", (e) => {
        taskListInputField.removeChild(liElement);
        doneListInputField.appendChild(liElement);
  
        liElement.removeChild(divButtons);
        liElement.appendChild(deleteBtn);
  
        deleteBtn.addEventListener("click", () => {
          doneListInputField.removeChild(liElement);
        });
      });
    });
  
    function clearInputFields() {
      placeInputField.value = "";
      actionInputField.value = "";
      personInputField.value = "";
    }
  }