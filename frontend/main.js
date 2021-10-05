window.addEventListener('DOMContentLoaded', () => {
    main_function();
});

function main_function() {
    redirecting_pgLogin();
}

//redirecting to login page
function redirecting_pgLogin() {
    const loginBtn = document.querySelector('.login button');

    loginBtn.addEventListener('click', () => {
        window.location.href = "http://127.0.0.1:5500/loginApp/login.html";
    });
};