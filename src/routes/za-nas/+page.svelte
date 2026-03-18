<script>
  export let title = "За нас | Логос – Аз и Ти";
  export let description =
    "Ние сме логопедичен център в София, където с грижа и внимание помагаме на децата да развият своята реч и увереност.";

  let showAdditionalSection1 = false;
  let showAdditionalSection2 = false;
  let showAdditionalSection3 = false;
  let showAdditionalSection4 = false;

  function toggleSection1() {
    showAdditionalSection1 = !showAdditionalSection1;
  }
  function toggleSection2() {
    showAdditionalSection2 = !showAdditionalSection2;
  }
  function toggleSection3() {
    showAdditionalSection3 = !showAdditionalSection3;
  }
  function toggleSection4() {
    showAdditionalSection4 = !showAdditionalSection4;
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедичен кабинет ОЦ Логос, логопедичен кабинет за деца София, нашият екип логопеди, логопедичен опит и квалификация, мисия на логопедичния център, логопедични специалисти за деца, методики за логопедична терапия, ОЦ Логос Аз и ти екип, професионални логопеди София, логопедична грижа за деца, логопедичен опит над 10 години, логопедична помощ и развитие, логопедична подкрепа за родители, обучение и квалификация на логопеди, логопедичен център с индивидуален подход, логопедичен център за цялостно развитие на детето, логопедичен център в Овча купел, детски логопедичен център София, логопедична грижа и внимание, logopedichen centar Sofia, logopedichen ekip Sofia, detski logoped Sofia, logoped Ovtcha kupel"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="За нас" />

  <!-- Open Graph тагове (за Facebook и други) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="За нас" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/za-nas" />
</svelte:head>

<!-- Heading - za nas first one like design -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>За Нас</h1>
      <p>
        Запознайте се с нашия екип, разберете за нашата история и мисия да
        помагаме на децата да открият себе си.
      </p>
    </div>
    <div id="h-right">
      <svg
        class="first-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="110.8419 122.2011 248.1 248.1"
        width="70px"
        height="70px"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
          transform="matrix(1, 0, 0, 1, 106.89191866905466, 118.25107206295286)"
        >
          <g transform="scale(0.5,0.5)">
            <path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            />
            <g>
              <path
                d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
                fill="#ffac71"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.565438, 0, 0, 3.140884, -423.405016, -705.154641)"
                x="177.985"
                y="290.296">A</text
              >
            </g>
            <g>
              <path
                d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
                fill="#eb9783"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.62775, 0, 0, 3.157958, -515.098067, -551.446882)"
                x="177.985"
                y="290.296">Б</text
              >
            </g>
            <g>
              <g>
                <path
                  d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                  fill="#edc92f"
                />
                <text
                  style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                  transform="matrix(3.581682, 0, 0, 3.157822, -347.678975, -552.280256)"
                  x="177.985"
                  y="290.296">B</text
                >
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        class="second-svg"
        style="right: 0;  display: flex; justify-content: end"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g transform="translate(38.39858,38.39858) scale(0.7,0.7)"
          ><g
            fill="#e2f099"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><path
              d="M127.99528,310.84567c-100.98549,0 -182.8504,-81.86491 -182.8504,-182.8504v0c0,-100.98549 81.86491,-182.8504 182.8504,-182.8504v0c100.98549,0 182.8504,81.86491 182.8504,182.8504v0c0,100.98549 -81.86491,182.8504 -182.8504,182.8504z"
              id="shape"
            ></path></g
          ><g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><g transform="scale(5.12,5.12)"
              ><path
                d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"
              ></path></g
            ></g
          ></g
        >
      </svg>
    </div>
  </div>
</div>

