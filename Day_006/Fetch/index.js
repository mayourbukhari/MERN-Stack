// let root = document.getElementById("root");

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();

//  let titles = data.map((post) => post.title); // Extracting titles from posts
//   let urls = data.map((post)) => post.url);
  for(let i=0;i<data.length;i++){
    let h1= document.createElement("h1");
    h1.textContent=i+1+" "+data[i].title;
    root.appendChild(h1);
  }
};

fetchData()  


