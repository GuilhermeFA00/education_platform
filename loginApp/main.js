singnin_form();
function singnin_form() {
    const form = document.querySelector('.login-button input');
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

    form.addEventListener('click', (e) => {
        e.preventDefault();

        let emailValid = checkEmail();
        let passwordValid = checkPassword();

        let formValid = emailValid && passwordValid;

        if (formValid) {
            let listUser = []

            let userValid = {
                email: '',
                pw: ''
            }

            listUser = JSON.parse(localStorage.getItem('listUser'));

            listUser.forEach((item) => {
                if (formEmail.value == item.emailUser && formPassword.value == item.passWord) {

                    userValid = {
                        email: item.emailUser,
                        pw: item.passWord
                    }

                }
            });

            if (formEmail.value == userValid.email && formPassword.value == userValid.pw) {
                window.location.href = 'http://127.0.0.1:5500/contentPage/index.html'

                let mathRandom = Math.random().toString(16).substr(2)
                let token = mathRandom + mathRandom

                localStorage.setItem('token', token)
                localStorage.setItem('userEnter', JSON.stringify(userValid))
            } else {
                let errorAlert = document.querySelector('.login-subtitle');
                let updateHTML = `
                <h3>Email ou senha inválidos</h3>
                `;

                errorAlert.innerHTML = updateHTML;
            }
        }
    });
}