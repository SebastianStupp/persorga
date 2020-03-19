export async function getMembers() {
  const memberList = await fetch("http://localhost:4000/member");
  const response = await memberList.json();

  return response;
}
