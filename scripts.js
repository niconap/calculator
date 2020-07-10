
let input = "";
let inputArray = [];

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

function operate(operator, a, b) {
    if (operator == "add") {
        return add(a, b);
    }
    if (operator == "subtract") {
        return subtract(a, b);
    }
    if (operator == "multiply") {
        return multiply(a, b);
    }
    if (operator == "divide") {
        return divide(a, b);
    }
}

function addNumber(number) {
    input += number;
}

/* Eventlisteners */

const num0 = document.getElementById("zero");
num0.addEventListener("click", function(){
    input += "0";
});

const num1 = document.getElementById("one");
num1.addEventListener("click", function(){
    input += "1";
});

const num2 = document.getElementById("two");
num2.addEventListener("click", function(){
    input += "2";
});

const num3 = document.getElementById("three");
num3.addEventListener("click", function(){
    input += "3";
});

const num4 = document.getElementById("four");
num4.addEventListener("click", function(){
    input += "4";
});

const num5 = document.getElementById("five");
num5.addEventListener("click", function(){
    input += "5";
});

const num6 = document.getElementById("six");
num6.addEventListener("click", function(){
    input += "6";
});

const num7 = document.getElementById("seven");
num7.addEventListener("click", function(){
    input += "7";
});

const num8 = document.getElementById("eight");
num8.addEventListener("click", function(){
    input += "8";
});

const num9 = document.getElementById("nine");
num9.addEventListener("click", function(){
    input += "9";
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", function(){
    inputArray.push(input);
    input = "";
    inputArray.push("add");
});

const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", function(){
    inputArray.push(input);
    input = "";
    inputArray.push("subtract");
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function(){
    inputArray.push(input);
    input = "";
    inputArray.push("multiply");
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function(){
    inputArray.push(input);
    input = "";
    inputArray.push("divide");
});