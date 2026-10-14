//Bài1:tính tổng [5,10,15,20]
const nums = [5, 10, 15, 20]
const res = nums.reduce((sum, t) => { return sum + t; }, 0)
console.log(res);
//Bài2:tính tổng tiền chi của object
const cart = [
    { name: "Tai nghe", price: 400000 },
    { name: "Chuột", price: 300000 },
];
const res2 = cart.reduce((sum, t) => { return sum + t.price }, 0)
console.log(res2)
//Bài 3: đếm số lần xuất hiện
const arr = ["a", "b", "a", "c", "b", "a"];
const res3 = arr.reduce((acc, t) => {
    acc[t] = (acc[t] || 0) + 1;
    return acc;
}, {})
console.log(res3)