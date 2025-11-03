<script>
  export let title = "Услуги | Логос – Аз и Ти";
  export let description =
    "ОЦ Логос „Аз и ти“ предлага образователни и терапевтични услуги в София – диагностика, терапия, ранна превенция и орофациална миофункционална терапия за деца.";

  // Данни за услугите
  const services = [
    {
      id: "ranna-prevenciya",
      title: "Ранна превенция",
      icon: "🧑‍🧑‍🧒",
      description:
        "Ранна превенция е навременна грижа и насока към правилното развитие на детето.",
    },
    {
      id: "konsultaciya-i-diagnostika",
      title: "Консултация, диагностика и оценка",
      icon: "✏️",
      description:
        "Професионална диагностика и комплексна оценка на езиково-говорното развитие на детето.",
    },
    {
      id: "logopedichna-terapiya",
      title: "Логопедична терапия",
      icon: "🤝",
      description:
        "Индивидуални терапевтични сесии за преодоляване на дефицитите в езиково-говорното развитие на детето.",
    },
    {
      id: "omt",
      title: "Орофациална терапия",
      icon: "👅",
      description:
        "Специализирана терапия за подобряване на орофациалните функции на артикулационния апарат и мускулатура.",
    },
    {
      id: "podpomagane-i-obucheniya",
      title: "Подпомагане и обучения",
      icon: "🎒",
      description:
        "Чуждо-езиково обучение, подкрепа в обучителния процес и обучителни програми за студенти, специалисти и родители.",
    },
    {
      id: "logopedichna-vdahnovitelnica",
      title: "Логопедична вдъхновителница",
      icon: "📖",
      description:
        "Творчески подход към логопедичната работа  чрез изкуство, литература и психология.",
    },
  ];

  let selectedService = null;

  // FAQ данни
  let activeAccordion = null;

  const toggleAccordion = (index) => {
    activeAccordion = activeAccordion === index ? null : index;
  };

  const faqData = [
    {
      question: "На каква възраст детето може да посети логопед?",
      answer: "Детето може да посети логопед още от най-ранна детска възраст.",
    },
    {
      question: "Предлагате ли онлайн логопедични услуги?",
      answer:
        "Да. Онлайн сесиите са удобен и ефективен вариант за работа с по-големи деца, при които вече е работено в езиков, артикулационен и комуникативен план.",
    },
    {
      question: "Колко е продължителността на една логопедична сесия?",
      answer:
        "От 3 до 6-годишна възраст – 30 минути; За деца в начална училищна възраст – 30-40 минути; Тийнейджъри – 40 минути.",
    },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="логос аз и ти, логос - аз и ти, оц логос аз и ти, ОЦ „Логос – Аз и Ти“, логопедичен център, ОЦ Логос Аз и ти, логопедичен център ОЦ Логос Аз и ти, образователни и терапевтични услуги София, логопедични услуги София, логопед София, логопедичен център София, логопедична терапия София, логопедична диагностика София, логопедична консултация София, ранна логопедична превенция, логопедичен кабинет Овча купел, орофациална миофункционална терапия София, ОМТ София, миофункционална терапия, логопед при заекване, логопед при артикулационни нарушения, логопед при езикови нарушения, логопед при забавено развитие, логопед за деца София, логопедична помощ за родители, образователни програми за деца София, терапевтични програми за деца София, индивидуални логопедични сесии, логопедична подкрепа за деца, логопедични обучения за родители, център за образователни и терапевтични услуги, logoped Sofia, detski logoped Sofia, obrazovatelni uslugi Sofia, terapevtichni uslugi Sofia, orofacialna miofunkcionalna terapiya Sofia"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="Услуги" />

  <!-- Open Graph тагове (за Facebook и другuslugiи) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="Услуги" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/uslugi" />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>Услуги</h1>
      <p>
        Предлагаме широк спектър от специализирани терапевтични и образователни
        услуги за подкрепа на езиково - говорното развитие и овладяване на
        знания. Всяка услуга е персонализирана според индивидуалните нужди на
        всяко дете.
      </p>
      <!-- Прочетете техните истории и мнения за постигнатите резултати и положителната промяна в ежедневието им. -->
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

<!-- Services Container -->
<div class="services">
  <div class="services-container">
    <h2>Услуги</h2>
    <div class="services-content">
      {#each services as service}
        <a
          href={`/uslugi/${service.id}`}
          class="service-card{selectedService?.id === service.id
            ? ' selected'
            : ''}"
          aria-pressed={selectedService?.id === service.id}
          style="text-decoration: none; color: inherit;"
        >
          <span class="service-icon">{service.icon}</span>
          <h3 class="service-title">{service.title}</h3>
          <p class="service-description">{service.description}</p>
          <p class="service-more">Вижте повече</p>
        </a>
      {/each}
    </div>
  </div>
</div>

<!-- FAQ Container -->
<div class="faq">
  <div class="faq-container">
    <h2>Често задавани въпроси</h2>
    <div class="faq-content">
      {#each faqData as faq, index}
        <div class="faq-item" class:active={activeAccordion === index}>
          <button class="faq-question" on:click={() => toggleAccordion(index)}>
            <span>{faq.question}</span>
            <svg
              class="faq-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              {faq.answer}
            </div>
          </div>
        </div>
      {/each}
      <!-- You can see more faq questions here -->
      <div class="button-container">
        <a href="/chesto-zadavani-vaprosi" class="see-more-button"
          >Намерете още ЧЗВ тук</a
        >
      </div>
    </div>
  </div>
</div>

<!-- Call to action -->
<div class="cta-section-container">
  <h2>Готови ли сте за консултация?</h2>
  <div class="cta-section">
    <h3 class="section-intro">
      Свържете се с нас днес и направете първата стъпка към подобряване на
      комуникативните умения.
    </h3>
    <a class="cta-button" href="/kontakti">
      <h4>Свържете се с нас</h4>
    </a>
  </div>
</div>

<style>
  /* ---- 0. Global ---- */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 1rem;
    text-align: left;
  }

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
    transform: translateY(-155%);
  }

  .second-svg {
    align-self: flex-end;
    transform: translateY(45%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Services ---- */
  .services {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .services-container {
    width: 90%;
    max-width: 1000px;
  }

  .services-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    background: var(--orange-light);
    margin-top: 1.5rem;
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .service-card {
    background: var(--background);
    padding: 20px;
    border: 2px solid var(--orange);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  .service-card .service-more {
    margin-top: 15px;
    font-weight: bold;
    color: var(--orange);
    text-align: center;
  }

  .service-card.selected {
    background: var(--orange);
    color: white;
    transform: scale(1.02);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color: inherit;
  }

  .service-description {
    font-size: 1rem;
    line-height: 1.6;
    color: inherit;
    opacity: 0.9;
    text-align: center;
  }

  /* ---- 3. FAQ Container ---- */
  .faq {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .faq-container {
    width: 90%;
    max-width: 1000px;
  }

  .faq-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .faq-item {
    margin-bottom: 15px;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-item:last-child {
    margin-bottom: 0;
  }

  .faq-item.active {
    border-color: var(--orange);
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.2);
  }

  .faq-question {
    background: var(--background);
    padding: 20px 25px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border: 2px solid var(--orange);
    border-radius: 15px;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  .faq-question:hover {
    background: var(--background-hover);
  }

  .faq-item.active .faq-question {
    background: var(--orange);
    color: white;
  }

  .faq-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 15px;
  }

  .faq-item.active .faq-icon {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: white;
  }

  .faq-item.active .faq-answer {
    max-height: 300px;
  }

  .faq-answer-content {
    padding: 25px;
    color: #555;
    line-height: 1.6;
    font-size: 1rem;
    font-family: "ABeeZee", sans-serif !important;
  }

  .button-container {
    text-align: center;
    margin-top: 30px;
  }

  .see-more-button {
    background-color: var(--orange);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .see-more-button:hover {
    background-color: var(--orange-dark);
  }

  /* ---- 4. CTA Section ---- */
  .cta-section {
    max-width: 1000px;
    background: var(--orange-light);
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    border: 3px solid #ff9d6b;
  }

  .cta-section-container {
    margin-top: 1rem;
    width: 90%;
    max-width: 1000px;
    margin-bottom: 2.2rem;
  }

  .cta-section h3 {
    color: black;
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 700;
  }

  .cta-button {
    display: inline-block;
    width: 350px;
    height: 65px;
    line-height: 35px;
    background: var(--orange);
    color: white;
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    border: 2px solid #ff9d6b;
    cursor: pointer;
  }

  .cta-button:hover {
    background: var(--orange-dark);
    color: black;
    transform: translateY(-2px);
    border: black 2px solid;
    box-shadow: 0 5px 15px rgba(255, 157, 107, 0.3);
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-200%);
    }
  }

  /* ---- Media query - 755 ---- */
  @media screen and (max-width: 755px) {
    /* ---- 1. Heading ---- */
    .heading {
      padding: 35px 35px 10px 35px;
      margin: 20px 0 !important;
      text-align: center;
      margin: 0 auto;
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

    .heading p {
      text-align: center !important;
      margin: 0 auto !important;
    }

    .first-svg {
      transform: translateY(-40%);
    }

    .second-svg {
      transform: translateY(10%);
      align-self: flex-start;
    }

    /* ---- 3. FAQ Container ---- */
    .faq-content {
      padding: 30px 20px;
    }

    .faq-question {
      padding: 15px 20px;
      font-size: 1rem;
    }

    .faq-answer-content {
      padding: 20px;
    }

    /* ---- 3. CTA Section ---- */
    .cta-section h3 {
      font-size: 1.3rem;
    }
    .cta-button {
      width: 315px;
    }

    /* ---- 2. Services ---- */
    .services-content {
      grid-template-columns: 1fr;
      padding: 20px;
      gap: 2rem;
    }
    .service-card {
      padding: 12px;
    }
  }

  /* ---- Media query - 425 ---- */
  @media screen and (max-width: 425px) {
    .cta-button {
      width: 250px;
      /* height: 100px; */
    }
  }
</style>
