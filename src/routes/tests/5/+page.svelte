<script>
  let showAdditionalSection1 = false;
  let showAdditionalSection2 = false;

  function toggleSection1() {
    showAdditionalSection1 = !showAdditionalSection1;
  }
  function toggleSection2() {
    showAdditionalSection2 = !showAdditionalSection2;
  }
</script>

<div class="team">
    <div class="team-container">
        <h2>Нашите специалисти</h2>
        <!-- Sonia Ignatova -->
        <div class="team-content" style="margin-bottom: 5rem;">
            <div class="member-stats">
                <img src="/team/sonia.png" alt="Sonia" class="team-member">
                <h3 class="team-member-name">Соня Игнатова</h3>
                <p class="team-member-role">Логопед, Специален педагог</p>
                <p class="team-member-contacts">example@example.com</p>
                <p class="team-member-contacts">+359 88 888 8888</p>
            </div>
            <div class="member-info">
                <p>Казвам се Соня Игнатова и съм магистър „Логопед“ и „Специален педагог“ с дълогодишен опит. Завършвам магистратура „Специален педагог“ във ВПИ „Неофит Рилски“ ,гр. Благоевград  и магистратура „Езикова и речева патология“ в НБУ.</p>
                <p>Занимавам се с диагностика, консултация и терапия на езиково-говорното развитие, комуникативни нарушения и обучителни затруднения на деца от различни възрастови групи.</p>
                <p>Мотивите, които ме ръководят, в съзнателната си дейност като терапевт, са подчинени на Негово Величество Детето.</p>
                {#if showAdditionalSection1}
                    <p>От 1993 г съм посветила интересите си и дейноста си като специален педагог и логопед на работата с деца със специални образователни потребности в Държавни институции, а от 2007 г. основавам ОЦ „Логос – Аз и Ти“, където се предлагат различни образователни и терапевтични услуги в помощ и грижа на децата.</p>
                    <p>За мен логопедията е призвание -  да чуваш и виждаш невидимото. Тя е път, по който вървим заедно: аз- детето - родител, с доверие, грижа и знание. За мен всеки овладян звук е стъпка, всяка овладяна дума - постижение, всяка усмивка – победа. Вярвам в силата на малките крачки, водещи до голям успех.</p>
                    <p>Съавтор на книгите „Диагностичен албум, предназначен за логопеди, психолози и педагози”, Сборник за деца „Играя и зная“, съавтор на работни листове, организатор на Терапевтилници за деца, посветени на различни тематики, свързани с езиково-говорното, когнитивното и моторното развитие на децата; съавтор на логопедични карти: „Логопедична вдъхновителница“ и други.</p>
                    <button class="more-less" on:click={toggleSection1}>Прочети по-малко</button>
                {:else}
                    <button class="more-less" on:click={toggleSection1}>Прочети повече</button>
                {/if}
                <div class="member-certificates">
                    <h3>Придобити квалификации, обучения, сертификати и участия в семинари, някои от които са:</h3>
                    <ul>
                        <li>“Ремелка “ - методика за обучение по смятане и социална компетентност на деца с обучителни затруднения;</li>
                        <li>“ Орално Моторна терапия в логопедичната практика “– Talk Tools ниво 1;</li>
                        <li> Участие за работа с картинен тест фонологично осъзнаване ;</li>
                        <li> Участие със сертификат в "Орофациална рефлексна интеграция", авторски курс на Mickaël Benoit Graphoréflexes;</li>
                        <li> Участие със сертификат в RMTi Ниво 1 - Фокус, Организация и Разбиране, с лектор Надежда Пейчевска от Brain Change;</li>
                        <li> Участие със сертификат в RMTi Ниво 2 - Емоции, Памет и Поведение, с лектор Надежда Пейчевска от BrainChange;</li>
                        <li>Сертифицирано обучение - Диагностика на говора и нарушенията му в предучилищна възраст: прилагане на Тестова батерия за орални моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;</li>
                        <li>Участие в семинари, организирани от логопед София Вълнеева: „Приобщаване на родителите като помощник-терапевти“, „Логопедът и децата“, „Децата и екраните“ с участие на презентации на тема „Играта – терапевтичен инструмент в логопедичната практика“ , „Децата и екраните – враг или глас? Логопедичен поглед към ДАК“ , научни конференции в областта на Логопедията и образованието.</li>
                    </ul>
                </div>
                <p>Съвместно поддържа страниците във фейсбук – By Соня Игнатова – логопед и специален педагог и ОЦ „Логос – Аз и Ти“ и инстаграм страницата logosaziti.</p>
                <p>С уважение:<br>
                    Соня Игнатова
                </p>
            </div>
        </div>
        <!-- Maria Tuputi -->
        <div class="team-content">
            <div class="member-stats">
                <img src="/team/maria.png" alt="Maria" class="team-member">
                <h3 class="team-member-name">Мария-Паола Тупути</h3>
                <p class="team-member-role">Логопед</p>
                <p class="team-member-contacts">example@example.com</p>
                <p class="team-member-contacts">+359 88 888 8888</p>
            </div>
            <div class="member-info">
                <p>Казвам се Мария-Паола Тупути. Придобивам бакалавърската си степен в Нов Български университет БП „Логопедия“, магистърка степен „Езикова и речева патология“ и квалификационна програма „Ерготерапия в приобщаващото обраование“ към Нов Български университет. </p>
                <p>От две години работя като логопед и ерготерапевт в Образователен център „Логос – Аз и Ти“, където имам възможността ежедневно да подкрепям деца с различни комуникативни, моторни и обучителни затруднения.</p>
                {#if showAdditionalSection1}
                    <p>Избрах тази професия, защото вярвам, че комуникацията е ключът към развитието и свързаността. Да бъда част от пътя на всяко дете към разбиране, изразяване и овладяване на комуникативните, когнитивните и моторните умения е мисия, която изпълнявам с отговорност, отдаденост и вяра в потенциала на всяко дете.</p>
                    <p>Работата ми съчетава логопедичен и ерготерапевтичен подход, като акцентът е върху индивидуалния потенциал и нужди на всяко дете. Стремя се да създавам ангажираща, подкрепяща и стимулираща среда, в която децата да развиват своите умения чрез игра, движение и  комуникация. </p>
                    <p>Съавтор на работни листове, организатор на Терапевтилници за деца, посветени на различни тематики, свързани с езиково-говорното, когнитивното и моторното развитие на децата; съавтор на логопедични карти: „Логопедична вдъхновителница“ и други.</p>
                    <button class="more-less" on:click={toggleSection1}>Прочети по-малко</button>
                {:else}
                    <button class="more-less" on:click={toggleSection1}>Прочети повече</button>
                {/if}
                <div class="member-certificates">
                    <h3>Придобити квалификации, обучения, сертификати и участия в семинари, някои от които са:</h3>
                    <ul>
                        <li>Сертифицирано обучение - Диагностика на говора и нарушенията му в предучилищна възраст: прилагане на Тестова батерия за орални моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;</li>
                        <li>Участие в семинари, организирани от логопед София Вълнеева: „Логопедът и децата“, „Децата и екраните“ с участие на презентации на тема „Играта – терапевтичен инструмент в логопедичната практика“ , „Децата и екраните – враг или глас? Логопедичен поглед към ДАК“ и научни конференции в областта на Логопедията и образованието.</li>
                    </ul>
                </div>
                <p>Съвместно поддържа страницата във фейсбук –ОЦ „Логос – Аз и Ти“ и инстаграм страницата logosaziti.</p>
                <p>С уважение:<br>
                    Мария-Паола Тупути
                </p>
            </div>
        </div>
    </div>
</div>

<style>

/* ---- 3. Team ---- */
    .team {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        width: 100%;
    }

    .team-container {
        width: 90%;
        max-width: 1000px;
    }

    .team-content {
        display: grid;
        grid-template-columns: 270px 1fr;
        gap: 4rem;
        align-items: start;
        background: var(--orange-light);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    /* Member Stats (Left Side) */
    .member-stats {
        /* background: linear-gradient(185deg, #afd683 0%, #ffac71 100%); */
        background: var(--background);
        border: 2px solid var(--orange);
        border-radius: 20px;
        padding: 2.5rem;
        text-align: center;
        position: sticky;
        top: 2rem;
        box-shadow: 0 15px 35px rgba(216, 223, 255, 0.3);
    }

    .team-member:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
    }

    .team-member-name {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .team-member-role {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        opacity: 0.9;
        font-weight: 500;
    }

    .team-member-contacts {
        background: var(--orange-light);
        border-radius: 12px;
        padding: 0.75rem 1rem;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        backdrop-filter: blur(10px);
        border: 1px solid var(--orange);
        transition: all 0.3s ease;
        }

    .team-member-contacts:hover {
        background: var(--orange);
        transform: translateY(-2px);
        border: 1px solid var(--orange-light);
    }

    .member-stats img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    /* Member Info (Right Side) */
    .member-info {
        background: white;
        border: 2px solid var(--orange);
        border-radius: 20px;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .member-info p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #4a5568;
        margin-bottom: 1.5rem;
        text-align: justify;
    }

    .more-less {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--background);
        color: var(--orange);
        border: 1px solid var(--orange);
        padding: 1rem 1.5rem;
        border-radius: 16px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

    .more-less:hover {
        background: var(--orange-light);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 172, 113, 0.3);
    }

    .member-certificates {
        background: linear-gradient(135deg, #fcf9f7 0%, #f7f4ed 100%);
        border-radius: 16px;
        padding: 2rem;
        margin: 2rem 0;
        border-left: 4px solid var(--orange);
    }

    .member-certificates h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 1.5rem;
    }

    .member-certificates ul {
        list-style: none;
        padding: 0;
    }

    .member-certificates li {
        position: relative;
        padding: 1rem 0 1rem 2rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        font-size: 1rem;
        line-height: 1.6;
        color: #4a5568;
    }

    .member-certificates li:last-child {
        border-bottom: none;
    }

    .member-certificates li::before {
        content: '✓';
        position: absolute;
        left: 0;
        top: 1rem;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #ffac71 0%, #f8ac28 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
    }

    /* Smooth animations */
        .member-info {
            animation: slideInRight 0.8s ease-out;
        }

        .member-stats {
            animation: slideInLeft 0.8s ease-out;
        }

        .more-less {
            animation: fadeIn 0.5s ease-in-out;
        }

    @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Hover effects for the entire section */
        .team-content {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-content:hover {
            transform: translateY(-5px);
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.3);
        }


        /* ---- Tablet Styles (max-width: 955px) ---- */
@media screen and (max-width: 955px) {
    .team-container {
        width: 95%;
        max-width: 800px;
    }

    .team-content {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        padding: 2.5rem;
        margin-bottom: 3rem;
    }

    /* Member Stats adjustments for tablet */
    .member-stats {
        position: static;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--background);
        border: 2px solid var(--orange);
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(216, 223, 255, 0.3);
    }

    .member-stats img {
        width: 120px;
        height: 120px;
        margin-bottom: 1rem;
    }

    .team-member-name {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }

    .team-member-role {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .team-member-contacts {
        width: 100%;
        max-width: 280px;
        text-align: center;
        padding: 0.7rem 1rem;
        margin-bottom: 0.7rem;
        font-size: 0.9rem;
    }

    /* Member Info adjustments for tablet */
    .member-info {
        padding: 2rem;
    }

    .member-info p {
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 1.2rem;
    }

    .member-certificates {
        padding: 1.5rem;
        margin: 1.5rem 0;
    }

    .member-certificates h3 {
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
    }

    .member-certificates li {
        padding: 0.8rem 0 0.8rem 1.8rem;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .member-certificates li::before {
        width: 18px;
        height: 18px;
        top: 0.8rem;
        font-size: 0.75rem;
    }

    .more-less {
        padding: 0.9rem 1.3rem;
        font-size: 0.95rem;
    }
}

/* ---- Mobile Styles (max-width: 755px) ---- */
@media screen and (max-width: 755px) {
    .team {
        margin-top: 1.5rem;
    }

    .team-container {
        width: 98%;
        max-width: 100%;
    }

    .team-container h2 {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .team-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 1.5rem;
        margin-bottom: 2.5rem;
        border-radius: 20px;
    }

    /* Member Stats for mobile */
    .member-stats {
        position: static;
        padding: 1.5rem;
        text-align: center;
        border-radius: 16px;
    }

    .member-stats img {
        width: 100px;
        height: 100px;
        margin-bottom: 1rem;
    }

    .team-member-name {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        line-height: 1.3;
    }

    .team-member-role {
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .team-member-contacts {
        width: 100%;
        max-width: 100%;
        padding: 0.6rem 0.8rem;
        margin-bottom: 0.6rem;
        font-size: 0.85rem;
        border-radius: 10px;
    }

    /* Member Info for mobile */
    .member-info {
        padding: 1.5rem;
        border-radius: 16px;
    }

    .member-info p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1rem;
        text-align: left;
    }

    .member-certificates {
        padding: 1.2rem;
        margin: 1.2rem 0;
        border-radius: 12px;
    }

    .member-certificates h3 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .member-certificates ul {
        margin: 0;
    }

    .member-certificates li {
        padding: 0.7rem 0 0.7rem 1.5rem;
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .member-certificates li::before {
        width: 16px;
        height: 16px;
        top: 0.7rem;
        font-size: 0.7rem;
        left: 0;
    }

    .more-less {
        width: 100%;
        justify-content: center;
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
        border-radius: 12px;
        margin: 1rem 0;
    }

    /* Enhanced touch targets for mobile */
    .more-less:hover {
        transform: none;
    }

    .more-less:active {
        transform: scale(0.98);
    }

    .team-member-contacts:active {
        transform: scale(0.98);
    }

    /* Disable complex animations on mobile for better performance */
    .member-info,
    .member-stats {
        animation: none;
    }

    .team-content:hover {
        transform: none;
    }

    .team-member:hover {
        transform: none;
    }
}

/* ---- Extra Small Mobile (max-width: 480px) ---- */
@media screen and (max-width: 480px) {
    .team-container h2 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .team-content {
        padding: 1.2rem;
        gap: 1.2rem;
        margin-bottom: 2rem;
    }

    .member-stats {
        padding: 1.2rem;
    }

    .member-stats img {
        width: 90px;
        height: 90px;
    }

    .team-member-name {
        font-size: 1.1rem;
    }

    .team-member-role {
        font-size: 0.85rem;
    }

    .team-member-contacts {
        font-size: 0.8rem;
        padding: 0.5rem 0.7rem;
    }

    .member-info {
        padding: 1.2rem;
    }

    .member-info p {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .member-certificates {
        padding: 1rem;
    }

    .member-certificates h3 {
        font-size: 1rem;
        line-height: 1.3;
    }

    .member-certificates li {
        font-size: 0.85rem;
        padding: 0.6rem 0 0.6rem 1.3rem;
    }

    .member-certificates li::before {
        width: 14px;
        height: 14px;
        top: 0.6rem;
        font-size: 0.65rem;
    }

    .more-less {
        font-size: 0.85rem;
        padding: 0.7rem 0.8rem;
    }
}
</style>