function solve() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.innerHTML = "";
  const arr = input.split(".").filter((x) => x.length > 0);

  for (let i = 0; i < arr.length; i += 3) {
    const res = [];
    for (let j = 0; j < 3; j++) {
      if (arr[i + j]) {
        res.push(arr[i + j]);
      }
    }
    const result = res.join(". ") + ".";
    output.innerHTML += `<p>${result}</p>`;
  }
}
