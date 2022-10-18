// JavaScript Assignment 10 PDF

// Question 1.

//--> Both aren't the same.
// Higher order functions can take another function as an arument or can return a function.
//--> A callback is a function which is passed as an argument to another function.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

// .filter() takes in a function as a parameter to check a condition, so as it is taking another function as a parameter .filter() is is a Higher order function.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

//--> So lets say we have a calculator program:

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//--> So myDisplayer is a callback function and myCalculator is a higher order function

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

// a.
// Output:
// Hello John
// Hello Tina
// Hello Kale
// Hello Max

// b.
//--> useFunction is a higher order function
