const products = [{ name: "Tivi", price: 10000000, image: "image/tv.jpg", discount: 0 }, { name: "Ô Tô", price: 10000000, image: "image/car.jpg", discount: 30 }, { name: "Robot", price: 10000000, image: "image/robot.jpg", discount: 2 }, { name: "Máy tính", price: 10000000, image: "image/computer.jpg", discount: 99 }, { name: "Xe đạp", price: 10000000, image: "image/xe.jpg", discount: 0 }]

const html = products.map((t) => {
    return `<article class="card">
            <img src=${t.image}
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
document.querySelector(".products").insertAdjacentHTML("beforeend", html);
const res = products.reduce((sum, t) => { return sum + t.price * (1 - t.discount / 100) }, 0);
document.querySelector(".products").insertAdjacentHTML("afterend", `<div class="total"> Tổng tiền: ${Math.round(res).toLocaleString("vi-VN")}đ</div>`);
console.log(res);


