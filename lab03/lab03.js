//object

let product1 = {
    name: 'T-shirt',
    price: '200',
    inStock: true,
}
let product2 = {
    name: 'Laptop',
    price: '400',
    inStock: true,
}
let product3 = {
    name: 'TV',
    price: '500',
    inStock: false,
}
let product4 = {
    name: 'UI',
    price: '205',
    inStock: false,
}
let product5 = {
    name: 'Computer',
    price: '210',
    inStock: true,
}
let product7 = {
    name: 'ioio',
    price: '909',
    inStock: false,
}
let products = [product1, product2, product3, product4, product5]
console.log(product1.name)
product2.price = '567'
console.log(products)
products.push(product7)
products.pop()
products.forEach(function (t, index) { console.log(t.name) })
let newList = products.map(function (t) { return t.price })
let newListt = products.filter(function (t) { return t.inStock === true })
console.log(newList, newListt)