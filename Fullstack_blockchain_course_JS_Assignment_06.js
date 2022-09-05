// JavaScript Assignment 6 PDF

// Question 1.

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    let area = 0;
    if (this.breadth) {
      area = this.length * this.breadth;
    }
    else {
      area = this.length * this.length;
    }
    return area;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length);
  }
}

let square1 = new Square(8);
console.log(`The Area of Square with length ${square1.length} is ${square1.area()}`)

let rectangle1 = new Rectangle(8, 7);
console.log(`The Area of Rectangle with length ${square1.length} and breadth ${rectangle1.breadth} is ${rectangle1.area()}`)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

let array = [3, 45, 6, 7, 23, 5, 7, 8];
function find_largest(number) {
  // let temp = 0;
  // for(let i=0; i<array.length; i++){
  //   for(let j=0; j<array.length-1; j++){
  //     if(array[j]<array[j+1]){
  //       temp=array[j];
  //       array[j]=array[j+1];
  //       array[j+1]=temp;
  //     }
  //   } 
  // }
  // Used sort instead of loops
  let newset = array.sort(function (a, b) { return b - a });
  let set = new Set(newset);
  let access = number - 1;  //since index starts from '0'
  let newarray = Array.from(set);
  return newarray[access];
}

console.log(find_largest(3))

//-----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

// const ps = require("prompt-sync")
// const prompt = ps({ sigint: true });

const prompt = require("prompt-sync")({ sigint: true });

let value = prompt("Enter a number: ");

console.log(insert_dashes(value));

function insert_dashes(number) {
  const str = number.toString();
  const result = [str[0]];

  for (let x = 1; x < str.length; x++) {
    if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
      result.push('-', str[x]);
    }
    else {
      result.push(str[x]);
    }
  }
  return result.join('');
}

