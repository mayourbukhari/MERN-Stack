//fetch: Using the Fetch API to make HTTP requests(put, get, post, delete)
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  //await keyword: Used to wait for a Promise to resolve
async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}
fetchData()  