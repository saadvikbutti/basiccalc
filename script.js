
const previousExpression = document.querySelector(".previous-expression");
const currentNumber = document.querySelector(".current-number");

currentNumber.textContent = "";
previousExpression.textContent = "";

//operator function logic
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

//clear button logic
const clearButton = document.querySelector(".clear_all");

clearButton.addEventListener("click", function(){
    currentNumber.textContent = "";
    previousExpression.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
});

//clear last digit button logic
const clearLastDigitButton = document.querySelector(".clear");

clearLastDigitButton.addEventListener("click", function(){

    if(operator == ""){
        firstNumber = firstNumber.slice(0, -1);
        currentNumber.textContent = firstNumber;
    }

    else{
        secondNumber = secondNumber.slice(0, -1);
        currentNumber.textContent = secondNumber;
    }

    console.log("First:", firstNumber);
    console.log("Second:", secondNumber);
    console.log("Operator:", operator);
    console.log("Current:", currentNumber.textContent);
});

//reusable function
function calculate(){

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    switch(operator){
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        case "%":
            result = a % b;
            break;
    }

}

//operator function logic
const opFunction = document.querySelectorAll(".operator");

opFunction.forEach(function(button){
    button.addEventListener("click", function(){

        if (firstNumber == ""){
            return
        }
        // If a second number exists, calculate using the PREVIOUS operator first
        if (secondNumber !== "") {

            calculate();

            // Store the result as the first number for the next calculation
            firstNumber = String(result);
            secondNumber = "";

        }

        // Assign the newly clicked operator AFTER calculating
        operator = button.textContent;

        previousExpression.textContent = firstNumber + " " + operator;
        currentNumber.textContent = "";

    });
});

//number button logic
const fnFunction = document.querySelectorAll(".number");

fnFunction.forEach(function(button){
    button.addEventListener("click", function(){

        if(operator == ""){
            firstNumber += button.textContent;
            currentNumber.textContent += button.textContent;
        }

        else{
            secondNumber += button.textContent;
            currentNumber.textContent += button.textContent;
        }

    });
});

//turning the strings into numbers actually for the logic of operator to work for arithmetic operations
const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", function(){

    // Only calculate when both operands and an operator exist
    if(firstNumber !== "" && secondNumber !== "" && operator !== ""){

        calculate();

        currentNumber.textContent = result;
        previousExpression.textContent = firstNumber + " " + operator + " " + secondNumber + " =";

        // Preserve the result so another operator can continue the calculation
        firstNumber = String(result);
        secondNumber = "";
        operator = "";

    }

});

//decimal point logic
const decimalPoint = document.querySelector(".point");

decimalPoint.addEventListener("click", function(){

    if(operator == ""){

        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            currentNumber.textContent += ".";
        }
    }

    else{

        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            currentNumber.textContent += ".";
        }
    }

});

