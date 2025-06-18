// // Functions

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// function add(a, b) {
//     return a + b;
// }
//     function multiply(a, b) {
//     return a * b;
// }   





// //function expression
// const greeting = function(name) {
//     console.log("Hello, " + name + "!");
// }

// const adding = function(a, b) {
//     return a + b;
// }

// const multiplying = function(a, b) {
//     return a * b;
// }

// Arrow function
// const greet = (name) => {
//     console.log("Hello, " + name + "!");
// }

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