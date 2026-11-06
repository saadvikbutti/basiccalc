const previousExpression = document.querySelector(".previous-expression");
const currentNumber = document.querySelector(".current-number");

currentNumber.textContent = "";
previousExpression.textContent = "";

//select all buttons
const numberButtons = document.querySelectorAll(".number");
//printing the text on the button logic on the display
numberButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        currentNumber.textContent += button.textContent 
    })
});

//clear button logic
const clearButton = document.querySelector(".clear");

    clearButton.addEventListener("click", function(){
        currentNumber.textContent = ""
    })
