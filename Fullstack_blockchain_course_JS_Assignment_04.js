// JavaScript Assignment 4 PDF

// Question 1.
let houses = 0;
let firstHouse = 6;
let laterHouse = 5;
function matchHouses(number) {
  if (number == 0 || number < 0) {
    return;
  }
  else if (number == 1) {
    return firstHouse;
  }
  else if (number > 1) {
    return matchHouses(number - 1) + laterHouse;
  }
}

console.log(matchHouses(4));