
/*
    Made by Nico Nap
    GitHub: https://github.com/niconap
*/

let input = "";
let inputArray = [];
let answer = "";
let updated = false;

/* Functions for doing the basic math operations */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(array) {
    if (array != [] || array.length != 1) {
        let number1 = parseFloat(array[0]);
        let number2 = parseFloat(array[2]);
        let operator = array[1];
        if (operator == "add") {
            array[0] = add(number1, number2).toString();
            array.splice(1, 2);
        }
        if (operator == "subtract") {
            array[0] = subtract(number1, number2).toString();
            array.splice(1, 2);
        }
        if (operator == "multiply") {
            array[0] = multiply(number1, number2).toString();
            array.splice(1, 2);
        }
        if (operator == "divide") {
            array[0] = divide(number1, number2).toString();
            array.splice(1, 2);
        }
        if (array.length != 1) {
            operate(array);
        }
    }
    return array[0];
}

function updateDisplay(answer) {
    document.getElementById("value").value = answer;
    updated = true;
}

function checkIfUpdated() {
    if (updated == true) {
        input = "";
        inputArray = [];
        answer = "";
        document.getElementById("value").value = "";
        updated = false;
    }
}

function addNumber(number) {
    input += number;
}

/* Eventlisteners for the buttons */

const num0 = document.getElementById("zero");
num0.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "0";
    input += "0";
});

const num1 = document.getElementById("one");
num1.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "1";
    input += "1";
});

const num2 = document.getElementById("two");
num2.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "2";
    input += "2";
});

const num3 = document.getElementById("three");
num3.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "3";
    input += "3";
});

const num4 = document.getElementById("four");
num4.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "4";
    input += "4";
});

const num5 = document.getElementById("five");
num5.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "5";
    input += "5";
});

const num6 = document.getElementById("six");
num6.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "6";
    input += "6";
});

const num7 = document.getElementById("seven");
num7.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "7";
    input += "7";
});

const num8 = document.getElementById("eight");
num8.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "8";
    input += "8";
});

const num9 = document.getElementById("nine");
num9.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += "9";
    input += "9";
});

const comma = document.getElementById("comma");
comma.addEventListener("click", function(){
    checkIfUpdated();
    document.getElementById("value").value += ".";
    input += ".";
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", function(){
    if (input != "") {
        document.getElementById("value").value = "";
        inputArray.push(input);
        input = "";
        inputArray.push("add");
    }
});

const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", function(){
    if (input != "") {
        document.getElementById("value").value = "";
        inputArray.push(input);
        input = "";
        inputArray.push("subtract");
    }
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function(){
    if (input != "") {
        document.getElementById("value").value = "";
        inputArray.push(input);
        input = "";
        inputArray.push("multiply");
    }
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function(){
    if (input != "") {
        document.getElementById("value").value = "";
        inputArray.push(input);
        input = "";
        inputArray.push("divide");
    }
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function(){
    if (input != "") {
        inputArray.push(input);
        input = "";
        answer = operate(inputArray);
        updateDisplay(answer);
    }
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    input = "";
    inputArray = [];
    answer = "";
    document.getElementById("value").value = "";
})