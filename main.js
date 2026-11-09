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
let a = 12;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
count--;
console.log(count);
// Task 7.2 - Exercise 2: String Operations
let firstName2 = "Amina";
let lastName2 = "Otieno";

// Concatenation
let fullName2 = firstName2 + " " + lastName2;

// Template literals (preferred)
let greeting2 = `Hello, ${firstName2}!`;
let message2 = `${firstName2} has ${firstName2.length} letters.`;

// String methods
console.log(fullName2.toUpperCase());
console.log(fullName2.toLowerCase());
console.log(firstName2.charAt(0));
console.log(fullName2.includes("Amina"));
console.log(greeting2);
console.log(message2);
// Comparison
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

// Logical
console.log(true && true);
console.log(true || false);
console.log(!true);
// Challenge: Calculate and display
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2026 - age + 100;

console.log("My age in days:", ageInDays);
console.log("My age in hours:", ageInHours);
console.log("Year I'll turn 100:", yearTurn100);
// Task 7.3: Functions
// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Jane"));
console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 6));
console.log("Divide:", divide(10, 2));
console.log("Divide by zero:", divide(10, 0));
