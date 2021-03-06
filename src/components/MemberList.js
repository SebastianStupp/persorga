import React from "react";
import styled from "@emotion/styled";
import Pseudo from "./MemberCard";
import { AddMember } from "../api/AddMemberApi";

function MemberList() {
  const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: silver;
    border: solid black;
    top: 0;
    left: 0;
    height: 50px;
    position: absolute;
    width: 100vw;
    text-align: center;
    font-size: 40px;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: silver;
    border: solid black;
    margin-bottom: 5px;
    min-height: 50px;
    font-size: 25px;
  `;

  const Button = styled.button`
    font-size: 80%;
    border: solid black;
  `;

  const MemberListDiv = styled.div`
    display: flex;
    background-color: silver;
    border: solid black;
    min-width: 320px;
    min-height: 300px;
    width: 60vw;
    padding: 0;
    margin: 0;
    font-size: medium;
  `;

  async function AddHandler() {
    const memberName = prompt("Please Enter User Name");
    const memberPassword = prompt(
      "Please Enter the Password for User: " + memberName
    );
    const member = {
      userName: memberName,
      userPassword: memberPassword
    };

    AddMember(member);
  }

  function DeleteHandler() {}

  return (
    <>
      <Header>PersOrga</Header>

      <ButtonContainer>
        <Button onClick={AddHandler}>Add Member</Button>
        <Button>Edit Member</Button>
        <Button onClick={DeleteHandler}>Delete Member</Button>
      </ButtonContainer>
      <MemberListDiv>
        <Pseudo></Pseudo>
      </MemberListDiv>
    </>
  );
}

export default MemberList;
