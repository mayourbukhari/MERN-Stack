import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if(user){
        if (user.email===email && user.password===password){
            alert("login successful")          
             navigate("/productList");

        }
        else if(user.email === email && user.password !==password){
            alert("check password")
        }

    }
    else{
        alert("please signup ,no user data found")
    }

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        MyEcommerce
      </h1>
      <h1 className="text-3xl font-bold text-black mb-6">SignIn</h1>
      <form
        onSubmit={onFormSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-4 w-80"
      >
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onPasswordChange}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          SignIn
        </button>
      </form>
      <p className="text-black-300 mt-4">
        Already have an account?{" "}
        <a href="/" className="text-blue-800 hover:underline">
          Signup
        </a>
      </p>
    </div>
  );
}
