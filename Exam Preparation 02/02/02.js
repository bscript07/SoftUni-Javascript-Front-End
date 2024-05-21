function solve() {
    const typeInputField = document.getElementById("expense");
    const amountInputField = document.getElementById("amount");
    const dateInputField = document.getElementById("date");
  
    const previewInputField = document.getElementById("preview-list");
    const expensesInputField = document.getElementById("expenses-list");
    
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (
        !typeInputField.value ||
        !amountInputField.value ||
        !dateInputField.value
      ) {
        return;
      }
  
      const liElement = document.createElement("li");
      liElement.className = "expense-item";
  
      const articleElement = document.createElement("article");
  
      const pTypeElement = document.createElement("p");
      pTypeElement.textContent = `Type: ${typeInputField.value}`;
      const type = typeInputField.value;
  
      const pAmountElement = document.createElement("p");
      pAmountElement.textContent = `Amount: ${amountInputField.value}$`;
      const amount = amountInputField.value;
  
      const pDateElement = document.createElement("p");
      pDateElement.textContent = `Date: ${dateInputField.value}`;
      const date = dateInputField.value;
  
      const divButtons = document.createElement("div");
      divButtons.className = "buttons";
  
      const editBtn = document.createElement("button");
      editBtn.className = "btn edit";
      editBtn.textContent = "edit";
  
      const okBtn = document.createElement("button");
      okBtn.className = "btn ok";
      okBtn.textContent = "ok";
  
      articleElement.appendChild(pTypeElement);
      articleElement.appendChild(pAmountElement);
      articleElement.appendChild(pDateElement);
  
      divButtons.appendChild(editBtn);
      divButtons.appendChild(okBtn);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(divButtons);
  
      previewInputField.appendChild(liElement);
  
      clearInputFields();
      addBtn.setAttribute("disabled", true);
  
      editBtn.addEventListener("click", (e) => {
        typeInputField.value = type;
        amountInputField.value = amount;
        dateInputField.value = date;
  
        previewInputField.removeChild(liElement);
        addBtn.removeAttribute("disabled");
      });
  
      okBtn.addEventListener("click", (e) => {
        previewInputField.removeChild(liElement);
  
        divButtons.removeChild(editBtn);
        divButtons.removeChild(okBtn);
  
        expensesInputField.appendChild(liElement);
        addBtn.removeAttribute("disabled");

        const deleteBtn = document.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
          location.reload();
        });
      });
    });
  
    function clearInputFields() {
      typeInputField.value = "";
      amountInputField.value = "";
      dateInputField.value = "";
    }
  }