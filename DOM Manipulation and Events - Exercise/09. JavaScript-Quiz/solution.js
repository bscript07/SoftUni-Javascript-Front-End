function solve() {
  const html = {
    sections: document.getElementsByTagName(`section`),
    outputSections: document.getElementById(`results`),
    outputElement: document.querySelector(`#results > li > h1`),
  };

  const rightAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];

  const res = [];
  let index = 0;

  document.body.addEventListener("click", (event) => {
    if (event.target.className === "answer-text") {
      const arr = Array.from(html.sections);
      arr[index].style.display = "none";

      if (!rightAnswers.includes(event.target.textContent)) {
        res.push(event.target.innerHTML);
      }

      if (arr[index + 1] !== undefined) {
        arr[index + 1].style.display = "block";
        index += 1;
      } else {
        html.outputSections.style.display = "block";
        html.outputElement.innerHTML =
          res.length > 0
            ? `You have ${3 - res.length} right answers`
            : "You are recognized as top JavaScript fan!";
      }
    }
  });
}
