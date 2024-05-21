function solve() {
    const playerInputField = document.getElementById("player");
    const playerScoreInputField = document.getElementById("score");
    const playerRoundInputField = document.getElementById("round");
  
    const addBtn = document.getElementById("add-btn");
    const clearBtn = document.querySelector(".clear");
  
    const sureListInputField = document.getElementById("sure-list");
    const scoreBoardListInputField = document.getElementById("scoreboard-list");
  
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (
        !playerInputField.value ||
        !playerScoreInputField.value ||
        !playerRoundInputField.value
      ) {
        return;
      }
  
      const liElement = document.createElement("li");
      liElement.className = "dart-item";
  
      const articleElement = document.createElement("article");
  
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = playerInputField.value;
      const name = playerInputField.value;
  
      const scoreParagraph = document.createElement("p");
      scoreParagraph.textContent = `Score: ${playerScoreInputField.value}`;
      const score = playerScoreInputField.value;
  
      const roundParagraph = document.createElement("p");
      roundParagraph.textContent = `Round: ${playerRoundInputField.value}`;
      const round = playerRoundInputField.value;
  
      articleElement.appendChild(nameParagraph);
      articleElement.appendChild(scoreParagraph);
      articleElement.appendChild(roundParagraph);
  
      const editBtn = document.createElement("button");
      editBtn.className = "btn edit";
      editBtn.textContent = "edit";
  
      editBtn.addEventListener("click", (e) => {
        playerInputField.value = name;
        playerScoreInputField.value = score;
        playerRoundInputField.value = round;
  
        sureListInputField.removeChild(liElement);
  
        addBtn.removeAttribute("disabled"); // enable add button
      });
  
      const okBtn = document.createElement("button");
      okBtn.className = "btn ok";
      okBtn.textContent = "ok";
  
      okBtn.addEventListener("click", (e) => {
        sureListInputField.removeChild(liElement);
  
        liElement.removeChild(editBtn);
        liElement.removeChild(okBtn);
  
        scoreBoardListInputField.appendChild(liElement);
        addBtn.removeAttribute("disabled"); // enable add button
  
        clearBtn.addEventListener("click", () => {
          location.reload();
        });
      });
  
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtn);
      liElement.appendChild(okBtn);
  
      sureListInputField.appendChild(liElement); // render data
  
      clearInputFields(); // clear input fields
      addBtn.setAttribute("disabled", true); // disabled add button
    });
  
    function clearInputFields() {
      playerInputField.value = "";
      playerScoreInputField.value = "";
      playerRoundInputField.value = "";
    }
  }