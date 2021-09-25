
//redirecting to login page
const loginBtn = document.querySelector('.login button');

loginBtn.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:5500/loginApp/login.html";
});