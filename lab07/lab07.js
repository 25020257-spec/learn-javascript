const ElementBtn = document.getElementById('myBtn')
const element = document.getElementById('myText')
const elementBack = document.getElementById('myBtnback')
const elementColor = document.getElementById('myColor')
ElementBtn.addEventListener("click", () => {
    element.innerHTML = "Manh Dep Trai"
})
elementBack.addEventListener("click", () => {
    element.innerText = 'lab07'
    alert("Thieu ton trong")
})
elementColor.addEventListener("click", () => {
    element.style.color = "red"
    element.style.background = "brown"
})