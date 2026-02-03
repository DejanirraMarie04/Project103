console.log("Variables");

//String
let firstName = "Dejanirra";
//numerical
let myAge = 32;
//boolean
let isStudent = true;
let isGraduated = false;

//display the values
console.log(firstName);
console.log(myAge);
console.log(isStudent);
console.log(isGraduated);

// Mini challenge:
// Create a variable for your last name.
// Create a variable for your height.
// Finally, show each variable separately in the console.
let lastName = "Ramirez Parker";
let myHeight = 5.7;
console.log(lastName);
console.log(myHeight);

//Arithemetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let subs = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(sum);
console.log(subs);
console.log(mult);
console.log(div);

// Cocatenation
//console.log(num1 + " + " + num2 + " = " + sum);
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${subs}`);
console.log(`${num1} * ${num2} = ${mult}`);
console.log(`${num1} / ${num2} = ${div}`); 

//calculate the area of a circle
let radius = 5;
const pi = 3.14;
let area = pi * radius * radius;
console.log(`The area of a circle with radius ${radius} is: ${area}`);

///difference between variable and constant
let variableExample = "I can be changed";
console.log(variableExample);
variableExample = "I have been changed";
console.log(variableExample);
const constantExample = "I cannot be changed";
console.log(constantExample);
//constantExample = "Trying to change"; // This will cause an error

//difference between variable and constant
let aVariable; //create a variable
aVariable = 20;
aVariable = 5;
// create and assign value
let anotherVariable = 30;

console.log(aVariable);

const weekDays = 7;
//weekDays = 9;
console.log(weekDays);