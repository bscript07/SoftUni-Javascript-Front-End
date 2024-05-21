function solve() {
    const previewListElement = document.getElementById("preview-list");
    const candidatesList = document.getElementById("candidates-list");
    const studentInputElement = document.getElementById("student");
    const universityInputElement = document.getElementById("university");
    const scoreInputElement = document.getElementById("score");
    const nextBtnInputElement = document.getElementById("next-btn");
  
    nextBtnInputElement.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (!studentInputElement.value || !universityInputElement.value || !scoreInputElement.value) {
        return;
      }
  
      const liElement = document.createElement("li");
      liElement.className = "application";
  
      const articleElement = document.createElement("article");
  
      const articleHeaderElement = document.createElement("h4");
      articleHeaderElement.textContent = studentInputElement.value;
  
      const universityParagraph = document.createElement("p");
      universityParagraph.textContent = `University: ${universityInputElement.value}`;
  
      const scoreParagraph = document.createElement("p");
      scoreParagraph.textContent = `Score: ${scoreInputElement.value}`;
  
      const buttonEdit = document.createElement("button");
      buttonEdit.className = "action-btn edit";
      buttonEdit.textContent = "edit";
  
      const buttonApply = document.createElement("button");
      buttonApply.className = "action-btn apply";
      buttonApply.textContent = "apply";
  
      articleElement.appendChild(articleHeaderElement);
      articleElement.appendChild(universityParagraph);
      articleElement.appendChild(scoreParagraph);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(buttonEdit);
      liElement.appendChild(buttonApply);
  
      // rendering data
      previewListElement.appendChild(liElement);
  
      // clear input fields
      clearForm();
  
      // disable "Next" button
      nextBtnInputElement.setAttribute("disabled", true);
  
      buttonEdit.addEventListener("click", (e) => {
        const studentName = previewListElement.querySelector("h4").textContent;
        const paragraphsElements =
          previewListElement.querySelectorAll("article p");
        const [universityPElement, scorePElement] =
          Array.from(paragraphsElements);
  
        // Move values to form
        studentInputElement.value = studentName;
        universityInputElement.value =
          universityPElement.textContent.split(": ")[1];
        scoreInputElement.value = scorePElement.textContent.split(": ")[1];
  
        // Remove from preview list
        previewListElement.innerHTML = "";
  
        // Disable button
        nextBtnInputElement.removeAttribute("disabled", true);
      });
  
      buttonApply.addEventListener("click", (e) => {
        // Remove Edit and Apply buttons
        buttonEdit.remove();
        buttonApply.remove();
  
        // Append to candidates-list
        candidatesList.appendChild(liElement);
  
        // Clear preview list
        previewListElement.innerHTML = "";
  
        // Enable Next button
        nextBtnInputElement.removeAttribute("disabled");
      });
    });
  
    function clearForm() {
      studentInputElement.value = "";
      universityInputElement.value = "";
      scoreInputElement.value = "";
    }
  }