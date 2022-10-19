// JavaScript Assignment 12 PDF

// Question 1.

var inputArray=[1,2,3,4,5];

const sum=inputArray.reduce((result, element)=>{
  return result+element;
}, 0);
console.log(sum)

const average = inputArray.reduce((result, element) => result+element, 0) / inputArray.length;
console.log(average);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2. Doubtful

let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 }
];

let grade="";
const checkGrade=(marks)=>{
  if(marks>90){
    grade="A";
  }
  else if(marks>80){
    grade="B";
  }
  else if(marks>70){
    grade="C";
  }
  else if(marks>60){
    grade="D";
  }
  else if(marks>50){
    grade="E";
  }
  else{
    grade="F";
  }
  return grade;
}

// a)
console.log(checkGrade(students[0].marks))

// b)
var studentGrade=students.map(student=>{
  return checkGrade(student.marks)
})
console.log(studentGrade)

var studentName=[];
studentName=students.map(student=>student.name);
console.log(studentName)

var studentList=[];
for(let i=0; i<studentName.length; i++){
  studentList.push(`{name: ${studentName[i]}, grade: ${studentGrade[i]}}`)
}
console.log(studentList)

// c)
// const ages = [32, 33, 16, 40];
const A = students.filter(checkMarksA);
const B = students.filter(checkMarksB);
const C = students.filter(checkMarksC);
const D = students.filter(checkMarksD);
const E = students.filter(checkMarksE);
const F = students.filter(checkMarksF);

function checkMarksA(student) {
  return student.marks > 90;
}
function checkMarksB(student) {
  return student.marks > 80 && student.marks <= 90;  
}
function checkMarksC(student) {
  return student.marks > 70 && student.marks <= 80;  
}
function checkMarksD(student) {
  return student.marks > 60 && student.marks <= 70;  
}
function checkMarksE(student) {
  return student.marks > 50 && student.marks <= 60;  
}
function checkMarksF(student) {
  return student.marks > 40 && student.marks <= 50;  
}

var result={
  A,
  B,
  C,
  D,
  E,
  F
}

console.log(result)(squareArray)