// JavaScript Assignment 19 PDF

// Question 1.

// Output:

// Error 1
// Success 4

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

let sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

console.log("Begin");
console.log("Welcome to the Show!");

sleep(5000).then(() => {
  console.log("End");
});

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

// Output:
// 2
// 4
// undefined
// 24

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

// Output:
// start
// middle
// 1
// end
// success

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.
let sleep1 = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

sleep1(1000).then(() => {
  console.log("Hi!");
});

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 6.

// Output:
// SUCCESS!

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 7.

// Output:
// Error: The Fails!

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 8.

// Output:
// start
// end
// resolve
// setTimeout

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 10.

// Output:
// start
// end
// 1
// 2