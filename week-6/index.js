// question 1
// create a function that checks if the input/ parameter is an even number

function isEven(num){
if (num % 2 === 0){
    return  "Even";
}
else{
        return "odd";
    }
}
console.log(isEven(234));

console.log(isEven(337));


//question 2
// create a function that prints to the console n1, n2. where n1 is the first input 
// and n2 is the second input.

function showNumbers(n1, n2) {
    console.log("n1:", n1);
    console.log("n2:", n2);
  }
  
  showNumbers(1, 5);

//Question 3
// create a function that sum the values in between 2 nos e.g calcFunction(1,3) 
// returns 6(i.e 1.2.3)
function calcFunction(first, end) {
    let sum = 0;
  
    // Ensure start is less than or equal to end
    if (first > end ) {
      [first, end] = [end, first];
    }
  
    for (let i = first; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  }

  
  let result = calcFunction(2, 4);
  console.log(result); // Output: 6 (1 + 2 + 3)