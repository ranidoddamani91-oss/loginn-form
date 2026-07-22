const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        errorMsg.textContent = "All fields are required!";
    } else if (username === "admin" && password === "12345") {
        errorMsg.textContent = "";
        alert("Login Successful");
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
});