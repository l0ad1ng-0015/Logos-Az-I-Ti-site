<footer>
    <div class="columns">
        <div class="column" style="margin-left: 0 !important;">
            <div id="heading">
                <img class="logo" src="/logos/nav-logo.png" alt="Лого" width="41px" height="35px" style="margin-bottom: 5px;"/>
                <h2>Логос "Аз и Ти"</h2>
            </div>
            <ul>
                <li><a href="https://maps.app.goo.gl/uk4FodQeaMtQuz9G6">ж.к. Овча Купел 1 бл. 409 София</a></li>
                <li><a href="tel:+359876860602">+359 876 860 602</a></li>
                <li><a href="mailto:logos-aziti@abv.bg">logos-aziti@abv.bg</a></li>
            </ul>
        </div>
        <div class="column">
            <h2>Бързи връзки</h2>
            <ul>
                <li><a href="/">Начало</a></li>
                <li><a href="/za-nas">За нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </div>
        <div class="column">
            <h2>Полезно</h2>
            <ul>
                <li><a href="#">За вас</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Политика за поверителност</a></li>
                <li><a href="#">Условия за ползване</a></li>
            </ul>
        </div>
        <div class="column">
            <h2>Последвайте ни</h2>
            <div >
                <div id="socials">
                    <a href="https://www.facebook.com/people/%D0%9E%D0%A6-%D0%9B%D0%BE%D0%B3%D0%BE%D1%81-%D0%90%D0%B7-%D0%B8-%D0%A2%D0%B8/61564854236122/" target="_blank">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a93d3d">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#1877F2CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M15 2H18V6H16C14.8954 6 14 6.89543 14 8V10H18L16.9565 14H13.8261V22H9.65217V14H6V10.0396H10V7C10 4.23858 12.2386 2 15 2Z" stroke="#1877F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/logosaziti/" target="_blank">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12.0001" r="4.44444" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M18 6.0217V6" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                    </a>
                </div>
                <button id="green-button">
                    <a href="#">Свържете се с нас</a>
                </button>
            </div>
        </div>
    </div>

    <div id="copy" style="width: 100%; max-width: 1000px; margin-top: 20px; text-align: center; border-top: 1px solid #cccccc6d; padding-top: 11px;">
        <p>&copy; 2025 ОЦ "Логос - Аз и Ти". Всички права запазени.</p>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        align-self: center;
        background-color: var(--orange-light);
        padding: 20px 0;
        zoom: 0.9;
    }
    
    .columns {
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 1300px;
    }
    
    .column {
        margin: 0 0 0 20px;
    }
    
    .column h2 {
        font-size: 1.5em;
        color: var(--green-dark);
    }

    .column ul {
        list-style: none;
        padding-left: 0 !important;
        margin-top: 0 !important;
    }

    .column ul li {
        margin: 7px 0;
        color: black;
    }

    .column ul li a {
        font-size: 1.3em;
        text-decoration: none;
        color: var(--green-dark);
        transition: color 0.3s ease;
    }

    .column ul li a:hover {
        color: var(--green-light);
    }

    #socials {
        display: flex;
        gap: 15px;
    }

    #heading {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    #green-button {
        background-color: var(--green-button);
        border: none;
        border-radius: 10px;
        margin-top: 20px;
        padding: 9px 30px;
        font-size: 1em;
        color: #fff;
        cursor: pointer;
        box-shadow: 2px 3px #88888884;
    }

    #green-button:hover {
        background-color: var(--green-button-hover);
        transition: 0.5s;
        box-shadow: 4px 6px #888888b1;
    }

    #green-button a {
        text-decoration: none;
        color: black;
    }

    #copy {
        font-size: 1.2rem;
        font-family: "ABeeZee", sans-serif;
    }

    @media screen and (max-width: 955px) {
        .column {
            margin: 0 0 0 10px;
        }

        .column h2 {
            font-size: 1.3em;
        }

        .column ul li a {
            font-size: 1.1em;
        }
    }

    @media screen and (max-width: 755px) {
        footer {
            font-size: larger;
            padding-top: 30px;
            padding-left: 20px;
            max-width: 1000px;
        }
        .columns {
            flex-direction: column;
            align-items: center;
        }

        .column {
            width: 100%;
            margin: 10px 0;
            margin-top: 0 !important;
        }

        .column h2 {
            margin-top: 0;
            margin-bottom: 0;
        }

        .column ul {
            margin-top: 15px !important;
        }

        #socials {
            margin-top: 20px;
        }

        #green-button {
            padding: 10px 25px;
        }

        #copy p {
            margin: 20px;
        }
    }
</style>