// JavaScript Assignment 5 PDF

// Question 1.

class Shape {
  constructor(radius, height) {
    const PI = Math.PI;
    this.PI = PI;
    this.radius = radius;
    this.height = height;
  }
}

class Cylinder extends Shape {
  constructor(radius, height) {
    super(radius, height);
  }
  getVolume() {
    return ((this.PI * (this.radius * this.radius) * this.height).toFixed(4));
  }
}

class Sphere extends Shape {
  constructor(radius) {
    super(radius);
  }
  getVolume() {
    return (((4 / 3) * this.PI * (this.radius * this.radius * this.radius)).toFixed(4));
  }
}

class Cone extends Shape {
  constructor(radius, height) {
    super(radius, height);
  }
  getVolume() {
    return (((1 / 3) * this.PI * (this.radius * this.radius) * this.height).toFixed(4));
  }
}

let cylinder1 = new Cylinder(4, 5);
console.log(`Volume of Cylinder with radius ${cylinder1.radius} and height ${cylinder1.height} is: ${cylinder1.getVolume()}`);

let sphere1 = new Sphere(4);
console.log(`Volume of Sphere with radius ${sphere1.radius} is: ${sphere1.getVolume()}`);

let cone1 = new Cone(6, 5);
console.log(`Volume of Cone with radius ${cone1.radius} and height ${cone1.height} is: ${cone1.getVolume()}`);