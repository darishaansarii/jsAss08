var input = document.getElementById("calculator-screen");

function numWrite(num) {
    if (num === "." && input.value.includes(".")) return;
    if (input.value === "0") input.value = "";
    input.value += num;
}

function allClear() {
    input.value = "0";
    num1 = "";
    num2 = "";
    currentOperator = "";
}

function square() {
    var num = parseFloat(input.value);
    input.value = num * num;
}

function squareRoot() {
    var num = parseFloat(input.value);
    input.value = Math.sqrt(num);
}

function cube() {
    var num = parseFloat(input.value);
    input.value = num * num * num;
}

var num1 = "";
var num2 = "";
var currentOperator = "";

function setOperator(op) {
    if (input.value !== "") {
        num1 = input.value;
        input.value = "";
        currentOperator = op;
    }
}

function add() {
    setOperator("+");
}

function subtract() {
    setOperator("-");
}

function multiply() {
    setOperator("*");
}

function divide() {
    setOperator("/");
}

function equal() {
    num2 = input.value;
    var result = 0;
    if (currentOperator === "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (currentOperator === "-") {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (currentOperator === "*") {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (currentOperator === "/") {
        if (parseFloat(num2) === 0) {
            input.value = "Error";
            return;
        } else {
            result = parseFloat(num1) / parseFloat(num2);
        }
    }
    input.value = result;
    num1 = "";
    num2 = "";
    currentOperator = "";
}

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
