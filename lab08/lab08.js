const input = document.getElementById("name")
const element = document.getElementById("helo")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    alert("thanhcong")
    element.innerText = input.value
    localStorage.setItem("hoidanit", input.value)
})