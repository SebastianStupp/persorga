import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function LoginFailed() {
  let history = useHistory();

  const LoginFailedDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;

  const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: silver;
    font-size: medium;
  `;

  function handleClick() {
    history.push("/");
  }
  return (
    <LoginFailedDiv className="loginFailed">
      <h1>Sorry Login Failed 🥺</h1>
      <h2>Please Try Again or Contact Support</h2>

      <Button className="buttonBack" onClick={handleClick}>
        Try Again
      </Button>
    </LoginFailedDiv>
  );
}

export default LoginFailed;
