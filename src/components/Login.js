import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  let history = useHistory();
  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  async function HandleLoginClick(event) {
    event.preventDefault();

    const memberList = await fetch("http://localhost:4000/member");
    const response = await memberList.json();
    const result = response;

    if (
      result.find(
        item =>
          item.userName === loginName && item.userPassword === loginPassword
      )
    ) {
      history.push("/MemberList");
    } else {
      history.push("/LoginFailed");
    }
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
      <button className="loginButton" onClick={HandleLoginClick}>
        Login
      </button>
    </form>
  );
}

export default LoginScreen;
