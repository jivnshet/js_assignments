// JavaScript Assignment 8 PDF

// Question 1.

//--> A Set can have only unique values, so we cannot put duplicate values in the set object

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

// a. Creating new set object
const numbers = new Set([1,2,3]);
console.log(numbers)

// b. Adding new element to set object
numbers.add(4);
console.log(numbers)

// c. Deleting element from set object
numbers.delete(1);
console.log(numbers)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.
let randomNumbers = new Set();

for(let i=0; i<=3; i++){
  randomNumbers.add(Math.floor(Math.random()*10));
}
console.log(`randomNumbers set =`, randomNumbers)
console.log(randomNumbers.has(8));