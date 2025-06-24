//json objeects
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// It is often used to transmit data between a server and a web application as an alternative to XML.
// JSON is based on a subset of JavaScript, and it is language-independent, meaning it can be used in various programming languages


let jsObject = {    name: "Mohsin",
    age: 25,
};
let jsonString = JSON.stringify(jsObject); // Convert JavaScript object to JSON string
console.log("JSON String:", jsonString); // Output: {"name":"Mohsin","age":25}

let parsedObject = JSON.parse(jsonString); // Convert JSON string back to JavaScript object
console.log("Parsed Object:", parsedObject); // Output: { name: 'Mohsin', age: 25 }
// difference between JSON and JavaScript objects
// 1. JSON is a string representation of data, while JavaScript objects are actual objects
// 2. JSON is used for data interchange, while JavaScript objects are used for data manipulation
// 3. JSON is a subset of JavaScript, meaning it follows a specific syntax
// 4. JSON does not support functions, while JavaScript objects can contain functions as methods
// 5. JSON keys must be strings enclosed in double quotes, while JavaScript object keys can be strings or identifiers without quotes
// 6. JSON is used for data storage and transmission
//    while JavaScript objects are used for data manipulation and representation in code