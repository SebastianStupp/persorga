import React from "react";
import "./Login.css";

function loginScreen() {
  return (
    <form className="loginScreen">
      <input className="inputName" placeholder="Enter User Name"></input>
      <input className="inputPassword" placeholder="Enter Password"></input>
      <button className="loginButton">Login</button>
    </form>
  );
}

export default loginScreen;
