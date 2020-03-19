export async function LoginApi() {
  const memberList = await fetch("http://localhost:4000/member");
  const response = await memberList.json();

  return response;
}
