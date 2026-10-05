const tbody = document.querySelector('#users tbody')
const save = document.getElementById("saveBtn")
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
async function load() {
    const data = await fetch('http://localhost:8000/blogs')
    const json = await data.json()
    json.forEach((t) => {
        tbody.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${t.id}</td>
                <td>${t.title}</td>
                <td>${t.author}</td>
                <td>${t.content}</td>
                <td><button class="DeleteBtn" id="${t.id}">Xóa</button></td>
            </tr>
        `);
    })
}
load()


tbody.addEventListener("click", async (event) => {
    if (event.target.classList.contains('DeleteBtn')) {
        const response = await fetch('http://localhost:8000/blogs/' + event.target.getAttribute('id'), {
            method: 'DELETE',
        })
        const row = event.target.closest('tr');
        row.remove();
    }
})
save.addEventListener("click", (async () => {
    const rawResponse = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: input1.value, author: input2.value, content: input3.value })
    });

    const newP = await rawResponse.json()
    const Pid = newP.id
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                <td>${Pid}</td>
                <td>${input1.value}</td>
                <td>${input2.value}</td>
                <td>${input3.value}</td>
                <td><button class="DeleteBtn" id="${Pid}">Xóa</button></td>
            `;

    tbody.appendChild(newRow);
    input1.value = "";
    input2.value = "";
    input3.value = "";
}))





