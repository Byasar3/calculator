// calculator type
type calculation = {
  firstInputNumber: number;
  secondInputNumber: number;
  operationClicked: string;
};
// calculator object
const currentCalculation: calculation = {
  firstInputNumber: 0,
  secondInputNumber: 0,
  operationClicked: "",
};

// --- QUERY SELECTORS ---
const previousEnteredNumber = document.querySelector<HTMLElement>(
  "#previous-entered-number"
);
const currentEnteredNumber = document.querySelector<HTMLElement>(
  "#current-entered-number"
);
const clearButton = document.querySelector<HTMLElement>("#clear-button");
const deleteButton =
  document.querySelector<HTMLButtonElement>("#delete-button");
const buttons = document.querySelectorAll<HTMLButtonElement>(".number");
const operations = document.querySelectorAll<HTMLButtonElement>(".operation");
const equalsButton = document.querySelector<HTMLButtonElement>("#equals");

// --- GUARD CLAUSES ---
if (
  !previousEnteredNumber ||
  !currentEnteredNumber ||
  !clearButton ||
  !deleteButton ||
  !buttons ||
  !operations ||
  !equalsButton
) {
  throw new Error("Issue with selectors");
}

// --- FUNCTIONS ---

const calculate = (
  firstInputNumber: number,
  secondInputNumber: number,
  operationClicked: string
): number => {
  let result = 0;
  const firstNumber = firstInputNumber;
  const secondNumber = secondInputNumber;
  if (operationClicked === "+") {
    return (result = firstNumber + secondNumber);
  } else if (operationClicked === "-") {
    return (result = firstNumber - secondNumber);
  } else if (operationClicked === "*") {
    return (result = firstNumber * secondNumber);
  } else {
    return (result = firstNumber / secondNumber);
  }
};

// need a way to show the user what they've typed

let updateScreen = () => {
  currentEnteredNumber.textContent = `${currentCalculation.firstInputNumber} ${currentCalculation.operationClicked} ${currentCalculation.secondInputNumber}`;
};

// need a function to determine the operation chosen

const operationChosen = () => {};

// --- EVENT HANDLERS ---

const handleClearButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  console.log(target);
};

const handleDeleteButtonClick = (event: Event) => {
  console.log(event);
};

const handleOperationButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  const operationClicked = target.innerHTML;
  currentCalculation.operationClicked = operationClicked;
};

const handleEqualsButtonClick = (event: Event) => {
  return event.target;
};

const handleNumberButtonClick = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  const value = target.textContent;
  // saving the inputs as the first or second number
  // depends on if the operation button has been clicked
  // checking if value is undefined, or has undefined type
  if (value !== undefined && value != undefined) {
    if (currentCalculation.operationClicked === "") {
      currentCalculation.firstInputNumber = parseFloat(value);
    } else {
      currentCalculation.secondInputNumber = parseFloat(value);
    }
    updateScreen();
  }
};

// --- EVENT LISTENERS ---

clearButton.addEventListener("click", handleClearButtonClick);
deleteButton.addEventListener("click", handleDeleteButtonClick);
buttons.forEach((button) => {
  button.addEventListener("click", handleNumberButtonClick);
});
operations.forEach((operation) => {
  operation.addEventListener("click", handleOperationButtonClick);
});
equalsButton.addEventListener("click", handleEqualsButtonClick);
