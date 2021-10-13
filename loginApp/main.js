singnin_form();
function singnin_form() {
    const form = document.querySelector('.login-form');
    const formEmail = document.querySelector('.email-input');
    const formPassword = document.querySelector('.password-input');

    const isNot_filled = (value) => value === '' ? false : true;

    function showError(input, msg) {
        const formField = input.parentElement;

        const errorMsg = formField.querySelector('small');
        errorMsg.textContent = msg;
    }

    function errorDisable(input) {
        const formField = input.parentElement;

        const errorMsg = formField.querySelector('small');
        errorMsg.textContent = '';
    }

    function checkEmail() {
        let valid = false;
        const email = formEmail.value.trim();

        if (!isNot_filled(email)) {
            showError(formEmail, "Digite seu endereço e-mail");
        } else {
            errorDisable(formEmail);
            valid = true;
        }
        return valid;
    }

    function checkPassword() {
        let valid = false;
        const password = formPassword.value.trim();

        if (!isNot_filled(password)) {
            showError(formPassword, "Digite sua senha");
        } else {
            errorDisable(formPassword);
            valid = true;
        }
        return valid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let emailValid = checkEmail();
        let passwordValid = checkPassword();

        let formValid = emailValid && passwordValid;

        if (formValid) {
            window.location.href = 'http://127.0.0.1:5500/loginApp/register.html';
        }
    })
}