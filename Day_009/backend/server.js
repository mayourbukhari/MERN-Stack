const express = require("express"); //importing express package
const app = express(); //creating express instance
//create server

//get api -- get request
app.get("/", function (req, res) {
  res.send("welcome to my server");
});

app.listen(3001, function () {
  console.log("http://localhost:3001/");
});
