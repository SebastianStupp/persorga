export async function AddMember(member) {
  await fetch("http://localhost:4000/member", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(member)
  });

  return member;
}
