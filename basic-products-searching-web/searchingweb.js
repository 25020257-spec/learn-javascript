const products = [
    { id: 1, name: "Bàn phím", price: 450000, inStock: true },
    { id: 2, name: "Chuột", price: 250000, inStock: false },
    { id: 3, name: "Màn hình", price: 3200000, inStock: true },
];
function render(items) {
    k.hidden = items.length > 0
    ul.replaceChildren(
        ...items
    )
}
const k = document.getElementById("empty")
const input = document.getElementById("search")
const ul = document.getElementById("list")
input.addEventListener("input", () => {
    const items = products.map(d => {
        if (d.name.toLowerCase().includes(input.value.toLowerCase())) {
            const li = document.createElement("li");
            li.textContent = `${d.name}-${d.instock ? "(Còn hàng)" : "(Hết hàng)"}`; // tự động an toàn
            return li;
        }

    }).filter((element) => { return element })
    render(items)
})

