// calculator type
type Calculation = {
  firstInputNumber: string;
  secondInputNumber: string;
  operationClicked: string;
};
// calculator object
const currentCalculation: Calculation = {
  firstInputNumber: "",
  secondInputNumber: "",
  operationClicked: "",
};

// making a calculator object to handle scientific calculations

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

const handleNumberButtonClick = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  const value = target.textContent;
  // checking if value is undefined, or has undefined type
  if (value != null) {
    // depends on if the operation button has been clicked
    if (currentCalculation.operationClicked === "") {
      // saving the inputs as the first or second number
      currentCalculation.firstInputNumber += value;
    } else {
      currentCalculation.secondInputNumber += value;
    }
    updateScreen();
  }
};

const handleOperationButtonClick = (event: Event) => {
  const target = event.target as HTMLElement;
  // added .trim() as there was white space somewhere, which was throwing an error and the operation was not being read properly
  const operationClicked = target.innerHTML.trim();

  // // check if there is already a first input number
  // if (
  //   currentCalculation.firstInputNumber !== ""
  // ) {
  //   // if none, set it to 0 or undefined?
  //   currentCalculation.firstInputNumber = "0";
  //   currentCalculation.operationClicked = operationClicked;
  //   currentCalculation.secondInputNumber = "";
  // } else if (currentCalculation.operationClicked === ""){
  //   currentCalculation.operationClicked = operationClicked;
  // }

  // If there's already a first input number, set the operation clicked
  if (currentCalculation.firstInputNumber !== "") {
    currentCalculation.operationClicked = operationClicked;
  } else {
    // If there's no first input number, set the first input number as 0 and the operation clicked
    currentCalculation.firstInputNumber = "";
    currentCalculation.operationClicked = operationClicked;
  }

  updateScreen();


};

const handleEqualsButtonClick = () => {
  // for single number operation: check if one input number and the operation are present
  if (
    currentCalculation.secondInputNumber !== "" &&
    currentCalculation.operationClicked !== ""
  ) {
    // do the calculation by calling calculate function with single input
    const result = calculate(
      undefined,
      currentCalculation.secondInputNumber,
      currentCalculation.operationClicked
    );
    currentEnteredNumber.textContent = result.toString();
    // update the first input number with the result for subsequent calculations
    currentCalculation.firstInputNumber = result.toString();
    // reset input values for next calculation
    currentCalculation.secondInputNumber = "";
    currentCalculation.operationClicked = "";
  } else if (
    currentCalculation.firstInputNumber !== "" &&
    currentCalculation.secondInputNumber !== "" &&
    currentCalculation.operationClicked !== ""
  ) {
    // Perform the calculation
    const result = calculate(
      currentCalculation.firstInputNumber,
      currentCalculation.secondInputNumber,
      currentCalculation.operationClicked
    );
    // Display the result
    currentEnteredNumber.textContent = result.toString();
    // Update the first input number with the result for subsequent calculations
    currentCalculation.firstInputNumber = result.toString();
    // Reset input values for next calculation
    currentCalculation.secondInputNumber = "";
    currentCalculation.operationClicked = "";
  } 
};

currentCalculation.firstInputNumber !== "" &&
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

// --- FUNCTIONS ---

const calculate = (
  firstInputNumber: string | undefined,
  secondInputNumber: string,
  operationClicked: string
): number => {
  // let result = 0;
  const firstNumber = Number(firstInputNumber);
  const secondNumber = Number(secondInputNumber);
  
  if (operationClicked === "+") {
    return firstNumber + secondNumber;
  } else if (operationClicked === "-") {
    return firstNumber - secondNumber;
  } else if (operationClicked === "x") {
    return firstNumber * secondNumber;
  } else if (operationClicked === "÷") {
    return firstNumber / secondNumber;
  } else if (operationClicked === "%") {
    return (firstNumber / secondNumber) * 100;
  } else if (operationClicked === "ln") {
    return Math.log(firstNumber);
  } else if (operationClicked === "log₁₀") {
    return Math.log10(firstNumber);
  } else if (operationClicked === "eˣ") {
    return Math.exp(firstNumber);
  } else if (operationClicked === "√") {
    console.log(firstNumber);
    return Math.sqrt(Math.abs(firstNumber));
  } else if (operationClicked === "ˣ√") {
    return Math.sqrt(Math.abs(secondNumber)) * firstNumber;
  } else if (operationClicked === "x²") {
    // shouldn't allow a second number input
    return Math.pow(firstNumber, 2);
  } else if (operationClicked === "xʸ") {
    // is not working??
    return Math.pow(firstNumber, secondNumber);
  } else if (operationClicked === "sin") {
    return Math.sin(secondNumber); // is not working??
  } else if (operationClicked === "cos") {
    return Math.cos(secondNumber);
  } else if (operationClicked === "tan") {
    return Math.tan(secondNumber);
  } else if (operationClicked === "sin⁻¹") {
    return Math.sinh(secondNumber); // is not working??
  } else if (operationClicked === "cos⁻¹") {
    return Math.cosh(secondNumber);
  } else if (operationClicked === "tan⁻¹") {
    return Math.tanh(secondNumber);
  } else if (operationClicked === "x/y") {
    return firstNumber / secondNumber;
  } else {
    throw new Error("somethings gone wrong");
  }
};

// need a way to show the user what they've typed

let updateScreen = () => {
  // object destructuring to extract values from 'currentCalculation'
  const { firstInputNumber, operationClicked, secondInputNumber } =
    currentCalculation;
  // concatonate these values
  const screenContent = `${firstInputNumber} ${operationClicked} ${secondInputNumber}`;
  // assign the above values to the textContent property of currentEnteredNumber
  // .trim() to remove the whitespace from start and end of string
  currentEnteredNumber.textContent = screenContent.trim();
};
