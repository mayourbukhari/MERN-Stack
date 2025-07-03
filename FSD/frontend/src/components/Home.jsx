import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./google";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    navigate("/weather"); // redirect after login
  };

  return (
    <div>
      <h1>Home Page</h1>
      {!user && <Google onLogin={handleLogin} />}
      {user && <p>Logged in as {user.displayName || user.email}</p>}
    </div>
  );
}
