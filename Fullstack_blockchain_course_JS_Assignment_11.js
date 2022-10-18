// JavaScript Assignment 11 PDF

// Question 1.

// npm install prompt-sync
const prompt = require("prompt-sync")();

var size=prompt("Enter the number of elements to have in an array: ");

var inputArray=[];

for(let i=0; i<size; i++){
  inputArray[i]=Number(prompt(`Enter the element at index ${i}: `));
}

let n = inputArray.length;
let even_nos=0;
let even_no_counter=0;
let odd_nos=0;
let odd_no_counter=0;

for(let j=0; j<size; j++){
  if(j%2===0){
    odd_nos+=inputArray[j];
    odd_no_counter+=1;
  }
  else{
    even_nos+=inputArray[j];
    even_no_counter+=1;
  }
}

let difference=odd_nos-even_nos;

let average=(odd_nos+even_nos)/n;

let differenceArray=[odd_nos, even_nos];

function gcd(a, b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
 
// Function to find gcd of array of numbers
function findGCD(arr, n)
{
    let result = arr[0];
    for (let i = 1; i < n; i++)
    {
        result = gcd(arr[i], result);
 
        if(result == 1)
        {
        return 1;
        }
    }
    return result;
}

console.log(`The array received is [${inputArray}]`);

// a.
console.log(`1. Difference between the two(even and odd) sums: ${difference}`);

// b.
console.log(`2. The number of elements in odd places: ${odd_no_counter}`);

// c.
console.log(`3. The number of elements in even places: ${even_no_counter}`);

// d.
console.log(`4. The average of all elements in the array: ${average}`);

// e.
console.log(`5. GCD: ${findGCD(differenceArray, differenceArray.length)}`);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

// npm install prompt-sync
// const prompt = require("prompt-sync")();

var inputFirstArray = [];
var inputSecondArray = [];

for (let c = 0; c < 2; c++) {
  var size = prompt(`Enter the number of elements to have in array ${c + 1}: `);

  for (let i = 0; i < size; i++) {
    if (c === 0) {
      inputFirstArray[i] = Number(prompt(`Enter the element at index ${i}: `));
    }
    else {
      inputSecondArray[i] = Number(prompt(`Enter the element at index ${i}: `));
    }
  }
}

var checkValue = Number(prompt(`Enter the number to scan in the arrays provided: `));

let inputFirstArrayValue = 0;
let inputSecondArrayValue = 0;

for (let d = 0; d < 2; d++) {
  for (let i = 0; i < size; i++) {
    if (inputFirstArray[i] === checkValue) {
      inputFirstArrayValue += 1;
    }
    if (inputSecondArray[i] === checkValue) {
      inputSecondArrayValue += 1;
    }
  }
}

console.log(`First Array [${inputFirstArray}]`)
console.log(`Second Array [${inputSecondArray}]`)

if (inputFirstArrayValue != 0 && inputSecondArrayValue != 0) {
  console.log(`Number ${checkValue} exists in both the arrays`);
}
else if (inputFirstArrayValue != 0) {
  console.log(`Number ${checkValue} exists in first array`);
}
else if (inputSecondArrayValue != 0) {
  console.log(`Number ${checkValue} exists in second array`);
}
else {
  console.log(`Number ${checkValue} does not exists in both of the arrays`);
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

var arrays = [ 1, 2, [ 3, 4, [ 5 ] ] ];

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten(arrays));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

var arr = [ 1, 2, 3, 2, 3, 4, 5 ];

const duplicateElements = arr => [...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i))]

const removeDuplicates=arr=> {
  return arr.filter((item,
    index) => 
      arr.indexOf(item) === index
    );
}

console.log(`Array [${arr}]`)
console.log(`Duplicate Elements: [${duplicateElements(arr)}]`);
console.log(`Array without duplicate elements: [${removeDuplicates(arr)}]`);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

function thirdLargest(arr, arr_size) {
  /* There should be
  at least three elements */
  if (arr_size < 3) {
    document.write(" Invalid Input ");
    return;
  }
  let first = arr[0];
  for (let i = 1; i < arr_size; i++)
    if (arr[i] > first)
      first=arr[i];
  let second = Number.MIN_VALUE;
  console.log(second)
  for (let i = 0; i < arr_size; i++)
    if (arr[i] > second && arr[i] < first)
      second=arr[i];
  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++)
    if (arr[i] > third && arr[i] < second)
      third = arr[i];
  document.write("The third Largest " + "element is ", third);
}
let arr = [12, 13, 1, 10, 34, 16];
let len = arr.length;

thirdLargest(arr, len);