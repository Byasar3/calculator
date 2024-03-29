// calculator object to store incoming information ?
type calculation = (firstInputNumber: number, secondInputNumber: number) => {};

// will receive inputs from event listeners, event handlers and query selectors

// query selectors
const display = document.querySelector<HTMLElement>("#display");
const clearButton = document.querySelector<HTMLElement>("#clear-button");
const deleteButton =
  document.querySelector<HTMLButtonElement>("#delete-button");
const divide = document.querySelector<HTMLButtonElement>("#divide");
const multiply = document.querySelector<HTMLButtonElement>("#multiply");
const subtract = document.querySelector<HTMLButtonElement>("#subtract");
const addition = document.querySelector<HTMLButtonElement>("#addition");
const equals = document.querySelector<HTMLButtonElement>("#equals");
const decimal = document.querySelector<HTMLButtonElement>("#decimal");
const numbers = document.querySelectorAll<HTMLButtonElement>("#number");

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

// --- EVENT HANDLERS ---

// when button is clicked what happens?

// number button -> displayed on 'screen'
// when display changes, could use .innertext?

// operation button -> display on screen and maybe call calculate function?

// equals -> calls calculate function

const handleClearButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  console.log();
  // needs to get something that represents whether it's been clicked or not
  // that determins whether the clear function (not currently written) goes ahead)
};

const handleDeleteButtonClick = (event: Event) => {
  // console.log(event);
};

const handleDivideButtonClick = (event: Event) => {
  // console.log(event);
};

const handleMultiplyButtonClick = (event: Event) => {
  // console.log(event);
};

const handleSubtractButtonClick = (event: Event) => {
  // console.log(event);
};

const handleAdditionButtonClick = (event: Event) => {
  // console.log(event);
};

const handleNumberButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  // console.log(target);
  const numberInputAsString = target.innerHTML;
  console.log("number clicked", numberInputAsString);
  // calculate(numberInput, 5);

  // getting the number input (in string form and displaying it on screen)
  showInputOnDisplay(numberInputAsString);

  // now converting to int to be able to use with calculator
  const firstNumberInputAsFloat = parseFloat(numberInputAsString);
  // need to input these numbers into the calculate function
  // hard code 2nd number for now
  const secondNumberInputAsFloat = 2;
  calculate(firstNumberInputAsFloat, secondNumberInputAsFloat);
};

// --- EVENT LISTENERS ---

clearButton.addEventListener("click", handleClearButtonClick);
deleteButton.addEventListener("click", handleDeleteButtonClick);
divide.addEventListener("click", handleDivideButtonClick);
multiply.addEventListener("click", handleMultiplyButtonClick);
subtract.addEventListener("click", handleSubtractButtonClick);
addition.addEventListener("click", handleAdditionButtonClick);
numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", handleNumberButtonClick);
});

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

// --- FUNCTIONS ---

// calculate function
// const result = empty
// const the first input number = whatever input is set as
// const the second input number = whatever the input is set as
// check that numbers aren't empty or null
// then if statements to check which operator was use, and depending on that,
// do return result = (the first input number) [operation] (the second input number)
// else return error

const calculate = (
  firstInputNumber: number,
  secondInputNumber: number
): number => {
  let result = 0;
  firstInputNumber = firstInputNumber;
  secondInputNumber = secondInputNumber;
  result = firstInputNumber + secondInputNumber;
  console.log("result", result);
  return result;
};

// need a way to show the user what they've typed - using display

let showInputOnDisplay = (numberInput: string) => {
  display?.append(numberInput);
};
