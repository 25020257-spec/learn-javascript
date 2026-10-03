console.log("1");
console.log("2");
console.log("3");
// bất đồng bộ
console.log("1. Bắt đầu");

const myPromise = new Promise((resolve, reject) => {
    console.log('2. Tác vụ trong Promise bắt đầu chạy');

    setTimeout(() => {
        // Giả sử có lỗi xảy ra (ví dụ: mất kết nối, lỗi dữ liệu...)
        let gapLoi = true;

        if (gapLoi) {
            reject('4. Tác vụ thất bại (Lỗi rồi!)'); // Gọi reject khi có lỗi
        } else {
            resolve('4. Tác vụ hoàn thành');
        }
    }, 2000);
});

// Dùng .catch() để hứng lỗi từ reject truyền về
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error); // Kết quả reject sẽ lọt vào đây
    });

console.log("3. Kết thúc kịch bản chính");
// fetch()
const api = fetch("http://localhost:8000/users")
api.then(api => api.json()).then(data => console.log(data))
