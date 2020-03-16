import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function LoginScreen() {
  let history = useHistory();
  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: silver;
    border-color: black;
    font-size: medium;
  `;

  const Input = styled.input`
    border-color: black;
    background-color: silver;
    width: 250px;
    height: 50px;
    text-align: center;
    font-size: medium;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 60%;
  `;

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
    <Form className="loginScreen">
      <Input
        className="inputName"
        placeholder="Enter User Name"
        onChange={event => {
          setLoginName(event.target.value);
        }}
      ></Input>
      <Input
        className="inputPassword"
        placeholder="Enter Password"
        onChange={event => {
          setLoginPassword(event.target.value);
        }}
      ></Input>
      <Button className="loginButton" onClick={HandleLoginClick}>
        Login
      </Button>
    </Form>
  );
}

export default LoginScreen;
