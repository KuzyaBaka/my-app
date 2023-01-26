import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./SignIn.css";

function SignIn() {
  const [admin, setAdmin] = useState("");
  const [pass, setPass] = useState("");

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleName = (e) => {
    setAdmin(e.target.value);
  };

  return (
    <div className="signin-container">
      <h1>Welcome</h1>
      <div className="input-cont">
        <Input type="text" onChange={handleName} label="Name" />
        <Input type="password" onChange={handlePass} label="Password" />
        <Link to={admin === "admin" && pass === "123" ? "/admin" : "/"}>
          <Button text="SignIn" />
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
