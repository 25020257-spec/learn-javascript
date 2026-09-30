//console...
console.log('info')
console.error('oops my mistake')
console.warn('test warning')
// dùng dấu , thay cho dấu + chuỗi
const name = 'manh'
const age = 25
console.log('name :', name, 'age :', age)
console.log('%cManh Pro', "color:red;font-weight:bold;")
//template string
console.log(`name: ${name}, age:${age}`)
//assignment
const fullname = 'NguyenVanManh'
const birthYear = 2007
const isStudent = true
const today = new Date()
const currentYear = today.getFullYear()
console.log(currentYear - birthYear)
//cau dieu kien
switch (isStudent) {
    case true:
        console.log('hello')
        break;
}
//function
const toan = 10, van = 5, anh = 9
function tenHam() { console.log('handsome boiii') }
function tong(toan, van, anh) { return toan + van + anh }
console.log(tong(toan, van, anh));
// array
let mixed = [42, 'hello', true, null, [1, 2, 3]]
mixed.pop()
mixed.push("head")
mixed.shift("back")
console.log(mixed)
console.log(mixed[0])
mixed.forEach(function (t, index) { console.log(`${t}+${index}`) })
let newList = mixed.map(function (t, index) { return t * 2 })
console.log(newList)


