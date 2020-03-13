import React from "react";

function MemberList(probs) {
  return (
    <>
      <header className="memberListHeader">
        <button className="buttonMemberList">MemberList</button>
      </header>

      <div className="overviewMemberlist">
        {/* Here will be the Memberoverview */}
      </div>

      <div className="buttonContainer">
        <button className="buttonAddMember">Add Member</button>
        <button className="buttonEditMember">Edit Member</button>
        <button className="buttonDeleteMember">Delete Member</button>
      </div>
    </>
  );
}

export default MemberList;
