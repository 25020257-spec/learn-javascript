const nums = [0, 1, 2, 3]
const map_nums = nums.map(n => n * 2)
console.log(nums)
console.log(map_nums)
//
const letters = ['a', 'b', 'c']
const result = letters.map((ch, i) => `${i}-${ch}`)
console.log(result)
//
const users = [{ name: "An", age: 20 }, { name: 'Bình', age: 25 }, { name: 'Chi', age: 30 }]
const names = users.map(u => u.name)
console.log(names)
const ueserss = users.map(u => ({ ...u, isAdult: u.age >= 25 }))
console.log(ueserss)
//
const a = [1, 2, 3].map(n => n * 2)
const b = [1, 2, 3].forEach(n => n * 2)
console.log(a, b)
//
const c = ["1", "2", "3"].map(n => parseInt(n))
console.log(c)
//
const newList = users.filter((element) => { return element.age >= 25 }).map(u => u.name.toUpperCase())
console.log(newList)
//Nâng caoooooo
//Bài1
const userser = [{ name: "An", age: 20 },
{ name: "Bình", age: 25 },
];
const html = userser.filter((element) => { return element && element.name }).map(u => `<li>${u.name}(${u.age})</li>`).join("")
document.querySelector("#list").innerHTML = html;
//Bài2
const htmll = userser.map(u => (`<li class="${u.age >= 25 ? "adult" : "young"}">
    ${u.name}${u.age >= 25 ? "✅" : ""}
    </li>`)).join("")
document.querySelector("#list").innerHTML = htmll
//Bài3:map lồng map
const post = [
    { title: "JS cơ bản", tags: ["js", "newbie"] },
    { title: "Học map", tags: ["js", "array"] },
];
const html1 = post.map(p => `
    <article>
    <h3>${p.title}</h3>
    <ol>${p.tags.map(t => `<li>${t}</li>`).join("")}</ol>
    </article>
    `).join("")
document.querySelector("#list").innerHTML = html1

