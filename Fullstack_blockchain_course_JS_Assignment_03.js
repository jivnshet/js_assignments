// JavaScript Assignment 3 PDF

// Question 1.

let value = "";
let height = 4;
let count = 1;
for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    value += count + " ";
    count++;
  }
  value += "\n";
}
console.log(value);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

armstrong(153)

function armstrong(number) {
  let checkNumber;
  let remainder;
  let addition = 0;

  checkNumber = number;
  while (number > 0) {
    remainder = number % 10;
    addition = addition + remainder * remainder * remainder;
    number = parseInt(number / 10);
  }

  if (addition == checkNumber) {
    console.log(`${checkNumber} is an Armstrong number`);
  }
  else {
    console.log(`${checkNumber} is not an Armstrong number`);
  }
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

specialNumber(145)

function specialNumber(number) {
  let checkNumber;
  let remainder;
  let addition = 0;

  checkNumber = number;
  while (number > 0) {
    remainder = number % 10;
    addition = addition + factorial(remainder);
    number = parseInt(number / 10);
  }

  if (addition == checkNumber) {
    console.log(`${checkNumber} is a special number`);
  }
  else {
    console.log(`${checkNumber} is not a special number`);
  }
}

function factorial(number) {
  if (number < 0) {
    return
  }
  else if (number == 1 || number == 0) {
    return 1;
  }
  else {
    return number * (factorial(number - 1))
  }
}