<div class="who-a-w" style="margin-bottom: 1rem;">
  <div class="who-a-w-container">
    <div class="w-left">
      <h2>Кои сме ние</h2>
      <p>
        ОЦ „Логос – Аз и Ти“ е място, в което всяко дете получава шанс да
        открие, развие и изрази своя потенциал. Ние сме екип от специалисти –
        логопеди, ерготерапевти, специални педагози, психолози и терапевти,
        обединени от вярата, че напредъкът започва с връзката между „аз“ и „ти“
        – от една страна - между логопед, дете и родител и от друга страна
        -между надеждата, възможността и подкрепата.
      </p>
    </div>
    <div class="w-right">
      <svg
        class="first-svg-w"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="110.8419 122.2011 248.1 248.1"
        width="70px"
        height="70px"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
          transform="matrix(1, 0, 0, 1, 106.89191866905466, 118.25107206295286)"
        >
          <g transform="scale(0.5,0.5)">
            <path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            />
            <g>
              <path
                d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
                fill="#ffac71"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.565438, 0, 0, 3.140884, -423.405016, -705.154641)"
                x="177.985"
                y="290.296">A</text
              >
            </g>
            <g>
              <path
                d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
                fill="#eb9783"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.62775, 0, 0, 3.157958, -515.098067, -551.446882)"
                x="177.985"
                y="290.296">Б</text
              >
            </g>
            <g>
              <g>
                <path
                  d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                  fill="#edc92f"
                />
                <text
                  style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                  transform="matrix(3.581682, 0, 0, 3.157822, -347.678975, -552.280256)"
                  x="177.985"
                  y="290.296">B</text
                >
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        class="second-svg-w"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g transform="translate(38.39858,38.39858) scale(0.7,0.7)"
          ><g
            fill="#e2f099"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><path
              d="M127.99528,310.84567c-100.98549,0 -182.8504,-81.86491 -182.8504,-182.8504v0c0,-100.98549 81.86491,-182.8504 182.8504,-182.8504v0c100.98549,0 182.8504,81.86491 182.8504,182.8504v0c0,100.98549 -81.86491,182.8504 -182.8504,182.8504z"
              id="shape"
            ></path></g
          ><g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><g transform="scale(5.12,5.12)"
              ><path
                d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"
              ></path></g
            ></g
          ></g
        >
      </svg>
      <img src="/others/who-are-we.png" alt="Who are we" />
    </div>
  </div>
</div>

