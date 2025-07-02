import express from "express"; //import express package

const app = express(); //creating an instance of express app

app.use(express.json());

//running the server on port 3000
app.listen(3001, function () {
  console.log("server running at localhost:3001");
});

let arr = [1, 2, 3, 4, 5];
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

app.put("/",async function (req,res){
    
})