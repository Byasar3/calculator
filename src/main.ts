// will receive inputs from event listeners, event handlers and query selectors

// query selectors
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const addition = document.querySelector("#addition");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const numbers = document.querySelectorAll("#number");

// throw errors if !

if (
  !clearButton ||
  !deleteButton ||
  !divide ||
  !multiply ||
  !subtract ||
  !addition ||
  !decimal ||
  !numbers
) {
  throw new Error("Issue with selectors");
}

// event handlers

// when button is clicked what happens?

// number button -> displayed on 'screen'
// when display changes, could use .innertext?

// operation button -> display on screen and maybe call calculate function?

// equals -> calls calculate function

const handleClearButtonClick = (event : Event) => {

}

const handleDeleteButtonClick (event: Event) => {

}

const handleDivideButtonClick (event : Event) => {

}

const handleMultiplyButtonClick (event : Event) => {

}

const handleSubtractButtonClick (event : Event) => {

}

const handleAdditionButtonClick (event : Event) => {

}

const handleNumberButtonClick (event : Event) => {

}
// calculate function
// const result = empty
// const the first input number = whatever input is set as
// const the second input number = whatever the input is set as
// check that numbers aren't empty or null
// then if statements to check which operator was use, and depending on that,
// do return result = (the first input number) [operation] (the second input number)
// else return error

// EVENT LISTENERS

clearButton.addEventListener("click", handleClearButtonClick);
deleteButton.addEventListener("click", handleDeleteButtonClick);
divide.addEventListener("click", handleDivideButtonClick);
multiply.addEventListener("click", handleMultiplyButtonClick);
subtract.addEventListener("click", handleSubtractButtonClick);
addition.addEventListener("click", handleAdditionButtonClick);
numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", handleNumberButtonClick)
})


// needs to listen to when button is clicked

// needs to one of a few maths operations

// addition
// const value = number1 + number2;

// subtraction
// const value2 = number1 - number2;

// multiplication
// const value3 = number1 * number2;

// division
// const value4 = number1 / number2;

// needs to output value

// console.log(value);
// console.log(value2);
// console.log(value3);
// console.log(value4);
