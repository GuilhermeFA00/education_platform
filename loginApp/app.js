window.addEventListener('DOMContentLoaded', () => {
    redirecting_signupPage();

    signUp_form();
});

function redirecting_signupPage() {
    const createAcc = document.querySelector('.create-account a');
    createAcc.addEventListener('click', () => {
        window.location.href = "http://127.0.0.1:5500/loginApp/register.html";
    });
}

function signUp_form() {
    const form = document.querySelector('.signup input');
    const formName = document.querySelector('.form-input-name');
    const formUser = document.querySelector('.form-input-user');
    const formEmail = document.querySelector('.form-input-email');
    const formPassword = document.querySelector('.form-input-password');
    const formConfirmpass = document.querySelector('.form-input-confirmpass');

    function isNot_filled(value) {
        value === '' ? false : true;
    }

    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    function emailValidation(email) {
        const code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return code.test(email);
    }

    function passwordStrong(password) {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    }

    function showError(input, msg) {
        const formBox = input.parentElement;

        const errorMsg = document.querySelector('.small-span');
        errorMsg.textContent = msg;
    }

    function errorDisable(input) {
        const formBox = input.parentElement;

        formBox.classLis.remove('show-error');
    }

    function checkName() {
        let valid = false;
        const min = 3,
            max = 25;
        const name = formName.value.trim();

        if (!isNot_filled(name)) {
            showError(formName, "Digite seu nome");
        } else if (!isBetween(name.length, min, max)) {
            showError(formName, `Username must be between ${min} and ${max} characters.`)
        }
        else {
            errorDisable(formName);
            valid = true;
        }
        return valid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nameValid = checkName();

        let formValid = nameValid;

        if (formValid) {
            window.location.href = "http://127.0.0.1:5500/loginApp/login.html";
        }
    });
}