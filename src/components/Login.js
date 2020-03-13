import React from "react";
import "./Login.css";

function LoginScreen() {
  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  async function handleLoginClick(event) {
    event.preventDefault();

    const memberList = await fetch("http://localhost:4000/member");
    const response = await memberList.json();
    const result = await response;
    console.log(result);
  }

  return (
    <form className="loginScreen">
      <input
        className="inputName"
        placeholder="Enter User Name"
        onChange={event => {
          setLoginName(event.target.value);
        }}
      ></input>
      <input
        className="inputPassword"
        placeholder="Enter Password"
        onChange={event => {
          setLoginPassword(event.target.value);
        }}
      ></input>
      <button className="loginButton" onClick={handleLoginClick}>
        Login
      </button>
    </form>
  );
}

export default LoginScreen;
