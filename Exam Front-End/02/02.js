function solve() {
  const nameInputField = document.getElementById("name");
  const phoneInputField = document.getElementById("phone");
  const categoryInputField = document.getElementById("category");

  const checkListInputField = document.getElementById("check-list");
  const contactListInputField = document.getElementById("contact-list");

  const addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !nameInputField.value ||
      !phoneInputField.value ||
      !categoryInputField.value
    ) {
      return;
    }

    const liElement = document.createElement("li");

    const articleElement = document.createElement("article");

    const pName = document.createElement("p");
    pName.textContent = `name:${nameInputField.value}`;
    const name = nameInputField.value;

    const pPhone = document.createElement("p");
    pPhone.textContent = `phone:${phoneInputField.value}`;
    const phone = phoneInputField.value;

    const pCategory = document.createElement("p");
    pCategory.textContent = `category:${categoryInputField.value}`;
    const category = categoryInputField.value;

    const divButtons = document.createElement("div");
    divButtons.className = "buttons";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";

    const saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "del-btn";

    articleElement.appendChild(pName);
    articleElement.appendChild(pPhone);
    articleElement.appendChild(pCategory);

    divButtons.appendChild(editBtn);
    divButtons.appendChild(saveBtn);

    liElement.appendChild(articleElement);
    liElement.appendChild(divButtons);

    checkListInputField.appendChild(liElement);
    clearInputFields();

    editBtn.addEventListener("click", (e) => {
      nameInputField.value = name;
      phoneInputField.value = phone;
      categoryInputField.value = category;

      checkListInputField.removeChild(liElement);
    });

    saveBtn.addEventListener("click", (e) => {
      checkListInputField.removeChild(liElement);
      contactListInputField.appendChild(liElement);

      liElement.removeChild(divButtons);

      liElement.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => {
        contactListInputField.removeChild(liElement);
      });
    });
  });

  function clearInputFields() {
    nameInputField.value = "";
    phoneInputField.value = "";
    categoryInputField.value = "";
  }
}
