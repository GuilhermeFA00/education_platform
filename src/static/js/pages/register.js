import page from './page.js'

export default class extends page {
    constructor(params) {
        super(params);
        this.setTitle('Register');
    }

    async getHtml() {
        return `
        <div class="main-container">
            <div class="form-container">
                <form class="form">
                    <div class="form-title">
                        Cadastre-se
                    </div>
                    <div class="form-subtitle">
                        Preencha seus dados para se cadastrar na ingate
                    </div>
                    <div class="form-input-name">
                        Digite seu nome
                        <div>
                            <input id="input-name" type="text" placeholder="Nome" autocomplete="off">
                            <small></small>
                        </div>
                    </div>
                    <div class="form-input-user">
                        Digite seu nome de usuário
                        <div>
                            <input id="input-user" type="text" placeholder="Usuário" autocomplete="off">
                            <small></small>
                        </div>
                    </div>
                    <div class="form-input-email">
                        Digite seu email
                        <div>
                            <input id="input-email" type="text" placeholder="Email" autocomplete="off">
                            <small></small>
                        </div>
                    </div>
                    <div class="form-input-password">
                        Digite sua senha
                        <div>
                            <input id="input-password" type="text" placeholder="Senha" autocomplete="off">
                            <small></small>
                        </div>
                    </div>
                    <div class="form-input-confirmpass">
                        Confirme sua senha
                        <div>
                            <input id="input-confirmpass" type="text" placeholder="Senha" autocomplete="off">
                            <small></small>
                        </div>
                    </div>
                    <div class="checkbox-request">
                        <div>
                            <label class="login-checkbox">
                                <span class="checkbox">
                                    <input type="checkbox" class="input-checkbox" value="unchecked">
                                    <span class="checkbox-action"></span>
                                </span>
                                <span class="checkbox-text">
                                    Concordo com os termos de uso e de privacidade
                                </span>
                                <h3 class="unchecked-box"></h3>
                            </label>
                        </div>
                    </div>
                    <div class="signup">
                        <button>
                            <input type="submit" value="CADASTRE-SE">
                        </button>
                    </div>
                    <div class="already-account">
                        <div>
                            <span>
                                Já tem conta?
                            </span>
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        `
    }

    signup_form() {
        const form = document.querySelector('.form');
        const formName = document.querySelector('#input-name');
        const formUser = document.querySelector('#input-user');
        const formEmail = document.querySelector('#input-email');
        const formPassword = document.querySelector('#input-password');
        const formConfirmpass = document.querySelector('#input-confirmpass');
        const checkbox = document.querySelector('.input-checkbox');

        const isNot_filled = (value) => value === '' ? false : true;

        const isBetween = (length, min, max) => length < min || length > max ? false : true;

        const emailValidation = (email) => {
            const code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return code.test(email);
        };

        function showError(input, msg) {
            const formField = input.parentElement.parentElement;

            const errorMsg = formField.querySelector('small');
            errorMsg.textContent = msg;
        }

        function errorDisable(input) {
            const formField = input.parentElement.parentElement;

            const errorMsg = formField.querySelector('small');
            errorMsg.textContent = '';
        }

        function checkName() {
            let valid = false;
            const min = 6,
                max = 15;
            const name = formName.value.trim();

            if (!isNot_filled(name)) {
                showError(formName, "Digite seu nome");
            } else if (!isBetween(name.length, min, max)) {
                showError(formName, `Sua entrada deve ter no mínimo ${min} caracteres e no máximo ${max} caracteres`);
            }
            else {
                errorDisable(formName);
                valid = true;
            }
            return valid;
        }

        function checkUsername() {
            let valid = false;
            const min = 6,
                max = 15;
            const username = formUser.value.trim();

            let listUser = []

            let userValid = {
                user: ''
            }

            listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

            listUser.forEach((item) => {
                if (formUser.value == item.userName) {

                    userValid = {
                        user: item.userName
                    }
                }
            });

            if (!isNot_filled(username)) {
                showError(formUser, "Digite seu nome de usuário");
            } else if (!isBetween(username.length, min, max)) {
                showError(formUser, `Sua entrada deve ter no mínimo ${min} caracteres e no máximo ${max} caracteres`);
            } else if (formUser.value == userValid.user) {
                showError(formUser, "Usuário já cadastrado");
            } else {
                errorDisable(formUser);
                valid = true;
            }
            return valid;
        }

        function checkEmail() {
            let valid = false;
            const email = formEmail.value.trim();

            let listUser = []

            let userValid = {
                email: ''
            }

            listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

            listUser.forEach((item) => {
                if (formEmail.value == item.emailUser) {

                    userValid = {
                        email: item.emailUser
                    }
                }
            });

            if (!isNot_filled(email)) {
                showError(formEmail, "Digite seu endereço e-mail");
            } else if (!emailValidation(email)) {
                showError(formEmail, "Enderço inválido");
            } else if (formEmail.value == userValid.email) {
                showError(formEmail, "Email já cadastrado");
            }
            else {
                errorDisable(formEmail);
                valid = true;
            }
            return valid;
        }

        function checkPassword() {
            let valid = false;
            const min = 8,
                max = 16;
            const password = formPassword.value.trim();

            if (!isNot_filled(password)) {
                showError(formPassword, "Digite sua senha");
            } else if (!isBetween(password.length, min, max)) {
                showError(formPassword, "Sua senha deve ter no mínimo 8 caracteres e no máximo 16");
            } else {
                errorDisable(formPassword);
                valid = true;
            }
            return valid;
        }

        function checkConfirmpass() {
            let valid = false;
            const password = formPassword.value.trim();
            const confirmPassword = formConfirmpass.value.trim();

            if (!isNot_filled(confirmPassword)) {
                showError(formConfirmpass, "Confirme sua senha");
            } else if (confirmPassword !== password) {
                showError(formConfirmpass, "As senhas não estão iguais");
            } else {
                errorDisable(formConfirmpass);
                valid = true;
            }
            return valid;
        }

        function checboxConfirmed() {
            let valid = false

            const uncheckedBox_alert = document.querySelector('.unchecked-box');

            if (checkbox.checked) {
                uncheckedBox_alert.textContent = '';
                valid = true;
            } else {
                uncheckedBox_alert.textContent = `Você tem que concordar com os termos de privacidade para
                prosseguir`
                valid = false;
            }
            return valid;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let nameValid = checkName();
            let usernameValid = checkUsername();
            let emailValid = checkEmail();
            let passwordValid = checkPassword();
            let confirmPassword_Valid = checkConfirmpass();
            let checkboxValid = checboxConfirmed();

            let formValid = nameValid && usernameValid && emailValid && passwordValid && confirmPassword_Valid && checkboxValid;

            if (formValid) {
                let listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

                listUser.push(
                    {
                        nameUser: formName.value,
                        userName: formUser.value,
                        emailUser: formEmail.value,
                        passWord: formPassword.value,
                        confirmPass: formConfirmpass.value
                    }
                )

                localStorage.setItem('listUser', JSON.stringify(listUser))

                setTimeout(() => {
                    window.location.href = "";
                }, 3000);
            }
        });
    }
}