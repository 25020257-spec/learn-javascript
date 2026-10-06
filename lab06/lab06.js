const element = document.getElementById('clBtn')
const count = 0
const handleClickBtn = (message, event) => {
    console.log(message);
    console.log("Thẻ vừa click là:", event.target);
    alert("Bạn vừa nhấn nút!");
};
element.addEventListener("click", (e) => {
    handleClickBtn("Gửi dữ liệu", e);
});
