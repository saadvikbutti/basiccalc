
const previousExpression = document.querySelector(".previous-expression");
const currentNumber = document.querySelector(".current-number");

currentNumber.textContent = "";
previousExpression.textContent = "";//operator function logic
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
    })

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
    })


const opFunction = document.querySelectorAll(".operator")
    opFunction.forEach(function(button){
        button.addEventListener("click", function(){
            operator = button.textContent;
            previousExpression.textContent = firstNumber + " " + operator;
            currentNumber.textContent = "";
        })
    })

const fnFunction = document.querySelectorAll(".number")
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
        })
    })

//turning the strigs into numbers actually for the logic of operator to work for arithmetic operations
const equalsButton = document.querySelector(".equals")
    equalsButton.addEventListener("click", function(){
        let a = Number(firstNumber);
        let b = Number(secondNumber);
        let result = 0;
        let mulDivResult = 1;

        console.log("BEFORE EQUALS");
        console.log("First:", firstNumber);
        console.log("Second:", secondNumber);
        console.log("Operator:", operator);

        switch(operator){
            case "+":
                result += a + b;
                break;

            case "-":
                result += a - b;
                break;

            case "*":
                result += a * b;
                break;

            case "/":
                result += a / b;
                break;

            case "%":
                result += a % b;
                break;
        }

        currentNumber.textContent = result;
        previousExpression.textContent = firstNumber + " " + operator + " " + secondNumber + " =";

        firstNumber = "";
        secondNumber = "";
        operator = "";
    })