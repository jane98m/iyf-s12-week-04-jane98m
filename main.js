// week 04 js practice
// jane

let name = "Jane";
let age = 20;
let isStudent = true;

console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am i a student:", isStudent);

let num1 = 10;
let num2 = "5"; // MISTAKE 1 - niliweka "5" kama text badala ya number, so Sum itakuwa 105 badala ya 15

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Divison:", num1 / num2); // MISTAKE 2 - niliandika Divison badala ya Division

function greet(userName) {
  return "Hello " + userName + "!";
}

console.log(greet("Jane"));
console.log(greet("Class"));
