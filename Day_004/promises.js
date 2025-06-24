// promises are a way to handle asynchronous operations in JavaScript.
console.log("start fetching data...");
// let arr=[{name:"Mohsin", age:25, city:"LPU"},{name:"Ali", age:26, city:"LPU"}];
async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data[0].title);
    // console.log(typeof data); // Checking the type of data
    // Accessing the title of the first post
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i].body); // Logging the body of each post`);
    // }
    
    // data.sort((a, b) => a.title.localeCompare(b.title));
    // console.log(data[0].title); // Logging the title of the first post after
    // data.map((post) => {
    //     console.log(post.title); // Logging the title of each post
    // });
   let titles = data.map((post) => post.title); // Extracting titles from posts
   console.log(titles); // Logging the array of titles
   titles.sort().reverse().map((title) => {
       console.log(title); // Logging each title in reverse alphabetical order
   });
   let userinput = prompt("Enter a title to search:"); // Prompting user for input
   const filterposts
}
fetchData()  


// sends a request to the specified URL and waits for the response.
// The response is then converted to JSON format using the .json() method.
// The data is then logged to the console.
// This is a simple example of how to use the Fetch API to make HTTP requests in JavaScript.
// The Fetch API is a modern way to make HTTP requests and is supported in most modern browsers
 