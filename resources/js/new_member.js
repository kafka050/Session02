const memberList = document.getElementById("memberList")
const input = document.getElementById("name input")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    console.log("Adding member")
    const newMember = input.value
    const member = document.createElement("li")
    member.innerText = newMember
    memberList.appendChild(member)
})
