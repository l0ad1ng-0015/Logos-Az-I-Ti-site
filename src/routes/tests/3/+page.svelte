<script>
  // Данни за услугите
  const services = [
    {
      id: 1,
      title: "Ранна превенция",
      icon: "🎈",
      description:
        "Превантивни мерки и ранно откриване на развойни затруднения при деца",
      details: [
        "Скрининг и оценка на развитието",
        "Консултации за родители",
        "Индивидуални програми за стимулация",
      ],
    },
    {
      id: 2,
      title: "Консултация, диагностика и оценка",
      icon: "✏️",
      description:
        "Професионална диагностика и комплексна оценка на речевото и езиковото развитие",
      details: [
        "Логопедична диагностика",
        "Психологическа оценка",
        "Изготвяне на терапевтичен план",
      ],
    },
    {
      id: 3,
      title: "Логопедична терапия",
      icon: "🤝",
      description:
        "Индивидуални и групови сесии за корекция на речевите и езиковите затруднения",
      details: [
        "Артикулационна терапия",
        "Развитие на речника",
        "Работа с гласа и дишането",
      ],
    },
    {
      id: 4,
      title: "Орофациална терапия",
      icon: "🦁",
      description:
        "Специализирана терапия за подобряване на орофациалните функции",
      details: [
        "Миофункционална терапия",
        "Корекция на хранене и преглъщане",
        "Орални двигателни упражнения",
      ],
    },
    {
      id: 5,
      title: "Подпомагане и обучения",
      icon: "🎒",
      description: "Обучителни програми и подкрепа за специалисти и родители",
      details: [
        "Семинари за родители",
        "Обучения за педагози",
        "Методически материали",
      ],
    },
    {
      id: 6,
      title: "Логопедична вдъхновителница",
      icon: "📖",
      description:
        "Творчески подход към логопедичната работа чрез литература и изкуство",
      details: ["Библиотерапия", "Творчески методи", "Интерактивни занимания"],
    },
  ];

  let selectedService = null;

  function selectService(service) {
    selectedService = selectedService?.id === service.id ? null : service;
  }
</script>

<div class="services-page">
  <!-- Декорация с puzzle елементи -->
  <div class="puzzle-decoration puzzle-1">🧩</div>
  <div class="puzzle-decoration puzzle-2">🧩</div>
  <div class="puzzle-decoration puzzle-3">🧩</div>

  <!-- Header секция -->
  <div class="header">
    <h1>Услуги</h1>
    <p>
      Предлагаме широк спектър от специализирани услуги за подкрепа на речевото
      и езиковото развитие. Всяка услуга е персонализирана според индивидуалните
      нужди на всеки клиент.
    </p>
  </div>

  <!-- Services Grid -->
  <div class="services-grid">
    {#each services as service}
      <div
        class="service-card {selectedService?.id === service.id
          ? 'selected'
          : ''}"
        on:click={() => selectService(service)}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === "Enter" && selectService(service)}
      >
        <span class="service-icon">{service.icon}</span>
        <h3 class="service-title">{service.title}</h3>
        <p class="service-description">{service.description}</p>

        {#if selectedService?.id === service.id}
          <div class="service-details">
            <ul>
              {#each service.details as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Call to Action секция -->
  <div class="cta-section">
    <h2>Готови сте за първата стъпка?</h2>
    <p>
      Свържете се с нас за консултация и да обсъдим как можем да ви помогнем в
      постигането на вашите цели за речево и езиково развитие.
    </p>
    <a href="/contact" class="cta-button">Запази консултация</a>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: "Arial", sans-serif;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    min-height: 100vh;
  }

  .services-page {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .header h1 {
    font-size: 3rem;
    color: #8b4513;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header p {
    font-size: 1.2rem;
    color: #a0522d;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
  }

  .service-card:hover::before {
    animation: shine 0.6s ease-in-out;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(31, 38, 135, 0.5);
  }

  .service-card.selected {
    background: linear-gradient(135deg, #ff9a56, #ff7b39);
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

  .service-details {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  .service-details ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  .service-details li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }

  .service-details li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
  }

  .service-card.selected .service-details li::before {
    color: #fff;
  }

  .cta-section {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }

  .cta-section h2 {
    font-size: 2rem;
    color: #8b4513;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.1rem;
    color: #a0522d;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    background: linear-gradient(135deg, #ff9a56, #ff7b39);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(255, 122, 57, 0.4);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 122, 57, 0.6);
  }

  .puzzle-decoration {
    position: fixed;
    opacity: 0.1;
    pointer-events: none;
    z-index: -1;
  }

  .puzzle-1 {
    top: 10%;
    left: 5%;
    font-size: 8rem;
    transform: rotate(-15deg);
  }

  .puzzle-2 {
    bottom: 15%;
    right: 8%;
    font-size: 6rem;
    transform: rotate(25deg);
  }

  .puzzle-3 {
    top: 60%;
    left: 2%;
    font-size: 4rem;
    transform: rotate(-45deg);
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    .services-page {
      padding: 1rem;
    }

    .header h1 {
      font-size: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .cta-section {
      padding: 2rem;
    }
  }
</style>
