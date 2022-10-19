// JavaScript Assignment 12 PDF

// Question 1.

var employee = {
  id: [67, 48, 29],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  salary: [75000, 82000, 98000]
};

// a)
console.log(employee.id);

// b)
console.log(employee.id.length);

// c)
for(let i=0; i<employee.id.length; i++){
  console.log(`${employee.id[i]}: ${employee.name[i]}`);
}

// d)
console.log(employee.salary);

// e)
let sum=0;
for(let i=0; i<employee.salary.length; i++){
  sum+=employee.salary[i];
}

let average=sum/employee.salary.length;

console.log(average);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2. Doubtful

var students = {
  id: [1,2,3],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  scores: [ 90, 88, 92 ]
};

// b)
var studentNames=students.name.map(student=>console.log(student))

// c)
var studentScores=students.scores.map(score=> score.delete)

console.log(studentScores)

// d)
// One parameter
console.log(students.name)

// Two parameter
console.log(students.id)
console.log(students.name)
console.log(students.scores)

// Three parameter
console.log(`id ${students.id}`)
console.log(`name ${students.name}`)
console.log(`scores ${students.scores}`)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

var inputArray=[ 1, 2, 3, 4, 5 ];

var squareArray=inputArray.map(value=>value*value)
console.log(squareArray)