import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { LoginApi } from "../api/LoginApi";

const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: silver;
  border-color: black;
  font-size: medium;
`;

const ButtonTheme = styled.button`
  width: 150px;
  height: 50px;
  background-color: silver;
  font-size: medium;
`;

const InputName = styled.input`
  border-color: black;
  background-color: silver;
  width: 250px;
  height: 50px;
  text-align: center;
  font-size: medium;
`;

const InputPassword = styled.input`
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

function LoginScreen({ onSwitchColorButtonClick }) {
  let history = useHistory();
  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  async function HandleLoginClick(event) {
    event.preventDefault();

    // const memberList = await fetch("http://localhost:4000/member");
    // const response = await memberList.json();

    const result = await LoginApi();
    console.log(result);
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
    <>
      <ButtonTheme onClick={onSwitchColorButtonClick}>Switch Theme</ButtonTheme>
      <Form onSubmit={HandleLoginClick}>
        <InputName
          placeholder="Enter User Name"
          onChange={event => {
            setLoginName(event.target.value);
          }}
        ></InputName>
        <InputPassword
          placeholder="Enter Password"
          onChange={event => {
            setLoginPassword(event.target.value);
          }}
        ></InputPassword>
        <Button>Login</Button>
      </Form>
    </>
  );
}

export default LoginScreen;
