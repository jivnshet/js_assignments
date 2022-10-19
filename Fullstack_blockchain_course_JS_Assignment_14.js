// JavaScript Assignment 14 PDF

// Question 1.

let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000
  }
];

// a)
const departmentIT = employees.filter(employee=>employee.department==="IT")
console.log(departmentIT)

// b)
const salary = employees.filter(employee=>employee.Salary<65000)
console.log(salary)

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

let hospitals = [
  {
    "id": 1,
    "name": "Hospital A",
    "location": "Delhi",
    "noOfBeds": 450,
    "availability": "Yes"
  },
  {
    "id": 2,
    "name": "Hospital B",

    "location": "Pune",
    "noOfBeds": 150,
    "availability": "No"
  },
  {
    "id": 3,
    "name": "Hospital C",
    "location": "Pune",
    "noOfBeds": 350,
    "availability": "Yes"
  }
];

// a)
const beds200=hospitals.filter(hospital=>hospital.noOfBeds>200)
console.log(beds200)

// b)
const bedsAvailable=hospitals.filter(hospital=>hospital.availability==="Yes")
console.log(bedsAvailable)

// c)
const locationPune=hospitals.filter(hospital=>hospital.location==="Pune")
console.log(locationPune)