<div class="team">
  <div class="team-container">
    <h2>Нашите специалисти</h2>
    <!-- Sonia Ignatova -->
    <div class="team-content" id="sonia-ignatova" style="margin-bottom: 5rem;">
      <div class="member-stats">
        <img src="/pfps/team/sonia.png" alt="Sonia" class="team-member" />
        <h3 class="team-member-name">Соня Игнатова</h3>
        <p class="team-member-role">логопед, специален педагог</p>
        <p class="team-member-contacts">logos_aziti@abv.bg</p>
        <p class="team-member-contacts">+359 876 860 602</p>
      </div>
      <div class="member-info">
        <p>
          Казвам се Соня Игнатова и съм магистър „Логопед“ и „Специален педагог“
          с дълогодишен опит. Завършвам магистратура „Специален педагог“ във ВПИ
          „Неофит Рилски“ ,гр. Благоевград и магистратура „Езикова и речева
          патология“ в НБУ.
        </p>
        <p>
          Занимавам се с диагностика, консултация и терапия на езиково-говорното
          развитие, комуникативни нарушения и обучителни затруднения на деца от
          различни възрастови групи.
        </p>
        <p>
          Мотивите, които ме ръководят, в съзнателната си дейност като терапевт,
          са подчинени на Негово Величество Детето.
        </p>
        {#if showAdditionalSection1}
          <p>
            От 1993 г съм посветила интересите си и дейноста си като специален
            педагог и логопед на работата с деца със специални образователни
            потребности в Държавни институции, а от 2007 г. основавам ОЦ „Логос
            – Аз и Ти“, където се предлагат различни образователни и
            терапевтични услуги в помощ и грижа на децата.
          </p>
          <p>
            За мен логопедията е призвание - да чуваш и виждаш невидимото. Тя е
            път, по който вървим заедно: аз- детето - родител, с доверие, грижа
            и знание. За мен всеки овладян звук е стъпка, всяка овладяна дума -
            постижение, всяка усмивка – победа. Вярвам в силата на малките
            крачки, водещи до голям успех.
          </p>
          <p>
            Съавтор на книгите „Диагностичен албум, предназначен за логопеди,
            психолози и педагози”, Сборник за деца „Играя и зная“, съавтор на
            работни листове, организатор на Терапевтилници за деца, посветени на
            различни тематики, свързани с езиково-говорното, когнитивното и
            моторното развитие на децата; съавтор на логопедични карти:
            „Логопедична вдъхновителница“ и други.
          </p>
          <button class="more-less" on:click={toggleSection1}
            >Прочети по-малко</button
          >
        {:else}
          <button class="more-less" on:click={toggleSection1}
            >Прочети повече</button
          >
        {/if}
        <div class="member-certificates">
          <h3>
            Придобити квалификации, обучения, сертификати и участия в семинари,
            някои от които са:
          </h3>
          <ul>
            <li>
              “Ремелка “ - методика за обучение по смятане и социална
              компетентност на деца с обучителни затруднения;
            </li>
            <li>
              “ Орално Моторна терапия в логопедичната практика “– Talk Tools
              ниво 1;
            </li>
            <li>Участие за работа с картинен тест фонологично осъзнаване ;</li>
            {#if showAdditionalSection2}
              <li>
                Участие със сертификат в "Орофациална рефлексна интеграция",
                авторски курс на Mickaël Benoit Graphoréflexes;
              </li>
              <li>
                Участие със сертификат в RMTi Ниво 1 - Фокус, Организация и
                Разбиране, с лектор Надежда Пейчевска от Brain Change;
              </li>
              <li>
                Участие със сертификат в RMTi Ниво 2 - Емоции, Памет и
                Поведение, с лектор Надежда Пейчевска от BrainChange;
              </li>
              <li>
                Сертифицирано обучение - Диагностика на говора и нарушенията му
                в предучилищна възраст: прилагане на Тестова батерия за орални
                моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;
              </li>
              <li>
                Участие в семинари, организирани от логопед София Вълнеева:
                „Приобщаване на родителите като помощник-терапевти“, „Логопедът
                и децата“, „Децата и екраните“ с участие на презентации на тема
                „Играта – терапевтичен инструмент в логопедичната практика“ ,
                „Децата и екраните – враг или глас? Логопедичен поглед към ДАК“
                , научни конференции в областта на Логопедията и образованието.
              </li>
              <button
                class="more-less"
                style="margin-top: 2rem;"
                on:click={toggleSection2}>Прочети по-малко</button
              >
            {:else}
              <button
                class="more-less"
                style="margin-top: 2rem;"
                on:click={toggleSection2}>Прочети повече</button
              >
            {/if}
          </ul>
        </div>
        <p>
          Съвместно поддържа страниците във фейсбук – By Соня Игнатова – логопед
          и специален педагог и ОЦ „Логос – Аз и Ти“ и инстаграм страницата
          logosaziti.
        </p>
        <p>
          С уважение:<br />
          Соня Игнатова
        </p>
      </div>
    </div>
    <!-- Maria Tuputi -->
    <div class="team-content" id="maria-tuputi">
      <div class="member-stats">
        <img src="/pfps/team/maria.png" alt="Maria" class="team-member" />
        <h3 class="team-member-name">Мария-Паола Тупути</h3>
        <p class="team-member-role">логопед, ерготерапевт</p>
        <p class="team-member-contacts">logos_aziti@abv.bg</p>
        <p class="team-member-contacts">+359 876 860 602</p>
      </div>
      <div class="member-info">
        <p>
          Казвам се Мария-Паола Тупути. Придобивам бакалавърската си степен в
          Нов Български университет БП „Логопедия“, магистърка степен „Езикова и
          речева патология“ и квалификационна програма „Ерготерапия в
          приобщаващото обраование“ към Нов Български университет.
        </p>
        <p>
          От две години работя като логопед и ерготерапевт в Образователен
          център „Логос – Аз и Ти“, където имам възможността ежедневно да
          подкрепям деца с различни комуникативни, моторни и обучителни
          затруднения.
        </p>
        {#if showAdditionalSection3}
          <p>
            Избрах тази професия, защото вярвам, че комуникацията е ключът към
            развитието и свързаността. Да бъда част от пътя на всяко дете към
            разбиране, изразяване и овладяване на комуникативните, когнитивните
            и моторните умения е мисия, която изпълнявам с отговорност,
            отдаденост и вяра в потенциала на всяко дете.
          </p>
          <p>
            Работата ми съчетава логопедичен и ерготерапевтичен подход, като
            акцентът е върху индивидуалния потенциал и нужди на всяко дете.
            Стремя се да създавам ангажираща, подкрепяща и стимулираща среда, в
            която децата да развиват своите умения чрез игра, движение и
            комуникация.
          </p>
          <p>
            Съавтор на работни листове, организатор на Терапевтилници за деца,
            посветени на различни тематики, свързани с езиково-говорното,
            когнитивното и моторното развитие на децата; съавтор на логопедични
            карти: „Логопедична вдъхновителница“ и други.
          </p>
          <button class="more-less" on:click={toggleSection3}
            >Прочети по-малко</button
          >
        {:else}
          <button class="more-less" on:click={toggleSection3}
            >Прочети повече</button
          >
        {/if}
        <div class="member-certificates">
          <h3>
            Придобити квалификации, обучения, сертификати и участия в семинари,
            някои от които са:
          </h3>
          <ul>
            <li>
              Сертифицирано обучение - Диагностика на говора и нарушенията му в
              предучилищна възраст: прилагане на Тестова батерия за орални
              моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;
            </li>
            <li>
              Участие в семинари, организирани от логопед София Вълнеева:
              „Логопедът и децата“, „Децата и екраните“ с участие на презентации
              на тема „Играта – терапевтичен инструмент в логопедичната
              практика“ , „Децата и екраните – враг или глас? Логопедичен поглед
              към ДАК“ и научни конференции в областта на Логопедията и
              образованието.
            </li>
          </ul>
        </div>
        <p>
          Съвместно поддържа страницата във фейсбук –ОЦ „Логос – Аз и Ти“ и
          инстаграм страницата logosaziti.
        </p>
        <p>
          С уважение:<br />
          Мария-Паола Тупути
        </p>
      </div>
    </div>
  </div>
</div>

<div class="believe">
  <div class="believe-container">
    <h2>Ние вярваме, че:</h2>
    <div class="believe-content" style="margin-bottom: 5rem;">
      <div class="bubble">
        <img src="/svgs/za-nas/evaluate.svg" alt="Оцени нивото на развитие" />
        <p>...всяко дете заслужава да бъде чуто.</p>
      </div>

      <div class="bubble">
        <img src="/svgs/za-nas/collective.svg" alt="Оцени нивото на развитие" />
        <p>...заедно можем повече.</p>
      </div>

      <div class="bubble">
        <img src="/svgs/za-nas/success.svg" alt="Оцени нивото на развитие" />
        <p>
          ...успехът е път, който се изминава с доверие, търпение и постоянство.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Cormorant Garamond", serif;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 1rem;
    text-align: left;
  }
  /* img{max-width:100%;display:block} */

  /* ---- 1. Heading ---- */
  .heading {
    background-color: var(--orange);
    text-align: left;
    border-radius: 16px;
    padding: 40px 0 40px 40px;
    margin: 30px 0 40px 0;
    color: #fff;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
    width: 97%;
    max-width: 1000px;
  }

  #h-left {
    width: 50%;
  }

  #h-right {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px;
    margin: 20px 0;
    width: 45%;
  }

  .heading h1 {
    font-size: 3.3em;
    margin-bottom: 20px;
    font-family: "ABeeZee", sans-serif;
  }

  .first-svg {
    transform: translateY(-75%);
  }

  .second-svg {
    transform: translateY(55%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Who are we ---- */
  .who-a-w {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .who-a-w-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
  }

  .w-left {
    width: 51%;
    padding-right: 20px;
    line-height: 1.5;
  }

  .w-left p {
    font-size: 1.3rem;
  }

  .w-right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    position: relative;
    padding: 0 25px;
  }

  .first-svg-w {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
  }

  .second-svg-w {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
  }

  .w-right img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }

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
    content: "✓";
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

  /* ---- 3. We believe that ---- */
  .believe {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .believe-container {
    width: 90%;
    max-width: 1000px;
  }

  .believe-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  /* Балонче */
  .bubble {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 1.8rem;
    gap: 1.2rem;
    background: var(--background);
    border: 3px solid var(--orange);
    border-radius: 20px;
  }

  .bubble:hover {
    transition: all 0.3s ease;
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }

  /* SVG иконка */
  .bubble img {
    width: 110px;
    height: 110px;
    object-fit: contain;
    filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.12));
  }

  /* Текст */
  .bubble p {
    font-size: 1.15rem;
    line-height: 1.5;
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
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .team-content:hover {
    transform: translateY(-5px);
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.3);
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    /* ---- 2. Who are we ---- */
    .w-left {
      width: 45%;
    }

    .w-left p {
      font-size: 1.2rem;
    }

    .w-right {
      width: 55%;
    }

    /* ---- 3. Team ---- */
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
      font-size: 1.3rem;
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

    /* 3. We believe that */
    .believe-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      padding: 32px;
    }

    .believe-content :last-child {
      grid-column: 1 / -1;
    }
  }

  /* ---- Media query - 755 ---- */
  @media screen and (max-width: 755px) {
    h2 {
      margin-left: 0;
    }
    /* ---- 1. Heading ---- */
    .heading {
      padding: 35px 35px 10px 35px;
      margin: 20px 0;
    }

    .heading-container {
      flex-direction: column;
    }

    #h-left,
    #h-right {
      width: 100%;
      text-align: center;
      font-size: larger;
      margin: 0 auto;
    }

    #h-right {
      margin-top: 25px;
      padding: 20px 0;
    }

    .heading h1 {
      font-size: 2.5em;
    }

    .first-svg {
      transform: translateY(-25%);
    }

    .second-svg {
      transform: translateY(10%);
      align-self: flex-start;
    }

    /* ---- 2. Who are we ---- */
    .who-a-w {
      flex-direction: column;
      align-items: center;
    }

    .who-a-w-container {
      flex-direction: column;
    }

    .w-left {
      width: 100%;
      padding-right: 0;
    }

    .w-left p {
      font-size: 1.3rem;
    }

    .w-right {
      width: 100%;
      padding: 0;
      margin: 50px 0;
      display: flex;
      flex-direction: column;
    }

    /* ---- 3. Team ---- */
    .team {
      margin-top: 1.5rem;
    }

    .team-container {
      width: 98%;
      max-width: 100%;
    }

    .team-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
      margin-bottom: 2.5rem;
      border-radius: 20px;
    }

    .team-content,
    h3,
    p,
    li {
      font-size: larger;
      line-height: 1.5;
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
      max-width: 70%;
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
      font-size: 1.2rem;
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

    /* 3. We believe that */
    .believe-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 28px;
    }

    .bubble {
      padding: 1.6rem;
    }

    .bubble img {
      width: 95px;
      height: 95px;
    }

    .bubble p {
      font-size: 1.05rem;
    }
  }

  @media screen and (max-width: 480px) {
    .team-content {
      font-size: medium !important;
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

    /* 3. We believe that */
    .believe-container {
      width: 100%;
    }

    .believe-content {
      padding: 20px;
      border-radius: 16px;
    }

    .bubble {
      padding: 1.2rem;
      border-radius: 16px;
    }

    .bubble img {
      width: 80px;
      height: 80px;
    }

    .bubble p {
      font-size: 1rem;
      line-height: 1.45;
    }
  }
</style>
