/// This code implements a simple calculator with functions for addition, subtraction, multiplication, and division.
// It also includes a calculate higher order function that takes two numbers and an operation as input, performing the
// specified operation and returning the result.
// It demonstrates the use of functions, switch statements, and basic arithmetic operations in JavaScript.
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) { 
    return a * b;
}
function division(a, b) {
    return a / b;
}   
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return addition(a, b);
        case 'subtract':
            return subtraction(a, b);
        case 'multiply':
            return multiplication(a, b);
        case 'divide':
            return division(a, b);
        default:
            return "Invalid operation";
    }
}
// Example:
console.log(calculate(10, 5, 'add')); 
console.log(calculate(10, 5, 'subtract')); 
console.log(calculate(10, 5, 'multiply')); 
console.log(calculate(10, 5, 'divide')); 


