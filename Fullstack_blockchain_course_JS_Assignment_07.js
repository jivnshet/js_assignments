// JavaScript Assignment 7 PDF

// Question 1.

function truncate(str) {
  return (str.length > 4) ? str.slice(0, 4) + "..." : str;
};

console.log(truncate('Ice'))
console.log(truncate('Ice cream'))
console.log(truncate('Full Stack Blockchain Course'))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

function whitespace(str) {
  return str.replace(/ /g, '');
}

console.log(whitespace('Ice cream'))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

var str = "food love";
var words = str.split(' ');
var strjoin = words[1].concat(" ", words[0])
console.log(strjoin)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

const word = 'apple';

console.log(word.replace('a', 'x'));

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

//--> .split(' ') method can be used to convert string into array

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 7.

//--> The operation can be performed using '\n' on a string using .split method.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 8.

function checkInitial(str) {
  if (str.charAt(0) === str.charAt(0).toLowerCase()) {
    console.log("First character of a string is lowercase.")
  }
  else {
    console.log("First character of a string is Uppercase.")
  }
}

checkInitial("hi, Aliens!");

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 9.

function checkStatus(status) {
  if (status.toLowerCase() === "yes") {
    console.log("Agrees");
  }
  else {
    console.log("Rejects");
  }
}

checkStatus("No");

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 10.

// npm install prompt-sync

const prompt = require("prompt-sync")();

let task;

function check(str) {

  do {
    task = parseInt(prompt("1. UpperCase\n2. Capitalize \n3. LowerCase \n4. Break the string and swap \n5. Count the repeating characters \n6. Reverse the string \n0. To quit: "));

    if (task === 1) {
      str = str.toUpperCase();
    }
    else if (task == 2) {
      str = str.charAt(0).toUpperCase()+str.substring(1);
    }
    else if (task == 3) {
      str = str.toLowerCase();
    }
    else if (task == 4) {
      var str = str;
      var words = str.split(' ');
      var str = words[1].concat(" ", words[0])
      // console.log(strjoin)
    }
    else if (task == 5) {
      let myString = str;
      let result = {};
      for (let stri of myString) {
        result[stri] = result.hasOwnProperty(stri) ? result[stri] + 1 : 1;
      }
      console.log(result);
    }
    else if (task == 6) {
      str = str.split("").reverse().join("");
    }
    console.log(str)

  } while (task!=0);
}

check("hello Babu!")