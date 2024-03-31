// calculator type
type calculation = {
  firstInputNumber: string;
  secondInputNumber: string;
  operationClicked: string;
};
// calculator object
const currentCalculation: calculation = {
  firstInputNumber: "",
  secondInputNumber: "",
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
  firstInputNumber: string,
  secondInputNumber: string,
  operationClicked: string
): number => {
  let result = 0;
  const firstNumber = parseFloat(firstInputNumber);
  const secondNumber = parseFloat(secondInputNumber);
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
  // Concatenate input strings with operation in between
  currentEnteredNumber.textContent = `${currentCalculation.firstInputNumber} ${currentCalculation.operationClicked} ${currentCalculation.secondInputNumber}`;
};

// --- EVENT HANDLERS ---

const handleClearButtonClick = () => {
  // reset all values to their defaults
  currentCalculation.firstInputNumber = "";
  currentCalculation.secondInputNumber = "";
  currentCalculation.operationClicked = "";
  updateScreen();
};

const handleDeleteButtonClick = () => {
  // delete the last entered digit -> can be from 1st input, operator or 2nd input
  // if second input is not 0, then delete last digit from it
  if (currentCalculation.secondInputNumber !== "") {
    currentCalculation.secondInputNumber =
      currentCalculation.secondInputNumber.slice(0, -1);
  } else if (currentCalculation.operationClicked !== "") {
    currentCalculation.operationClicked = "";
  } else {
    currentCalculation.firstInputNumber =
      currentCalculation.firstInputNumber.slice(0, -1);
  }
  updateScreen();
};

const handleOperationButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  const operationClicked = target.innerHTML;
  if (currentCalculation.operationClicked === "") {
    currentCalculation.operationClicked = operationClicked;
  }
  updateScreen();
};

const handleEqualsButtonClick = (event: Event) => {
  // check if both input numbers and the operation are present
  if (
    currentCalculation.firstInputNumber !== "" &&
    currentCalculation.secondInputNumber !== "" &&
    currentCalculation.operationClicked !== ""
  ) {
    // do the calculation by calling calculate function
    const result = calculate(
      currentCalculation.firstInputNumber,
      currentCalculation.secondInputNumber,
      currentCalculation.operationClicked
    );
    currentEnteredNumber.textContent = result.toString();
    // reset input values for next calculation
    currentCalculation.firstInputNumber = "";
    currentCalculation.secondInputNumber = "";
    currentCalculation.operationClicked = "";
  }
};

const handleNumberButtonClick = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  const value = target.textContent;
  // saving the inputs as the first or second number
  // checking if value is undefined, or has undefined type
  if (value != null) {
    // depends on if the operation button has been clicked
    if (currentCalculation.operationClicked === "") {
      currentCalculation.firstInputNumber += value;
    } else {
      currentCalculation.secondInputNumber += value;
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
