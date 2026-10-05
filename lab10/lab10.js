const a = 10;
const b = 0;
try {
    if (b === 0) { throw new Error('thuc hien chia cho 0') }
    a / b

} catch (error) { console.log("có lỗi xay ra", error) }
finally { console.log("finiiishhhh") }
//promise
fetch('http://localhost:8000/users')
    .then(res => res.json())
    .then(data => console.log("helo", data))

//async
async function fresh() {
    const res = await fetch('http://localhost:8000/users')
    const result = await res.json()
    console.log("fresh data", result)

}
fresh()