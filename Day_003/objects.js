//objects 
// objects are a collection of key-value pairs
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