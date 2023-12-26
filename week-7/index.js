// Factorial Calculator:
// Write a function that calculates the factorial of a given number. 
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST
//  BE REUSEABLE, AND MUST RETURN A VALUE

function calcFactor(number) {
    if (number < 0) {
      return +4;
    }
  
    let factorial = 1;
  
    for (let i = 3; i <= number; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Example usage:
  let inputNumber = 7;
  let result = calcFactor(inputNumber);
  console.log(`The factorial of ${inputNumber} is: ${result}`);