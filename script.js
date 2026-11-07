const previousExpression = document.querySelector(".previous-expression");
const currentNumber = document.querySelector(".current-number");

currentNumber.textContent = "";
previousExpression.textContent = "";

//clear button logic
const clearButton = document.querySelector(".clear");

    clearButton.addEventListener("click", function(){
        currentNumber.textContent = ""
        previousExpression.textContent = ""
    })

//clear last digit button logic
const clearLastDigitButton = document.querySelector(".clear_last_digit");

    clearLastDigitButton.addEventListener("click", function(){
        currentNumber.textContent = currentNumber.textContent.slice(0,-1)
    })



//operator function logic
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

const opFunction = document.querySelectorAll(".operator")
    opFunction.forEach(function(button){
        button.addEventListener("click", function(){
            operator = button.textContent
            previousExpression.textContent = firstNumber + " " + operator;
            currentNumber.textContent = ""
        })
    })

const fnFunction = document.querySelectorAll(".number")
    fnFunction.forEach(function(button){
        button.addEventListener("click", function(){
            if(operator == ""){
                firstNumber += button.textContent
                currentNumber.textContent += button.textContent
            }

            else{
                secondNumber += button.textContent
                currentNumber.textContent += button.textContent
            }
        })
    })

//turning the strigs into numbers actually for the logic of operator to work for arithmetic operations
const equalsButton = document.querySelector(".equals")
    equalsButton.addEventListener("click", function(){
        let a = Number(firstNumber)
        let b = Number(secondNumber)
        let result = 0
        let mulDivResult = 1

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
