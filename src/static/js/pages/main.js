import page from "./page.js";

export default class extends page {
    constructor(params) {
        super(params);
        this.setTitle('Educa-Teacher');
    }

    async getHtml() {
        return `
        <div class="header">
            <header>
                <ul class="navbar">
                    <li class="logo"><img src="https://ingate.app/img/logo.d9bfd2cf.png" alt=""></li>
                    <li class="login"><button><a href="/login">Login</a></button></li>
                </ul>
            </header>

            <div class="header-content">
                <div class="text-apr">
                    <div class="apr-title">
                        Crie e Gerencie Suas Aulas!
                    </div>
                    <div class="apr-subtitle">
                        Crie facilmente suas aulas diretamente na plataforma e tenha acesso a ferramentas de
                        gerenciamento para acompanhar o progresso dos seus alunos
                    </div>
                    <div class="apr-input">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgB5VTbddNAEB2txL+oIEoH0eEcvkMDjl2BrQqCK4hcQeIKZEMBfqQAnG/gyFRgUQEqINJyZ71OdjdKbGT4IfOhfWruzJ07S/TfWDbLQ/oHJox5OF3mm2z5fUB/0bzdhDMQPv1SC0nruqZe0osLOtI8czFd5BvsRMbhpKpodAyQcFalnqlREg2Q1ZdjaLMA6lr+UCPVw7qiBAgFlpEgkan6zL516Q/NzoDkNgNJEWiZoA4fMJ/qw0j4/uzTMs9Qr4haAXgqYvI8ccIjc9+/iAfI5pQLv8VWtG0+3+ZXdIC5GRTqK+Vbc1cDxQZtVEtKD5G1pSJOnaPDtOh34tPnfsoWeSo8eszgBVm7AI+9ABAcriqq76gSc/xcPglGUAoPfcPZE1l7LqLbC8ZFBltQVa2S3vv1A9Ay7wpJ18Y/BVQ4SjrvJrwQ1OCpyWr+SIH36o19UN2XRv+w4Y4IG905FJVQzFxWdId5I0W+TxnunD9sShqjFql5N7DD0WmiaKwaajAOIgjoEir6KFW0SrorueV+5d53AO5D3vI8K2XTeRcZXsN5pLcKSHcIx3N6xmwAX5zxAL4L2/HXc98Prgw6SoCMcfHGpe5lAI7M40arf+qIQ/DMjpkOfUXRkRz6wgZ2Av4JupjbdD29zS/hLd3xrJtp2MTzwQAIXTnDo5bB4U5qJSgbJRfxDbUwqw8Q7Zme7qIe80OXdNo5Z3Nluld2rQFQUI5+r+xaA2jn8T7ZvT77DVUZGEX4wXJSAAAAAElFTkSuQmCC"
                            alt="">
                        <input class="input-text-1" type="text" placeholder="Entre com seu email">
                        <div class="apr-div-button">
                            <button class="apr-button" type="button">
                                <span>Comece agora</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgBzZGxDcAgDAQ/mcSjZYVMkIzCRozAKA8WLigowBRwkuXC/pdfBgYg+WjBSxEnVj54sAt4psml+UoX+HhvrCEzyxpBmo+EGe1GsRlEt9gMfq3eLAP9rYEnD8RTNgAAAABJRU5ErkJggg=="
                                    alt="">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="appealing-image1">
                    <img src="https://ingate.com.br/img/s1_right_pt_br.7cc921cc.png" alt="">
                </div>
            </div>
        </div>

        <div class="main-1">
            <h2 class="main1-title">Cadastre-se para receber as novidades</h2>
            <p class="main1-text">Ao se cadastrar, vai receber as ??ltimas atualiza????es da plataforma.</p>
            <div class="main1-form">
                <input class="main1-form-input" type="text" placeholder="Entre com seu email">
                <div class="main1-signup">
                    <button class="main1-button" type="button">
                        Cadastre-se
                    </button>
                </div>
            </div>
        </div>

        <div class="main-2">
            <div class="main2-part1">
                <img src="https://ingate.com.br/img/s3_left_pt_br.2612b211.png" alt="">
            </div>
            <div class="main2-part2">
                <img src="https://ingate.com.br/img/s3_right_pt_br.9fede65f.png" alt="">
            </div>
        </div>

        <div class="main-3">
            <div class="main3-title">
                Ferramentas
            </div>
            <div class="main3-imgWrapper">
                <div class="main3-img"><img src="" alt="">
                </div>
                <div class="main3-img"><img src="" alt=""></div>
                <div class="main3-img"><img src="" alt=""></div>
                <div class="main3-img"><img src="" alt=""></div>
                <div class="main3-img"><img src="" alt=""></div>
                <div class="main3-img"><img src="" alt=""></div>
            </div>
        </div>

        <div class="footer">
            <div class="footer-sideL">
                <img class="logo2" src="https://ingate.app/img/logo.d9bfd2cf.png" alt="">
                <div class="footer-socialM">
                    <div class="instagram-container">
                        <div class="instagram">
                            <!--This account does not belong to me, it is on account of Mr. Yoannes Geisller and his current team.-->
                            <a href="https://instagram.com/ingate.educa">
                                <img class="insta-icon"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAROSURBVHgBxVl/VhoxEJ4EafW1fc+9wXoC9QTFE7Q9QdsT6A2qJ6j2AuoJqhcoeIGqFyjr/7XhVZA+wiadSbJhWYHNgujnC8JsfnzMTJKZgcGcEHeyATW9CcAaoPUWaLYODNbNQw0dfJ9QU6m65sBb0Zt6C+YAq9JZCL0Oq8NdSGHPkwlfKsGXFgxqB1Fk3oeNCulkiL0cfkHN7I2kOlEazrmCK6ijdlahEzHWMf019u/JGBSPFVcNzuAdLhXnlj2pSnQ6ufvBruhKIXpS2zY8NuatOk93sHXbHZzk5mmL/vAjLAJxL7/6CbuyKfo6hgUh+v14jCiuAVVBJsWBTUdM4Lffg0cGzYnzZ5a5NG4UPJgGZGZA08CSQNoUvUHbabIZNsiblXxkcZOWrjdOcra5f3cHn7xZn4BcBrJSZu7b+3+T3QkZjb7JEnyuDM4ntSE6yR9HO2t4DM8EvzGLprbac9v+CU1bhPVHx8NpkdOLqtf2bRd2Eq2Vn+4abwpsX7A1seHFMRXC9Qk6kKO1Nbyd9Knh9CLnZjnfCzpScMFLXR00pvSso1sq88WCYNiGAOAinyqQEnpcw/sha3iFITe861WDhEqrcwjDLHMl2Dq5zweMscjJy8Z6KAWGi2LpFkds0od6nYed5ACT3KCFbRvJbDhCG9jOsL0ljeP/2PWLIQBaY4SEwLkaHEMoMyiV6gbCUPSjM5xoh+RI5pgavUfZB9e38rFVq6ctQxBqm8w54zoMViKMzzplg8mRCqINsEQuC3Ii3SnKkXhpDGqOmBdDYcZn5w4EorgJnOxkwgY5ds/aeWHoOhkvDouhVOMAVVODcTyGibfBkmhOkNN8Y8dXVROv4JI4CWZkq2aREI0U8ZU2CfImQrtOdoqyK5R9h3lQx3zGpksJmpiZLZ3K4Dyj+CUajkgHSX2mRu9RRhp9D3MgxWSL/mtQN1zp9II+MA6hkfPVBBkRabtbg0xKO7cROPYBGLOXh8aMkXNdM4M44+8gDBcznpGbxDOel95WGA8A52C4UMJvhVnyEpBOahvJLC9YsNG1jw1suKXUkXnKWeldyWxyTocwjQkxWYLtgMa4sdPJiT4o8MWBVu4BppmjQDGGZ8KkwNlokM4/jCCsFl8+T8iPFYzZgbPT4uzMalnk0LSmxGJ979fUtGMss1piwv6AnOhvZPWfv2X1mts7eegT9yX7oxADS86nHIF1Gp/+LZEk+RwS3PbkevJn+GDrj5eZuR/TJ62/SYYE93xZryt/CF2heJRhZG5XF1xAm3gJUHGAGZN6C0kVbNapE5t6jTeDJVphAxlSPWx3cmesLtiVf0JKLGElYMz4VVrb5yx/07CEMkGu8L7kKgFZT7J40tay8V6Wckdx2CyUgDX+HcGrlYOIlcef1Yronii8Ha85z4R2rx1s3+D1ymEIsbkI5kGBBeXUJm21mWGc+xlCADOB8BVn+kKl7HrenyH+A1mpu5C7sTy4AAAAAElFTkSuQmCC"
                                    alt=""></a>
                        </div>
                    </div>
                    <div class="usa-greetings">
                        <h3>us US/GLOBAL - English</h3>
                    </div>
                    <div class="japan-greetings">
                        <h3>jp JAPAN - Japanase</h3>
                    </div>
                    <div class="brazil-greetings">
                        <h3>br BRASIL - Portugu??s</h3>
                    </div>
                </div>
                <div class="footer-copyright">
                    <span>Copyright 2021 Ingate. All Rights Reserved.</span>
                </div>
            </div>
            <div class="footer-sideR">
                <div class="sideR-container">
                    <div class="sideR-right-top">
                        <div class="sideR-company">
                            <a href="/"><span>Empresa</span></a>
                        </div>
                        <div class="about">
                            <a href="https://ingate.com.br/about"><span>Sobre</span></a>
                        </div>
                        <div class="vacant-job">
                            <a href="https://ingate.com.br/jobs"><span>Vagas</span></a>
                        </div>
                    </div>
                    <div class="sideR-right-middle">
                        <a href="https://ingate.com.br/terms"><span>Termos de servi??o</span></a>
                        <a href="https://ingate.com.br/policy"><span>Pol??tica de privacidade</span></a>
                    </div>
                    <div class="sideR-right-foot">
                        <span>Created with ?????? at ???????? & ????????</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}