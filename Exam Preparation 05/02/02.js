function solve() {
    const titleInputField = document.getElementById("task-title");
    const categoryInputField = document.getElementById("task-category");
    const contentInputField = document.getElementById("task-content");
  
    const reviewListInputField = document.getElementById("review-list");
    const publishedListInputField = document.getElementById("published-list");
  
    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (
        !titleInputField.value ||
        !categoryInputField.value ||
        !contentInputField.value
      ) {
        return;
      }
  
      const liElement = document.createElement("li");
      liElement.className = "rpost";
  
      const articleElement = document.createElement("article");
  
      const titleElement = document.createElement("h4");
      titleElement.textContent = `${titleInputField.value}`;
      const title = titleInputField.value;
  
      const categoryElement = document.createElement("p");
      categoryElement.textContent = `Category: ${categoryInputField.value}`;
      const category = categoryInputField.value;
  
      const contentElement = document.createElement("p");
      contentElement.textContent = `Content: ${contentInputField.value}`;
      const content = contentInputField.value;
  
      const editBtn = document.createElement("button");
      editBtn.className = "action-btn edit";
      editBtn.textContent = "Edit";
  
      const postBtn = document.createElement("button");
      postBtn.className = "action-btn post";
      postBtn.textContent = "Post";
  
      articleElement.appendChild(titleElement);
      articleElement.appendChild(categoryElement);
      articleElement.appendChild(contentElement);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtn);
      liElement.appendChild(postBtn);
  
      reviewListInputField.appendChild(liElement);
  
      clearInputFields();
  
      editBtn.addEventListener("click", (e) => {
        titleInputField.value = title;
        categoryInputField.value = category;
        contentInputField.value = content;
  
        reviewListInputField.removeChild(liElement);
      });
  
      postBtn.addEventListener("click", (e) => {
        reviewListInputField.removeChild(liElement);
  
        liElement.removeChild(editBtn);
        liElement.removeChild(postBtn);
  
        publishedListInputField.appendChild(liElement);
      });
    });
  
    function clearInputFields() {
      titleInputField.value = "";
      categoryInputField.value = "";
      contentInputField.value = "";
    }
  }