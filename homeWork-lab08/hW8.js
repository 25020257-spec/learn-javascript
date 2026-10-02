const username = document.getElementById('input')
const password = document.getElementById('password')
const LoginBtn = document.getElementById('Login')
localStorage.setItem("username", "Manh@2007");
localStorage.setItem("password", "123456");
LoginBtn.addEventListener("click", () => {
    if (username.value === localStorage.getItem("username") && password.value == localStorage.getItem("password")) {
        alert('Login successfully')
        window.location.href = "success.html";
    }
    else {
        alert("Wrong password")
        username.style.borderColor = "red"

    }
})