// JavaScript Assignment 15 PDF

// Question 1.

function find_length(s1, s2) {

  // Not a valid triangle
  if (s1 <= 0 || s2 <= 0) {
    console.log(-1);
    return;
  }
  var max_length = s1 + s2 - 1;
  var min_length = Math.max(s1, s2) - Math.min(s1, s2) + 1;

  // Not a valid triangle
  if (min_length > max_length) {
    console.log(-1);
    return;
  }

  console.log("Max Length of third side = " + max_length);
  // console.log("Min = " + min_length);
}

var s1 = 8, s2 = 10;
find_length(s1, s2);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

const power=(y,z)=>{
  if(z==0){
    return 1;
  }
  else{
    return y*power(y, z-1)
  }
}

const rightShift=(a,b)=>{
  let x=Math.floor(a/power(2,b));
  console.log(x)
}

rightShift(5,2)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

const secondDerivative=(b,m)=>{
  let x=m;
  // e=2.718
  var value=Math.pow(x,b) + (x*(Math.pow(2.718,(b*m))));
  return value;
}

console.log(secondDerivative(5,2))

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

const prompt = require("prompt-sync")();

const number=Number(prompt("Enter number of triagles to find cummulative sum of dots: "))

let result=0;
let arr=[];
function generateEqTriangle(n){
  for(let j=0; j<n; j++){
    for(let i=1; i<=n; i++){
      result+=i
      arr.push(result)
    }
    
    return result;
  }
  
}
generateEqTriangle(number)

console.log(arr)

let totalTriangles=0
for(let k=0; k<arr.length; k++){
  totalTriangles+=arr[k];
}

console.log(`Cumulative sum of the number of all the previous (including current) dots when given its corresponding triangle number ${totalTriangles}`)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

let total = 0
let billAmount = 0
const pocketChange = (arr, bill) => {
  let quarter = arr[0] * 0.25;
  let dime = arr[1] * 0.1;
  let nickel = arr[2] * 0.05;
  let penny = arr[3] * 0.01;
  billAmount = bill
  total = (quarter + dime + nickel + penny)
  console.log(`Total Change in Pocket: ${total}`)
  console.log(`Total Bill Amount: ${billAmount}`)
  let billStatus = "";
  if (total >= billAmount) {
    billStatus = "Can pay";
  }
  else {
    billStatus = "Cannot pay";
  }
  console.log(billStatus)
  if (total >= bill) {
    return true;
  } else return false;

};

console.log(pocketChange([2, 100, 0, 0], 14.11));