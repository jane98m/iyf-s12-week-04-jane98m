 // week 04 js practice
 // jane

 let name = "Jane";
 let age = 20;
 let isStudent = true;
let favoriteColors = ["pink", "blue", "black"];
let today = new Date();
console.log("My favorite colors:", favoriteColors);
console.log("Today is:", today);

 console.log("My name is:", name);
 console.log("My age is:", age);
 console.log("Am i a student:", isStudent);

 let num1 = 10;
 let num2 = 5;

 console.log("Sum:", num1 + num2);
 console.log("Difference:", num1 - num2);
 console.log("Product:", num1 * num2);
 console.log("Division:", num1 / num2);

 function greet(userName) {
   return "Hello " + userName + "!";
 }

 console.log(greet("Jane"));
 console.log(greet("Class"));
let firstName = "Jane";
let lastName = "Marietta";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Jane"));
console.log(greeting);  
console.log(message);
