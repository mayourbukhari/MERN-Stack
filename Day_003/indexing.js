//indexing,slicing, includes
let username = "MohsinBukahri";
let firstName = username.slice(0, 6); 
let lastName = username.slice(6, 13);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log(username.includes("Moh"));
console.log(username.split("Bukahri"));
console.log(username.indexOf("Bukahri"));