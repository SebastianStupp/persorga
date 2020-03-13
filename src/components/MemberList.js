import React from "react";
import "./MemberList.css";

function MemberList() {
  return (
    <>
      <header className="memberListHeader">
        <button className="buttonMemberList">MemberList</button>
      </header>

      <div className="buttonContainer">
        <button className="buttonAddMember">Add Member</button>
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
