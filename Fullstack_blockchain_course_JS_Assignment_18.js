// JavaScript Assignment 18 PDF

// Question 1.

// Generator is similar to a function but a generator has a special property called yield which lets us return the desired value and generator keeps track of the next return with the help of next keyword called from outside of the function in a sequential manner.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 2.

function * fun()
{
    yield 10;
    yield 20; 
}

var gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 3.

// Generators are iterable, we can make use of next keyword to get the following yield from the generator function.

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 4.

function * multiply(x,y)
{
  yield x*y;
}
 
// Calling the Generate Function
var gen = multiply(2,3);
console.log(gen.next().value);

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 5.

function* multiply(x, y) {
  yield x * y;
}

// Calling the Generate Function
var gen = multiply(2, 3);
// console.log(gen.next().value);

function* naturalNoGen(n) {
  for (let i = 1; i <= n; i++) {
    yield console.log(i)
  }
}
var gen = naturalNoGen(4);
gen.next().value;
gen.next().value;

// -----------*-----------*-----------*-----------*-----------*-----------

// Question 6.

function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
// console.log(g.next().value);
g.next();
g.throw(new Error('Something went wrong'));