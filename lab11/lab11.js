async function fresh() {
    const res = await fetch('http://localhost:8000/users')
    const result = await res.json()
    console.log("fresh data", result)
    const tbody = document.querySelector('#users tbody')
    if (result && result.length) {
        result.forEach((t, index) => {
            tbody.innerHTML += `<tr>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td>${t.email}</td>
            </tr>`
        })
    }
}
fresh()
