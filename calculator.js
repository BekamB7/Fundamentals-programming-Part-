
const resultfield = document.getElementById("result");
const tempfield = document.getElementById("temp");
const buttons = document.querySelectorAll(".link");

let num1, num2;
let operator;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        
        if (value === "C") {
            resultfield.value = "";
            tempfield.value = "";
        } else if (value >= "0" && value <= "9") { 
            resultfield.value += value;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            operator = value;
            num1 = parseFloat(resultfield.value);
            tempfield.value = resultfield.value + " " + operator + " ";
            resultfield.value = ""; 
        } else if (value === "=") {
            num2 = parseFloat(resultfield.value);
            if (operator === "+") {
                resultfield.value = num1 + num2;
            } else if (operator === "-") {
                resultfield.value = num1 - num2;
            } else if (operator === "*") {
                resultfield.value = num1 * num2;
            } else if (operator === "/") {
                resultfield.value = num1 / num2;
            }
            tempfield.value = ""; 
        }
    });
});