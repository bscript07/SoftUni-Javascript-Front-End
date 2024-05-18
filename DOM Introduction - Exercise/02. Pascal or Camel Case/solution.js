function solve() {
  
  let textValue = document.getElementById("text").value;
  let conventionValue = document.getElementById("naming-convention").value;
  let view = "";
  let arr = textValue.split(" ");

  switch (conventionValue) {
    case "Camel Case":
      arr.forEach((e, i) => {
        if (i === 0) {
          return view += e.toLowerCase();
        }
        return view += e[0].toUpperCase() + e.substring(1).toLowerCase();
      });
      break;

    case "Pascal Case":
      arr.forEach((e, i) => {
        e = e.toLowerCase();
        view += e[0].toUpperCase() + e.substring(1).toLowerCase();
      });
      break;

    default: view = "Error!";
  }

  document.getElementById("result").textContent = view;
}