// JavaScript Assignment 17 PDF

// Question 1.

let arr = ["John", "Rohn", "Danny", "James"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

let str = "iNeuron";

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };
  return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h', 'a', 'i', 'j'];

function arrayLetterMatch(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(arrayLetterMatch(arr1, arr2))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

arr = [1, 2, 3, 4, 5, 6];

// For Loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// While Loop
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// Do While Loop
let k = 0;
do {
  console.log(arr[k]);
  k++;
} while (k < arr.length);

// For Each loop
arr.forEach((item, index) => {
  console.log(item, index)
})

// for in loop
for (let key in arr) {
  console.log(arr[key])
}
