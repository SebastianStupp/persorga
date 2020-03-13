import React from "react";
import "./LoginFailed.css";
import { useHistory } from "react-router-dom";

function LoginFailed() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="loginFailed">
      <h1>Sorry Login Failed 🥺</h1>
      <h2>Please Try Again or Contact Support</h2>

      <button className="buttonBack" onClick={handleClick}>
        Try Again
      </button>
    </div>
  );
}

export default LoginFailed;
