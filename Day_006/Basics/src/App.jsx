
import React from "react";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
  return(
    <div className="app">
      <h1 className="heading">Welcome to MERN Basics</h1>
      {arr.map(function(num, index){
        return (
          <p key={index}>
          {num} , {index}
          Mohsin
          </p>
        );
      })}
      <p>This project demonstrates a simple MERN setup with Vite for React.</p>
    </div>
  );
}

export default App;