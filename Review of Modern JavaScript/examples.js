"use strict";

//---------------//
// Let and Const //
//---------------//

//let is a block scope
//const declare on the declaration

const firstName = "Roi";
const lastName = "Susi";

console.log(firstName);

for (let x = 1; x <= 10; x++) {
  console.log(x);
}

let birthDate = new Date();

let person = {
  firstName: "Roik",
  lastName: "Susi",
};

console.log(person);

person.firstName = "Roi";

console.log(person);

//const
const person2 = "Hadar";

//---------------------//
// Arrow and Functions //
//--------------------//

//function

let dupl = function (value) {
  return value * 2;
};

console.log(dupl(4));

//Arrow with return when i have more the 2 lines
let dupl2 = (value) => {
  return value * 2;
};

console.log(dupl2(3));

//Arrow without return , remove {}
let dupl3 = (value) => value * 2;
console.log(dupl3(6));

//this - traditional
const obj = {
  traditionalFunction: function () {
    console.log("traditional function", this);
  },
  arrowFunction: () => {
    console.log("arrow function", this);
  },
  lastName: "Susi",
};

console.log("this environment", this);
obj.traditionalFunction();
obj.arrowFunction();

//-----------------//
// Template String //
//-----------------//

const myString = `Hello ${firstName}, how are you ?`; //backSticks
console.log(myString);

const add = (a, b) => a + b;
const someMassage = `Hello ${firstName},
You know that 2+2 is ${add(2, 2)}`; //New line declared
console.log(someMassage);

//------------------//
// Ternary Operator //
//------------------//

const age = 18;
let message = age >= 18 ? "You shall pass" : "You shall not pass";

console.log(message);

//--------------------------//
// Enhanced Object Literals //
//--------------------------//

let propertyName = "country";
let propertyValue = "Israel";
let person3 = {
  [propertyName]: propertyValue,
  firstName: "Roi",
  lastName, //valuse of the lastName i declare early on
  age: 35,
  multy(a, b) {
    return a * b;
  },
  add: (a, b) => {
    return a + b;
  },
};

console.log(person3.multy(2, 3));
console.log(person3.add(2, 3));
console.log(person3[propertyName]);

const returnProperty = (props) => person3[props];

console.log(returnProperty("age"));

//---------------//
// Destructuring //
//---------------//

let person4 = {
  [propertyName]: propertyValue,
  firstName1: "Roi",
  lastName1: "Susi", //valuse of the lastName i declare early on
  age1: 35,
  multy(a, b) {
    return a * b;
  },
  add: (a, b) => {
    return a + b;
  },
};

const { firstName1, lastName1, age1 } = person4;

console.log(firstName1, lastName1, age1);

const printName2 = ({ firstName1, lastName1 }) => {
  console.log(firstName1);
  console.log(lastName1);
};

printName2(person4);

const arr = [1, 2, 3, 4];

const [first, second, , fourth] = arr;
console.log(first);

//--------------------------//
// Spread Operator - Arrays //
//--------------------------//

// example 1 :
const sum = (a, b, c) => a + c;
const numbers = [2, 3, 4];

console.log(sum(...numbers)); //2 + 4 // [2,3,4]

// example 2 :

const moreNumbers = [1, ...numbers]; //[1,2,3,4]
const moreNumbers2 = [1, numbers]; // [1,[2,3,4]]
const moreNumbers3 = [1, ...numbers, 4, 5]; //[1,2,3,4,5]

console.log(moreNumbers);
console.log(moreNumbers2);
console.log(moreNumbers3);

// example 3 :
//two arrays

const arrNumbers1 = [1, 2, 3];
const arrNumbers2 = [4, 5];
const together = [...arrNumbers1, ...arrNumbers2];

console.log(together); //[1,2,3,4,5]

// example 4 :

const [, second1, ...theRemainingValues] = together;
console.log(second1);
console.log(theRemainingValues);

// example 5 :
//clone arr

const concateColone = [...together];
console.log(concateColone);
together.push(6);
console.log(together); //[1,2,3,4,5,6]
console.log(concateColone); //[1,2,3,4,5]

// example 6 :
//with objects

const person5 = {
  name: "Roi",
  lastName: "Susi",
};

const person6 = {
  ...person5,
  age: 25,
};

//clone object
const person7 = { ...person6 };
person6.name = "Hadar";
console.log(person7);
console.log(person6);

//---------//
// Classes //
//---------//

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    console.log(`The area of the rectangle is ${this.height * this.width}`);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const rec = new Rectangle(4, 5);
console.log("rec is ", rec);
rec.area();

const sq = new Square(5, 5);
sq.area();

Rectangle.prototype.area = (a, b) => a * b;
console.log(rec.area(3, 9));

//--------------//
// Map Function //
//--------------//

//example 1:
const numberss = [1, 2, 3, 4, 5];
const squares = numberss.map((values) => values * values);
console.log(squares);

//example 2:
const pepole = [
  {
    id: 1,
    name: "Roi",
    country: "Israel",
  },
  {
    id: 2,
    name: "Hadar",
    country: "Israel",
  },
  {
    id: 3,
    name: "Shu",
    country: "Israel",
  },
];

const ids = pepole.map((pepole) => pepole.id);
console.log(ids);

const names = pepole.map((names) => `<div>${names.name}</div>`);
console.log(names);
document.write(names);

//--------------------------------//
// Promises and Async Programming //
//--------------------------------//

//
// on async.html
//

//---------//
// Modules //
//---------//

import { firstPerson, age2 } from "./moudleExport.js";
//on script HTML i need tp also type : type="module"
console.log(`My name is ${firstPerson} and my age is ${age2}`);

//import defaults
import lastname from "./moudleExport.js";
console.log(`My last name is ${lastname} and my age is ${age2}`);
