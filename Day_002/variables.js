// Declaring a variable with let
let age = 25;

// Declaring a variable with const (cannot be reassigned)
const name = "Syed";

// Declaring a variable with var (older way, not recommended)
var city = "LPU";let greeting = "Hello";
console.log(greeting + ", " + city + "! " + "This is " + name + " and I am " + age + " years old.");
// Reassigning a variable declared with let
greeting = "Namastey";

console.log(greeting + ", " + city + "! " + "This is " + name + " and I am " + age + " years old.");

//Data types

let isStudent = true; // Boolean
let height = 5.9; // Number (float)
let subjects = ["Math", "Science", "English"]; // Array
let student = { name: "Syed", age: 25, city: "LPU" }; // Object
let nullValue = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol
let bigIntValue = BigInt(123456789012345678901234567890); // BigInt

console.log("Is Student: " + isStudent + ", Height: " + height + ", Subjects: " + subjects + ", Student Info: " + JSON.stringify(student) + ", Null Value: " + nullValue + ", Undefined Value: " + undefinedValue);

// Type checking

console.log("Type of age: " + typeof age);  
console.log("Type of name: " + typeof name);

//types of Operators 
// Arithmetic Operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus
let exponent = num1 ** num2; // Exponentiation
console.log("Sum: " + sum + ", Difference: " + difference + ", Product: " + product + ", Quotient: " + quotient + ", Remainder: " + remainder + ", Exponent: " + exponent);


// Comparison Operators
let isEqual = (num1 == num2); // Equality
let isStrictEqual = (num1 === num2); // Strict Equality 
let isNotEqual = (num1 != num2); // Inequality
let isStrictNotEqual = (num1 !== num2); // Strict Inequality
let isGreater = (num1 > num2); // Greater than
let isLess = (num1 < num2); // Less than
let isGreaterOrEqual = (num1 >= num2); // Greater than or equal to
let isLessOrEqual = (num1 <= num2); // Less than or equal to
console.log("Is Equal: " + isEqual + ", Is Strict Equal: " + isStrictEqual + ", Is Not Equal: " + isNotEqual + ", Is Strict Not Equal: " + isStrictNotEqual + ", Is Greater: " + isGreater + ", Is Less: " + isLess + ", Is Greater or Equal: " + isGreaterOrEqual + ", Is Less or Equal: " + isLessOrEqual);


// Logical Operators
let andCondition = (isEqual && isStrictEqual); // Logical AND
let orCondition = (isEqual || isStrictEqual); // Logical OR
let notCondition = !isEqual; // Logical NOT
console.log("AND Condition: " + andCondition + ", OR Condition: " + orCondition + ", NOT Condition: " + notCondition);

//

// Assignment Operators
let assignedValue = 10; // Assignment
let incrementedValue = assignedValue++; // Increment
let decrementedValue = assignedValue--; // Decrement
console.log("Assigned Value: " + assignedValue + ", Incremented Value: " + incrementedValue + ", Decremented Value: " + decrementedValue);


// Bitwise Operators
let bitwiseAnd = num1 & num2; // Bitwise AND
let bitwiseOr = num1 | num2; // Bitwise OR
let bitwiseXor = num1 ^ num2; // Bitwise XOR
let bitwiseNot = ~num1; // Bitwise NOT
console.log("Bitwise And: " + bitwiseAnd + ", Bitwise Or: " + bitwiseOr + ", Bitwise Xor: " + bitwiseXor + ", Bitwise Not: " + bitwiseNot);

// whether even or odd 
let a =4;
if (a % 2 ==0){
    console.log("Even");

}
else{
    console.log("Odd");
}
