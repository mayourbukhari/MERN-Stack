//array methods
// Array methods for Day 3 practice
// It includes methods like array.length, array.push(), array.pop(), array.unshift(), array.shift(), 
// array.slice(), array.splice(), array.indexOf(), array.lastIndexOf(), array.includes(), array.join(), 
// array.concat(), array.reverse(), array.sort(), array.map(), array.filter(), array.reduce(),
// array.forEach(), array.every(), array.some(), array.find(), array.findIndex(), array.toString(), 
// array.valueOf(), array.fill(), array.copyWithin(), array.flat(), array.flatMap(), array.entries(), 
// array.keys(), array.values(), array.toLocaleString(), array.toLocaleLowerCase(), array.toLocaleUpperCase(), 
// array.toReversed(), array.toSorted(), array.toSpliced(), array.toUnshifted(), 
// array.toPopped(), array.toShifted(), array.toSpliced(), array.toSliced(), array.toReversed(), 
// array.toSorted(), array.toUnshifted(), array.toPopped(), array.toShifted(), array.toSpliced()

let fruits = ["apple", "banana", "cherry"];
console.log("Original Array:", fruits);
console.log("Array Length:", fruits.length);
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);
// Adding and removing elements
// push adds an element to the end of the array
fruits.push("date");
console.log("After Push:", fruits);
fruits.pop();
console.log("After Pop:", fruits);
// unshift adds an element to the beginning of the array
fruits.unshift("kiwi");
console.log("After Unshift:", fruits);
// shift removes the first element of the array
fruits.shift();
console.log("After Shift:", fruits);
// Slicing and Splicing
// slice returns a shallow copy of a portion of an array 
// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements
let slicedFruits = fruits.slice(1, 2);
console.log("Sliced Fruits (1, 2):", slicedFruits);
fruits.splice(1, 1, "orange", "grape");
console.log("After Splice (1, 1, 'orange', 'grape'):", fruits);

//joining and concatenating
// join joins all elements of an array into a string
let joinedFruits = fruits.join(", ");
console.log("Joined Fruits:", joinedFruits);

// concat merges two or more arrays
// It does not change the existing arrays, but instead returns a new array
let moreFruits = ["mango", "pineapple"];
let concatenatedFruits = fruits.concat(moreFruits);
console.log("Concatenated Fruits:", concatenatedFruits);

// sorting and reversing
// sort sorts the elements of an array in place and returns the sorted array

let nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b);
console.log("Sorted Numbers:", nums);
fruits.sort();
console.log("Sorted Fruits:", fruits);
// reverse reverses the elements of an array in place
let reversedFruits = fruits.reverse();
console.log("Reversed Fruits:", reversedFruits);

//adding +1 to every element of the array using map method 
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let incrementedNums = nums.map(num => num + 1);
// console.log("Incremented Numbers:", incrementedNums);
let evennums = nums.filter(num => num % 2 === 0);
console.log("Even Numbers:", evennums);