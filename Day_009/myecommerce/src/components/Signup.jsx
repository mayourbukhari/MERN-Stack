import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (username.length < 5) {
            alert("Username should be more than 5 character");
            return;
        }
        if (password.length < 6) {
            alert("password should be greater than 6 character");
            return;
        }

        let user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/signin");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
                <h1 className="text-3xl font-bold text-blue-500 mb-6">
        MyEcommerce
      </h1>
      <h1 className="text-3xl font-bold text-black mb-6">Signup</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-80 max-w-md">
                <form onSubmit={onFormSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={function (event) {
                            setUserName(event.target.value);
                        }}
                    />
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
                        type="submit"
                        className="w-55 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Signup
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/signin" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
