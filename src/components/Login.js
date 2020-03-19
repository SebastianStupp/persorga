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
  let [IsLoading, setIsLoading] = React.useState(false);
  let loading = IsLoading ? "Loading..." : "Login";

  async function handleLoginClick(event) {
    event.preventDefault();

    setIsLoading(true);

    const result = await LoginApi();
    setIsLoading(false);
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
      <Form onSubmit={handleLoginClick}>
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
        <Button disabled={IsLoading}>{loading}</Button>
      </Form>
    </>
  );
}

export default LoginScreen;
