import page from "./page.js";

export default class extends page {
    constructor(params) {
        super(params);
        this.setTitle('Login');
    }

    async getHtml() {
        return `
        <div class="main-container-login">
            <div class="login-page">
                <div class="login-container">
                    <img class="logo" src="https://app.ingate.com.br/img/logo_black.4b6e9c30.png" alt="">
                    <div class="login-box">
                        <div class="login">
                            <form class="login-form">
                                <div class="login-title">
                                    Login
                                </div>
                                <div class="login-subtitle">
                                    Entre com seu email para acessar a plataforma
                                </div>
                                <div class="email-request">
                                    Digite seu email
                                    <input type="text" placeholder="Email" class="email-input">
                                    <small></small>
                                </div>
                                <div class="password-request">
                                    Digite sua senha
                                    <input type="text" placeholder="Senha" class="password-input">
                                    <small></small>
                                </div>
                                <div class="login-confirm">
                                    <button class="login-button">
                                        <input type="submit" value="LOGIN">
                                    </button>
                                </div>
                                <div class="sm-login">
                                    <div class="login-google">
                                        <button class="google-button">
                                            <div class="google-field">
                                                <img class="google-icon"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgBpVRBaBNREJ3ZbEIr2qaRCo0iv5RYWy+KeCqW9GRsFWtvgtAUeq4BPfQgdpubB8HiwYMHK1K9V6k5FBsrIojQii2VgmYFrdBUjRgTTdId5xu37G42EeyD4f95f+btzN/ZRXAB9Qs/FNUBIOU0u4cBQaxmi7zACvsfiGiqfV6/45aLFWK9oXOAeI23LVZeCjqgA5HmFFZsYqdCEyx2zylWBYJjJ98cFzFXQeo9oAHhiGsqQZat6HrkAX+FILcZ5ebHHLEZ5sbhR6EJZ1Z3tc+nfAZSq4LGMMh2GeyPdyR1zZr05w7piS8FjwMCXjaYFelgFHowoetuVa2EhfCB0tWWfDdVWfISRGmZr1faw/o8DYoURYSA/wULPdoSlLYEw7ANqGz7bYwHZt0C91z+2E+IF6A2FqVgp4XIYUf5wp0gD/YhQRhqgahLcVAGbAeIXimoW6idtGCfK8vjc/Bv6FJw0UapEHOLTGvBWEHBVqvxzN2wFQjwCvmtDvJuUhLP8gGIfw1tvMg2HcucTehQA37tk/AZNAfyEzR7AIyibDGFO5ZHPx9sns01e83SjRL2VBN1E5M56/Egf0lHIHP0ffdFi5iEUFSa2z0dGWmcOdlmknU3w6LhVveYqr5ecIjJ6rS/bZcReHDiOi/V5ixXWssrHFwnHeVXJ3g3rliO8ep6vGVU7jwmlb//NlF/PoTgPmte+l5St6pR04AlUVJKQYXAmEjH914yz2xz+KUvoRmEQ0Tuw23FZuPdb7wMpOP7bFOB1RL805EoIp3hgBC7hzbX8uW/ENBz7utpk+q5rQ8lfzrzfgMgLew+DUr/cQAAAABJRU5ErkJggg=="
                                                    alt="">
                                                <span>GOOGLE</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="login-github">
                                        <button class="github-button">
                                            <div class="github-field">
                                                <img class="github-icon"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2lsVFUUvjMWirYUkS5BXApUa2vd6gL+wAWjoP5RiW2EUBajAiqSuPADQ0w1UUQTrcFAUUSJEKriEuMWFKuJIElFSS24YNpQK6WoBbuAktbva880M8O8vnfevJm+CSf5cme599xzvnfffffce17AJFjycnLzUVwDXAgUAucBY4BMIEOqdQIdwJ/Az4J64OvWtoONibQvkACHgyiuBe4CbgLOjVNlE/AZsAmoBSE9viQAjueieBCYC5yVoAvWDKwHqkBEmy8IgON09lHgXmCESY4cBaqBlSCieUgIgOPDUCwBngBOM0MjXdL/CyDiv6QRAOcvR7EBKDL+kD3AbJBQl1AC4DjrLwaeBYYbf8m/ciu+BCJ6PScAzp+K4nXgTuNveQuYAxK6PSMAzo9C8TFwtUkN2Q7cDBIOx02AOP8FUGpSSzgf3GBHQsDGec7unwOTTWrKDiGhS02ATHjvALeb1JZ3gRlWE+MpVq0yMzIekRk/1YWP6o7Ors5vHI8AXH1Odl8BaTbKrwd4j10MTAduS8JqkKvA94BPgN0A56htNm2OMyDDKNhuSwCcT5dIrMBG6S4oLI1qezqKBcBjwGiPHW8HVgCr0W97VL/fobjMpv2vQAnaHgv/MdYVXurAeSNPhggRw56BQatRVgL3A0H5+xDwI8Dw9g/5Hlq+clmdDYwF8iV0zpb/GP2tApZHOx4m2xwQUCC+VVqOABg+AUUDkO6AgHkwaL2DJXORxPVNylUnw+gpXObaLXFRlxHoaw7U8uoXQ99vViNgqUPnKQfsKojhdW7GuxDW5JUtIuni432hH4JhLJ7Dq6qwcZiPZnpNXDJPfI0kQEJbjVM5PiIgW3nhlkQQILH9LGWnV/iIAK0ts8TngREwDchVKrnKRwRobckVnwcIKFcq4ONrkY8IWBT2SHUq5eEE3Khs/CRm6Z1+8V5sqVQ26/M5gHuhSJ79TqUFmIhOj/ppwQ8/Rshqb5yiWXFQFhsaWeU352UU0KaXlc2mBI1+Y3OzjyO/Gm2kSAIKFQ2awfQ+v3oP23gL/K5oUhh0GPiEZG8KxP97FHULgsqwtTUFCDioqHsGCRipaHA8BQjQrAcyg4roj5KVAgSMUtRNDyqVj0wBAlQ2koBuRf3xKUBAvqJuN1eCrYpAiHNAltNjpyFYDfL47oix38wdmDA5AvYr+kjzWRgcLVcqnKfsJwGNyk5u9TEBtyjrNwaVgRClTPKA/Db8aVOZslkDG2nD2vEuOkqGlLmYpHcGJLlJu8LjtvJFgx06Jvnq8xC33gUBeUE4waWjduua5wdVPrr6VS6cr6PvoXv5Ixed3g3mH/fB1V9OW1w07fM5IEouUEZR4bIWWJzsTRJ55r8I3ONSRRFs3hsIU8hkgkkulf0CPAx8qElQcuk4beYp9Epgoks138LOvqSPgfyAzIwMZlnFSobgIegc4H3gH6AkxmKDub9Mjb0DeoYDrZ1dne0eO14AvfPx8RXgAYaycahbBvt+GLgFpIM0md3PjqrMTMxpYKxB6p1v+s/n7bbSuMCqldmZyc+fRh9ND+IsAxrmG3C3qtj0J1uP84hLrnwnwJbjEQRIxzw0XB2jER93C9Bog9TjsRgzLpzuJr0BzHV6e8gwf9XoziqdCv1YE/oSTQBHwfem/3w+5syPxuukLtfdO0zk+WIs+YuPKLQ7ohzyWTIix3joPPMTLg1d/Yg5gIL7ogf32U/4WGGhYDr+34J6bUALPpPA62w6XYMOP9BaCv3HoD/PeJubODN6U/eEq4cKTIurttpBAZ4L+87TmKdtOt0ah8FbPXS+WnyLEKskqUy5FaweM5dA2e6w+pNkZuajhfMD3/zYBfDKb3Y6+cWwgytOL7bh98nQ73BEgHReIvd4Roy/a6Cs3CRYJOnq7zjV8HWcybC33mpLLKZIA84FPRYhcSokUNL2Civnjd0MjoZbUCy0+PtNkDDD5wQsFB8sxWm2+GJZd8eSt4HnZXnZ66Nb4CHYYxuxat4XmI1inbHeczskq77DMrK4z8AgK3+Q/L5EEMBn/PzQos0zAsQgvg5XY3TpNKOTSAD3NsrQX63TBqq9PVHM9NgvfXi/06ZSjfNqAoQEHj9Pled+pw8cpw2co6aKbSoJxDlJnYniKdP/sqSVrrEw7IBL/TnG+rSXEy7fYVoG/S1uffDkzVEYypB1qewJRCdb5rp9yxN6mQDZFmOS2wisCIXo8Yin7w7LiKiQEcFYfhOMnBmnzo1CLIO09Qyt47niJxDQ29trTmY56Qn4X4ABAFR7IoDmVT5NAAAAAElFTkSuQmCC"
                                                    alt="">
                                                <span>GITHUB</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="password-forget">
                                    <a href="#">Esqueceu a senha?</a>
                                </div>
                                <div class="create-account">
                                    <div>
                                        <span>Não tem conta?</span>
                                        <a href="/register">Cadastre-se</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="ad-container">
                    <div class="ad-content">
                        <div>
                            <img src="https://ingate.app/img/logo.d9bfd2cf.png" width="300px" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }

    signin_form() {
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

                alert(userValid.pw);

                if (formEmail.value == userValid.email && formPassword.value == userValid.pw) {
                    window.location.href = '/educa'

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
}