// 1. Variable Declarations
let variable1 = 10;
const constant1 = 5;

// 2. Function Creation

// Traditional function for addition
function addNumbers(a, b) {
    return a + b;
}

// Arrow function for multiplication
const multiplyNumbers = (a, b) => {
    return a * b;
}

// 3. Template Literals

// Using template literals to create a multi-line string
const resultString = `
The sum of ${variable1} and ${constant1} is: ${addNumbers(variable1, constant1)}
The product of ${variable1} and ${constant1} is: ${multiplyNumbers(variable1, constant1)}
`;

// Log the multi-line string to the console
console.log(resultString);
