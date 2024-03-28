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
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const number5 = document.querySelector("#number5");
const number6 = document.querySelector("#number6");
const number7 = document.querySelector("#number7");
const number8 = document.querySelector("#number8");
const number9 = document.querySelector("#number9");
const number0 = document.querySelector("#number0");

// throw errors if !

if (
  !clearButton ||
  !deleteButton ||
  !divide ||
  !multiply ||
  !subtract ||
  !addition ||
  !decimal ||
  !number1 ||
  !number2 ||
  !number3 ||
  !number4 ||
  !number5 ||
  !number6 ||
  !number7 ||
  !number8 ||
  !number9 ||
  number0
) {
  throw new Error("Issue with selectors");
}

// event handlers

// when button is clicked what happens?

// number button -> displayed on 'screen'
// when display changes, could use .innertext?

// operation button -> display on screen and maybe call calculate function?

// equals -> calls calculate function

// calculate function
// const result = empty
// const the first input number = whatever input is set as
// const the second input number = whatever the input is set as
// check that numbers aren't empty or null
// then if statements to check which operator was use, and depending on that,
// do return result = (the first input number) [operation] (the second input number)
// else return error

// event listeners

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
