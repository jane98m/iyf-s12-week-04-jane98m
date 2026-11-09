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
// Exercise 2

function calculateArea(width, height) {
  let area = width * height;
  return area;
}

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getInitials(fullName) {
  let names = fullName.split(" ");
  let firstName = names[0];
  let secondName = names[1];
  return firstName[0] + secondName[0];
}

function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log("Area:", calculateArea(5, 4));
console.log("Temp:", celsiusToFahrenheit(25));
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));
console.log("Initials:", getInitials("Amina Otieno"));
console.log("Reverse:", reverseString("Jane"));

// Exercise 3

function calculateTip(bill, tipPercent = 15) {
  let tip = bill * tipPercent / 100;
  return tip;
}

console.log("Tip:", calculateTip(1000));
console.log("Tip 20%:", calculateTip(1000, 20));
// Exercise 4 - Control Flow

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade for 95:", getGrade(95));
console.log("Grade for 85:", getGrade(85));
console.log("Grade for 75:", getGrade(75));
console.log("Grade for 65:", getGrade(65));
console.log("Grade for 40:", getGrade(40));
// Exercise 5 - Switch
// this returns the day name using a number

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log("Day 0 is:", getDayName(0));
console.log("Day 3 is:", getDayName(3));
console.log("Day 5 is:", getDayName(5));
console.log("Day 7 is:", getDayName(7));

// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];

const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();// Mini-Project: Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));

console.log(calculate(10, "/", 5));      
console.log(calculate(10, "/", 0));
// Exercise 4

let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 75 },
  { name: "Charlie", grade: 85 }
];let total = students[0].grade + students[1].grade + students[2].grade;
let average = total / 3;

console.log("Average:", average);
console.log("Top student:", students[0].name);
console.log("All students:", JSON.stringify(students));


// Exercise 1 - Object Basics - About Me
const person = {
  firstName: "Jane",
  lastName: "Marietta",
  age: 20,
  isStudent: true,
  hobbies: ["reading", "coding", "football"],
  address: {
    city: "Nairobi",
    country: "Kenya"
  }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 21;
person.phone = "0712 345 678";
delete person.isStudent;

console.log(person);
