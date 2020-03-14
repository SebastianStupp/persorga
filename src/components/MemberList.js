import React from "react";
import "./MemberList.css";

function MemberList() {
  async function AddHandler() {
    const memberName = prompt("Please Enter User Name");
    const memberPassword = prompt(
      "Please Enter the Password for User: " + memberName
    );
    // event.preventDefault();
    const member = {
      userName: memberName,
      userPassword: memberPassword
    };

    fetch("http://localhost:4000/member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member)
    });
  }

  return (
    <>
      <header className="memberListHeader">PersOrga</header>

      <div className="buttonContainer">
        <button className="buttonAddMember" onClick={AddHandler}>
          Add Member
        </button>
        <button className="buttonEditMember">Edit Member</button>
        <button className="buttonDeleteMember">Delete Member</button>
      </div>
      <div className="overviewMemberlist">
        {/* Here will be the Memberoverview */}
      </div>
    </>
  );
}

export default MemberList;
