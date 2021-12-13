import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // PARA EVITAR QUE EL FORM RESFRESQUE LA PAGINA
    e.preventDefault();

    const user = { email, password };

    const result = await axios.post("http://localhost:3000/login", user);

    window.localStorage.setItem("app_user", JSON.stringify(result.data));
  }

  return (
    <>
      <header>LOG IN</header>
      <form onSubmit={handleSubmit}>
        <input email="user" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input email="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button>Log In</button>
      </form>
    </>
  )
};

export default Login;
