// JavaScript Assignment 16 PDF

// Question 1.

//--> /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

function findHappiness(str) {
  var n = str.search(/happiness/i);
  if(n!==-1){
    console.log("Hurray!");
  }
  else{
    console.log("There is no happiness.");
  }
}

findHappiness("Work makes me happy");

findHappiness("You give me the feeling of Happiness");

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

function isPrime(n) {
  var re = /^.?$|^(..+?)\1+$/;
  return !re.test('1'.repeat(n));
}

console.log(isPrime("7"));

console.log(isPrime("134"));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

function num_of_digits(n) {
  let count = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    ++count;
  }
  return count;
}

console.log("Number of digits: " + num_of_digits(12));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

function removeLeadingTrailing(n) {
  let num = parseFloat(n);
  return num === Math.floor(num) ? Math.floor(num).toString() : num.toString();
}

console.log(removeLeadingTrailing("230.000"));

console.log(removeLeadingTrailing("00402"));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 6.

function doubleLetters(word){
  for (let i = 1; i < word.length; i++) {
      if (word[i-1] === word[i]) {
          return true;
      }
  }
  return false;
}

console.log(doubleLetters("loop"));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 7.

function validatePIN (pin) {
  return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}

console.log(validatePIN("12345"))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 8.

function isValidHexCode(str) {
  if (str[0] != '#')
    return false;

  if (!(str.length == 7))
    return false;

  var n=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
  return n;
}

console.log(isValidHexCode("#CD5C5C"));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 9.

var arr=[1,2,3,4,5,6];

function sevenBoom(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===7){
      return "Boom";
    }
  }
  return "there is no 7 in the array";
}

console.log(sevenBoom(arr))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 10.

function XO(str) {
  let count = 0;
  for (let i = 0; i < str.length; ++i) {
    switch (str.charAt(i)) {
      case 'o': case 'O':
        count++;
        break;
      case 'x': case 'X':
        count--;
        break;
    }
  }
  return count == 0;
}

console.log(XO("ooxXm"));