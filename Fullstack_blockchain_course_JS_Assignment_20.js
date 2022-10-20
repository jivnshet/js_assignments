// JavaScript Assignment 20 PDF

// Question 1.

//-->Async/await lets other threads to make calls like HTTP calls, as async operation doesn't need thread time thus allowing the application become efficient with the duties.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

//--> The fact of the matter is Async/Await are based on promises. Yes, they can be chained. Chaining in this matter looks like chaining promises.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

//-->1. To fetch Ecommerce Products
//-->2. While signing up/signing in for websites
//-->3. Currency Converter

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

// Output:
// 3

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

// Output:
// 1
// Error: some error

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 6.

// Output:
// 3
// 2
// 1
// Go!

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 7.

// Output:
// Error in setTimeout() method

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 8.

// Async/Await only works on functions that return (and resolve) a promise.

// The following example will write to the console after 3 seconds, and then continue on.
async function myFunc() {
  // Await for the promise to resolve
  await new Promise((resolve) => {
      setTimeout(() => {
          // Resolve the promise
          resolve(console.log('hello'));
      }, 3000);
  });
  // Once the promise gets resolved continue on
  console.log('hi');
}

myFunc();

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 9.

// Calling async code only from async code, in most cases deadlocks are caused because a synchronous code is trying to access async code

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 10.

//--> When there are no independent duty to handle the efficient way to choose is synchronous coding.