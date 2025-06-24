//objects 
// objects are a collection of key-value pairs
// json is a data format that is used to represent objects (methods of json  )
// In JavaScript, objects are used to store data in a structured way.
// An object is a collection of properties, where each property is defined as a key-value pair.
// The key is a string that represents the property name, and the value can be any data type, including other objects, arrays, or functions.
// Objects are used to represent real-world entities and their attributes.
// They can be created using object literals, constructor functions, or the Object.create() method
let student = {
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
// Accessing object properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.city); 
console.log("Subjects:", student.subjects.join(", ")); // Joining array elements into a string
console.log("Address:", student.address.street, student.address.city, student.address.state, student.address.country);