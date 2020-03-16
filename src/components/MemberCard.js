import React from "react";

const Pseudo = async () => {
  const [members, setMembers] = React.useState("");

  const memberList = await fetch("http://localhost:4000/member");
  const response = await memberList.json();
  setMembers(response);

  return (
    <>
      {members.map(member => (
        <li>{member.userName}</li>
      ))}
    </>
  );
};
// {members.map(member => members.userName)}
export default Pseudo;
