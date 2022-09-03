// JavaScript Assignment 2 PDF

// Question 1.

console.log(checkTriangle(1, 1, 2));

function checkTriangle(side1, side2, side3) {
  if (side1 == side2 && side2 == side3) {
    return "Equilateral Triangle";
  }
  else if (side1 == side2 || side2 == side3 || side3 == side1) {
    return "Isosceles Triangle";
  }
  else {
    return "Scalene Triangle";
  }
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

const checkGrade = (marks) => {
  switch (true) {
    case marks >= 90:
      console.log("S Grade");
      break;
    case marks >= 80:
      console.log("A Grade");
      break;
    case marks >= 70:
      console.log("B Grade");
      break;
    case marks >= 60:
      console.log("C Grade");
      break;
    case marks >= 50:
      console.log("D Grade");
      break;
    case marks >= 40:
      console.log("E Grade");
      break;
    case marks < 40:
      console.log("Student has failed");
      break;
    default:
      console.log("Invalid marks");
  }
}

checkGrade(96);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

prime(1, 5)

function prime(lowerNumber, higherNumber) {

  // swap lowerNumber and higherNumber if lowerNumber > higherNumber
  if (lowerNumber > higherNumber) {
    lowerNumber = lowerNumber + higherNumber;
    higherNumber = lowerNumber - higherNumber;
    lowerNumber = lowerNumber - higherNumber;
  }

  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(`Factorial of ${i} is ${factorial(i)}`);
    }
  }
}

function factorial(number) {
  
  // not considering numbers less than 0
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


