function subtract() {
    
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const resultField = document.getElementById("result");
     
    let toNumber1 = Number(firstNumber);
    let toNumber2 = Number(secondNumber);

    let result = toNumber1 - toNumber2;
    resultField.textContent = result;
}