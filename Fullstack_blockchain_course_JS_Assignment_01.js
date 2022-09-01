// JavaScript Assignment 1 PDF

// Question 1.

console.log(leapYear(2020))

function leapYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

function celsiusToF(temperature) {
  return (temperature * (9 / 5)) + 32
}
function FarenheitToC(temperature) {
  return (temperature - 32) * (5 / 9)
}

console.log(celsiusToF(60))
console.log(FarenheitToC(45))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

function factorial(number) {
  if (number < 0) {
    return
  }
  else if (number == 1 || number == 0) {
    return 1
  }
  else {
    return number * (factorial(number - 1))
  }
}

console.log(factorial(6))