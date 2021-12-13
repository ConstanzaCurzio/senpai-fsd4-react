import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // PARA EVITAR QUE EL FORM RESFRESQUE LA PAGINA
    e.preventDefault();

    const user = { email, password };

    const result = axios.post("http://localhost:3000/signup", user);
    // window.localStorage.setItem("app_user", JSON.stringify(user));
  }

  return (
    <>
      <header>SIGNUP IN</header>
      <form onSubmit={handleSubmit}>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button>Log In</button>
      </form>
    </>
  )
};

export default Signup;
