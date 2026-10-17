const products = [{ name: "Tivi", price: 10000000, image: "image/tv.jpg", category: "dientu", discount: 0, rating: 1, stock: 4 }, { name: "Ô Tô", price: 9802243345, image: "image/car.jpg", category: "xe", discount: 30, stock: 2, rating: 5 }, { name: "Robot", price: 10000390, image: "image/robot.jpg", category: 'dientu', discount: 2, rating: 3, stock: 2 }, { name: "Máy tính", price: 10003954200, image: "image/computer.jpg", category: "dientu", discount: 99, stock: 2, rating: 5 }, { name: "Xe đạp", price: 100400, image: "image/xe.jpg", category: "xe", discount: 0, stock: 0, rating: 5 }, { name: "Bim bim", price: 5000, image: "image/bimbim.jpg", category: "Thức ăn", discount: 50, stock: 6, rating: 1 }, { name: "Kem", price: 10000, image: "image/kem.jpg", category: "Thức ăn", discount: 30, stock: 10, rating: 4 }, { name: "Bánh mì", price: 3000, image: "image/bmi.jpg", category: "Thức ăn", discount: 0, stock: 20, rating: 5 }, { name: "Xiên", price: 2000, image: "image/xien.jpg", category: "Thức ăn", discount: 90, stock: 6, rating: 3 }, { name: "Điện thoại", price: 9000000, image: "image/phone.jpg", category: "dientu", discount: 50, stock: 6, rating: 1 }]
function renderProducts(list) {
    const html = list.map((t) => {
        return `<article class="card">
            <img src="${t.image}"
                alt="${t.name}">
                ${t.discount ? `<span class="badge">Giảm ${t.discount.toLocaleString("vi-VN")}%</span>` : ""}

            <h2>${t.name}</h2>
            <div class="btn-box">
                <div class="price">
                 ${t.discount ? `<span class="old-price">${t.price.toLocaleString("vi-VN")}</span>
                    <span class="new-price">${(t.price * (1 - t.discount / 100)).toLocaleString("vi-VN")}</span>` : `<span class="new-price">${(t.price).toLocaleString("vi-VN")}</span>`}
                </div>
                <button class="btn">Thêm vào giỏ</button>
            </div>

        </article>`}).join("");
    document.querySelector(".products").innerHTML = html;
}
renderProducts(products)
const buttons = document.querySelectorAll(".Btn")
buttons.forEach((button) =>
    button.addEventListener("click", () => {
        const filterType = button.dataset.filter;
        if (filterType === "all") {
            renderProducts(products)

        }
        else if (filterType === "sale") {
            renderProducts(products.filter((t) => { return t.discount > 0 }))
        }
        else {
            renderProducts(products.filter((t) => { return t.stock > 0 }))
        }
    }
    ))
const Sorts = document.querySelector("#sort")
Sorts.addEventListener("change", (event) => {
    if (event.target.value === "default") {
        renderProducts(products)
    }
    else if (event.target.value === "price-asc") {
        renderProducts([...products].sort((a, b) => { return (a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100)) }))
    }
    else if (event.target.value === "price-desc") {
        renderProducts([...products].sort((a, b) => { return (a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100) < 0) }))
    }
    else { renderProducts([...products].sort((a, b) => { return -a.rating + b.rating })) }
})







