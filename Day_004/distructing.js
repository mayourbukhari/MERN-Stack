//Distructing an object
// Destructuring is a convenient way to extract values from objects and arrays into distinct variables.
// It allows you to unpack values from arrays or properties from objects into distinct variables.
// This can make your code cleaner and more readable, especially when dealing with complex data structures. 

const person = {
    name: "Mohsin",
    age: 25,
    city: "LPU",
    subjects: ["Math", "Science", "English"],
    address: {
        street: "basement 108 block 34 ",
        city: "LPU",
        state: "Punjab",
        country: "India"
    },
};
const {name, age, city, subjects, address} = person; // Destructuring the object
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Subjects:", subjects.join(", ")); // Joining array elements into a string
console.log("Address:", address.street, address.city, address.state, address.country);


let nums = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let res = [...nums, ...nums2]; // Using the spread operator to concatenate two arrays
// const [a,b,...rest] = nums; // Destructuring the array
console.log(res); // Concatenating two arrays using the + operator
// This will not work as expected because it converts the arrays to strings and concatenates them.
// To concatenate two arrays, you can use the concat() method or the spread operator.