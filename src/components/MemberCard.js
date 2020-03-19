import React from "react";
import { getMembers } from "../api/DisplayApi";

function Pseudo() {
  const [members, setMembers] = React.useState([]);
  React.useEffect(() => {
    async function doGetMember() {
      const response = await getMembers();
      setMembers(response);
    }
    doGetMember();
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
