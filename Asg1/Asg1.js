
const submitBtn = document.getElementById("submitBtn")
const inputValue = document.getElementById("input")
const backBtn = document.getElementById("backBtn")
const hello = document.querySelector("#users tbody")
if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        let listToDo = JSON.parse(localStorage.getItem('todo')) || []
        let textInput = inputValue.value
        listToDo.push({ id: Math.floor(Math.random() * 100000000000), name: textInput })

        localStorage.setItem("todo", JSON.stringify(listToDo))
        window.location.href = "todo.html"
    })
}
if (backBtn) { backBtn.addEventListener("click", () => { window.location.href = 'Asg1.html' }) }
function table() {
    const data = localStorage.getItem('todo')
    const json = JSON.parse(data) || [];
    hello.innerHTML = "";
    json.forEach((t, index) => {
        hello.innerHTML += `<tr>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td><button class="DeleteBtn" id="${t.id}">Xóa</button></td>
            </tr>`

    })
}
table()
hello.addEventListener('click', (event) => {
    if (event.target.classList.contains('DeleteBtn')) {
        const data = localStorage.getItem('todo')
        const json = JSON.parse(data) || []
        const Tid = event.target.getAttribute("id")
        const myList = json.filter((element) => { return element.id != Tid })
        localStorage.setItem('todo', JSON.stringify(myList))
        table()

    }
})
