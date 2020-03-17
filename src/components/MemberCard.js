import React from "react";

function Pseudo() {
  const [members, setMembers] = React.useState([]);
  React.useEffect(() => {
    async function getMembers() {
      const memberList = await fetch("http://localhost:4000/member");
      const response = await memberList.json();
      console.log(response);
      setMembers(response);
    }
    getMembers();
  }, []);

  return (
    <>
      {members.map(member => (
        <li>{member.userName}</li>
      ))}
    </>
  );
}
// {members.map(member => members.userName)}
export default Pseudo;
