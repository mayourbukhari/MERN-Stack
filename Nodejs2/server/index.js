import express from "express"; //import express package

const app = express(); //creating an instance of express app

app.use(express.json());

//running the server on port 3000
app.listen(3001, function () {
  console.log("server running at localhost:3001");
});

// array of objects
let arr = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 }
];
//get api with route /

app.get("/", async function (req, res) {
  //   console.log(req); //req is the request object
  res.json(arr);
});

//post api
app.post("/add", async (req, res) => {
  const { num } = req.body;
  arr.push(num);
  res.json(arr);
});

//put api

app.put("/update/:id", async function (req, res) {
  const { id } = req.params;
  const { num } = req.body;

  arr[id] = num;
  res.json(arr);
});

//delete
app.delete("/delete/:id", async function (req, res) {
  const { id } = req.params;
  arr.splice(id, 1);
  res.json(arr);
});
