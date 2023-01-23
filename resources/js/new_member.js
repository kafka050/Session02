const input = document.getElementById("name input")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    console.log("hi")
    const newMember = input.value
    const member = document.createElement("p")
    member.innerText = newMember
    document.querySelector("body").appendChild(member)
})
