console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result


// 1. Function to return 'Hello World!'
function hello() {
  console.log('in hello');
  return 'Hello World!';
} // end 'hello'

// Call the function to test
console.log(hello()); // Logs 'Hello World!'


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('in helloName')
  return name;
} // end 'helloName'

// Call the function to test
console.log(helloName('Hello, Ben!'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
} // end 'addNumbers'

// Call function to test
console.log(addNumbers(11, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  console.log('in multiplyThree:', firstNumber, secondNumber, thirdNumber);
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
} // end 'multiplyThree'

// Call function to test
console.log(multiplyThree(10, 10, 10));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in isPositive:');
  if ( number > 0 )
    return true;

  else ( number <= 0)
    return false;
} // end 'isPositive'

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let array = [];

function getLast( array ) {
  console.log('in getLast');
  if (getLast.length - 1 > 0) {
    return getLast[array.length-1];
  }
  else {
    return undefined;
  }
} // end 'getLast'

// Call the function to test
console.log('Should log undefined, as I did not define array:', getLast());


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

// array has already been defined, line 72
// for of loop will continue to look for i in the array.
// if present, it will log true, if it is absent, it will log false.
function find(value, array) {
  for (let i of array) {
    if (i === value) {
      return true;
    } // end if condition
  } // end for of loop
    return false;
} // end find function


// Call the function to test
console.log('Should log true:', find(9, [3, 7, 9, 11]));


// ----------------------
// Stretch Goals
// ----------------------

// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
let string = [];
function isFirstLetter(letter, string) {
  let i = 0;
    if (string[i].includes(letter)){
      return true;
    } // end if statement
    else {
      return false;
    } // end else statement
} // end function 'isFirstLetter'
// isFirstLetter will look for the index 0, which is the first index is the string apple.
// if it matches, it will log true; if it doesn't match, it will log false.

// Call the function to test
console.log( 'isFirstLetter a - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter z - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
    for (let i=0; i<array.length; i++) {
      sum += array[i];
    } // end for loop
    return sum;
} // end function sumAll

// Call the function to test
console.log('The sum of array sumAll is:', sumAll([3, 5, 7, 9, 11, 13])); //Should log 48


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositiveNumbers (numbers) {
  let positiveArray = [];
    for (let i=0; i<numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveArray.push(numbers[i]);
      } // end if statement
    } // end for loop
    return console.log(positiveArray);
} // end function 'allPositiveNumbers'

// Call the function to test
allPositiveNumbers([4, -5, 6, -7, 8, -9])


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
