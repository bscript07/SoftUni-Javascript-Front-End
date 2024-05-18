function attachEventsListeners() {
  const fields = {
    input: document.getElementById(`inputUnits`),
    output: document.getElementById(`outputUnits`),
    inputDis: document.getElementById(`inputDistance`),
    outputDis: document.getElementById(`outputDistance`),
  };

  const calc = (p1, p2, sign) => {
    const signs = { "/": (a, b) => a / b, "*": (a, b) => a * b };

    return signs[sign](p1, p2);
  };

  const values = {
    km: 1,
    m: 1000,
    cm: 100000,
    mm: 1000000,
    mi: 0.621371,
    yrd: 1093.61,
    ft: 3280.84,
    in: 39370.1,
  };

  document.body.addEventListener("click", (e) => {
    if (e.target.id === "convert") {
      const [from, to, inputValue] = [
        fields.input.value,
        fields.output.value,
        Number(fields.inputDis.value),
      ];

      fields.outputDis.value = calc(
        calc(inputValue, values[from], "/"),
        values[to],
        "*"
      );
    }
  });
}
