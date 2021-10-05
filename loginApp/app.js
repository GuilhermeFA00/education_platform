window.addEventListener('DOMContentLoaded', () => {
    redirecting_signupPage();

});

function redirecting_signupPage() {
    const createAcc = document.querySelector('.create-account a');
    createAcc.addEventListener('click', () => {
        window.location.href = "http://127.0.0.1:5500/loginApp/register.html";
    });
}