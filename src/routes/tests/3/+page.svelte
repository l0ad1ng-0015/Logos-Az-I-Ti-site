<script>
  // Данни за услугите
  const services = [
    {
      id: "ranna-prevenciya",
      title: "Ранна превенция",
      icon: "balloons",
      href: "/uslugi/ranna-prevenciya",
      shortDescription: "Ранно откриване и превенция на речевите проблеми",
      fullDescription:
        "Ранната превенция е ключова за успешното развитие на комуникационните умения при децата. Предлагаме скрининг и превантивни мерки за деца от 6 месеца до 3 години.",
      benefits: [
        "Ранно откриване на проблеми",
        "Превантивни упражнения",
        "Консултации за родители",
      ],
      duration: "45 минути",
      price: "60 лв.",
    },
    {
      id: "konsultaciya-i-diagnostika",
      title: "Консултация, диагностика и оценка",
      icon: "pen",
      href: "/uslugi/konsultaciya-i-diagnostika",
      shortDescription: "Професионална диагностика и оценка на речевите умения",
      fullDescription:
        "Цялостна оценка на речевото и езиково развитие чрез стандартизирани тестове и наблюдение. Включва подробен план за терапия.",
      benefits: [
        "Професионална диагностика",
        "Индивидуален план",
        "Детайлен отчет",
      ],
      duration: "90 минути",
      price: "120 лв.",
    },
    {
      id: "logopedichna-terapiya",
      title: "Логопедична терапия",
      icon: "hands",
      href: "/uslugi/logopedichna-terapiya",
      shortDescription: "Индивидуална терапия за подобряване на речта",
      fullDescription:
        "Персонализирана терапия за корекция на артикулационни, фонологични и езикови нарушения при деца и възрастни.",
      benefits: [
        "Индивидуален подход",
        "Модерни техники",
        "Проследяване на прогреса",
      ],
      duration: "50 минути",
      price: "70 лв.",
    },
    {
      id: "omt",
      title: "Орофациална терапия",
      icon: "sun",
      href: "/uslugi/omt",
      shortDescription: "Терапия на мускулите на лицето и устната кухина",
      fullDescription:
        "Специализирана терапия за укрепване на орофациалните мускули и подобряване на функциите на дъвкане, преглъщане и говор.",
      benefits: [
        "Укрепване на мускулите",
        "Подобряване на дъвкането",
        "Корекция на преглъщането",
      ],
      duration: "45 минути",
      price: "65 лв.",
    },
    {
      id: "podpomagane-i-obucheniya",
      title: "Подпомагане и обучения",
      icon: "backpack",
      href: "/uslugi/podpomagane-i-obucheniya",
      shortDescription: "Обучение за родители и специалисти",
      fullDescription:
        "Практически семинари и обучения за родители, учители и специалисти за работа с деца с комуникационни трудности.",
      benefits: [
        "Практически знания",
        "Групови занимания",
        "Продължаваща подкрепа",
      ],
      duration: "2 часа",
      price: "40 лв.",
    },
    {
      id: "logopedichna-vdahnovitelnica",
      title: "Логопедична вдъхновителница",
      icon: "book",
      href: "/uslugi/logopedichna-vdahnovitelnica",
      shortDescription: "Креативни и забавни логопедични активности",
      fullDescription:
        "Иновативен подход към логопедичната терапия чрез творчески активности, игри и интерактивни упражнения.",
      benefits: ["Креативен подход", "Забавни дейности", "Мотивираща среда"],
      duration: "60 минути",
      price: "80 лв.",
    },
  ];

  // Състояние на модала
  let selectedService = null;
  let showModal = false;

  // Функции за работа с модала
  function openModal(service) {
    selectedService = service;
    showModal = true;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    showModal = false;
    selectedService = null;
    document.body.style.overflow = "auto";
  }

  function goToServicePage(href) {
    // Тук можеш да добавиш логика за навигация
    window.location.href = href;
  }

  // SVG икони
  const icons = {
    balloons: `<svg viewBox="0 0 100 100" width="80" height="80">
      <circle cx="25" cy="35" r="12" fill="#ff6b9d" opacity="0.9"/>
      <circle cx="45" cy="25" r="12" fill="#4ecdc4" opacity="0.9"/>
      <circle cx="65" cy="35" r="12" fill="#45b7d1" opacity="0.9"/>
      <circle cx="35" cy="50" r="12" fill="#96ceb4" opacity="0.9"/>
      <circle cx="55" cy="50" r="12" fill="#feca57" opacity="0.9"/>
      <path d="M25 47 L25 75" stroke="#666" stroke-width="1"/>
      <path d="M45 37 L45 75" stroke="#666" stroke-width="1"/>
      <path d="M65 47 L65 75" stroke="#666" stroke-width="1"/>
      <path d="M35 62 L35 75" stroke="#666" stroke-width="1"/>
      <path d="M55 62 L55 75" stroke="#666" stroke-width="1"/>
    </svg>`,

    pen: `<svg viewBox="0 0 100 100" width="80" height="80">
      <rect x="20" y="45" width="50" height="8" fill="#ff6b9d" rx="4" transform="rotate(-25 45 49)"/>
      <rect x="65" y="25" width="4" height="20" fill="#333" rx="2" transform="rotate(-25 67 35)"/>
      <circle cx="70" cy="20" r="3" fill="#feca57"/>
      <path d="M15 75 L30 60 L35 65 L20 80 Z" fill="#45b7d1"/>
    </svg>`,

    hands: `<svg viewBox="0 0 100 100" width="80" height="80">
      <circle cx="35" cy="40" r="15" fill="#ff6b9d" opacity="0.8"/>
      <circle cx="65" cy="40" r="15" fill="#4ecdc4" opacity="0.8"/>
      <circle cx="50" cy="30" r="12" fill="#feca57" opacity="0.8"/>
      <circle cx="25" cy="55" r="10" fill="#96ceb4" opacity="0.8"/>
      <circle cx="75" cy="55" r="10" fill="#45b7d1" opacity="0.8"/>
      <path d="M35 55 Q50 70 65 55" stroke="#333" stroke-width="2" fill="none"/>
    </svg>`,

    sun: `<svg viewBox="0 0 100 100" width="80" height="80">
      <circle cx="50" cy="50" r="20" fill="#feca57"/>
      <path d="M50 10 L50 25" stroke="#feca57" stroke-width="3"/>
      <path d="M50 75 L50 90" stroke="#feca57" stroke-width="3"/>
      <path d="M10 50 L25 50" stroke="#feca57" stroke-width="3"/>
      <path d="M75 50 L90 50" stroke="#feca57" stroke-width="3"/>
      <path d="M25 25 L35 35" stroke="#feca57" stroke-width="3"/>
      <path d="M65 65 L75 75" stroke="#feca57" stroke-width="3"/>
      <path d="M75 25 L65 35" stroke="#feca57" stroke-width="3"/>
      <path d="M35 65 L25 75" stroke="#feca57" stroke-width="3"/>
      <circle cx="45" cy="45" r="3" fill="#fff" opacity="0.7"/>
      <circle cx="55" cy="48" r="2" fill="#fff" opacity="0.5"/>
    </svg>`,

    backpack: `<svg viewBox="0 0 100 100" width="80" height="80">
      <rect x="30" y="35" width="40" height="45" fill="#45b7d1" rx="5"/>
      <rect x="35" y="40" width="30" height="35" fill="#4ecdc4" rx="3"/>
      <rect x="40" y="25" width="20" height="15" fill="#333" rx="3"/>
      <circle cx="25" cy="50" r="4" fill="#feca57"/>
      <circle cx="75" cy="50" r="4" fill="#feca57"/>
      <rect x="45" y="30" width="10" height="5" fill="#666" rx="2"/>
    </svg>`,

    book: `<svg viewBox="0 0 100 100" width="80" height="80">
      <rect x="25" y="25" width="50" height="50" fill="#ff6b9d" rx="3"/>
      <rect x="30" y="30" width="40" height="40" fill="#fff" rx="2"/>
      <path d="M35 40 L65 40" stroke="#333" stroke-width="2"/>
      <path d="M35 50 L65 50" stroke="#333" stroke-width="2"/>
      <path d="M35 60 L55 60" stroke="#333" stroke-width="2"/>
      <circle cx="70" cy="20" r="8" fill="#feca57" opacity="0.8"/>
      <circle cx="80" cy="30" r="6" fill="#4ecdc4" opacity="0.8"/>
      <circle cx="85" cy="15" r="5" fill="#96ceb4" opacity="0.8"/>
    </svg>`,
  };

  // Keyboard навигация за модала
  function handleKeydown(event) {
    if (event.key === "Escape" && showModal) {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="services-page">
  <div class="hero-section">
    <div class="hero-content">
      <h1>Услуги</h1>
      <p>
        Професионални логопедични услуги за деца и възрастни. Индивидуален
        подход и модерни методи за постигане на най-добри резултати.
      </p>
    </div>
  </div>

  <div class="services-container">
    <div class="services-grid">
      {#each services as service}
        <div
          class="service-card"
          on:click={() => openModal(service)}
          on:keydown={(e) => e.key === "Enter" && openModal(service)}
          tabindex="0"
          role="button"
          aria-label="Отвори подробности за {service.title}"
        >
          <div class="service-icon">
            {@html icons[service.icon]}
          </div>
          <h3 class="service-title">{service.title}</h3>
          <p class="service-description">{service.shortDescription}</p>
          <div class="service-meta">
            <span class="service-duration">{service.duration}</span>
            <span class="service-price">{service.price}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="cta-section">
    <div class="cta-content">
      <h2>Готови за консултация?</h2>
      <p>
        Свържете се с нас днес и направете първата стъпка към подобряване на
        комуникационните умения.
      </p>
      <button class="cta-button">Запишете час</button>
    </div>
  </div>
</main>

<!-- Модал за подробности за услугата -->
{#if showModal && selectedService}
  <div
    class="modal-overlay"
    on:click={closeModal}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div class="modal-content" on:click|stopPropagation>
      <button class="modal-close" on:click={closeModal} aria-label="Затвори">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div class="modal-header">
        <div class="modal-icon">
          {@html icons[selectedService.icon]}
        </div>
        <h2 id="modal-title">{selectedService.title}</h2>
      </div>

      <div class="modal-body">
        <p class="modal-description">{selectedService.fullDescription}</p>

        <div class="modal-benefits">
          <h3>Какво включва:</h3>
          <ul>
            {#each selectedService.benefits as benefit}
              <li>{benefit}</li>
            {/each}
          </ul>
        </div>

        <div class="modal-details">
          <div class="detail-item">
            <strong>Продължителност:</strong>
            <span>{selectedService.duration}</span>
          </div>
          <div class="detail-item">
            <strong>Цена:</strong>
            <span class="price">{selectedService.price}</span>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-secondary" on:click={closeModal}> Затвори </button>
        <button
          class="btn-primary"
          on:click={() => goToServicePage(selectedService.href)}
        >
          Виж повече детайли
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  :root {
    --orange: #ff9a7b;
    --green-button: #4ecdc4;
    --light-bg: #fef7f0;
    --text-dark: #333;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .services-page {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--light-bg) 0%, #fff 100%);
    font-family: "Arial", sans-serif;
  }

  .hero-section {
    background: linear-gradient(135deg, var(--orange) 0%, #ff7b5a 100%);
    color: var(--white);
    padding: 4rem 1rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: scale(1.2);
  }

  .hero-section::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .hero-content p {
    font-size: 1.2rem;
    opacity: 0.9;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    background: var(--white);
    border-radius: 24px;
    padding: 2.5rem 1.5rem;
    text-align: center;
    cursor: pointer;
    color: var(--text-dark);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  .service-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--orange), var(--green-button));
    border-radius: 24px;
    padding: 3px;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: subtract;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .service-card:hover::before {
    opacity: 1;
  }

  .service-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  .service-icon {
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
  }

  .service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
  }

  .service-title {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--text-dark);
    transition: color 0.3s ease;
  }

  .service-card:hover .service-title {
    color: var(--green-button);
  }

  .service-description {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    margin: 1rem 0;
  }

  .service-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #f0f0f0;
  }

  .service-duration {
    font-size: 0.85rem;
    color: #888;
    background: #f8f9fa;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
  }

  .service-price {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--green-button);
  }

  .cta-section {
    background: linear-gradient(135deg, var(--green-button) 0%, #45a29e 100%);
    color: var(--white);
    padding: 4rem 1rem;
    text-align: center;
    position: relative;
  }

  .cta-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .cta-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-button {
    background: var(--white);
    color: var(--green-button);
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    background: #f8f9fa;
  }

  .cta-button:active {
    transform: translateY(0);
  }

  /* Модал стилове */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 1rem;
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    background: var(--white);
    border-radius: 24px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.3s ease;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    z-index: 1001;
  }

  .modal-close:hover {
    background: #f0f0f0;
  }

  .modal-header {
    padding: 2rem 2rem 1rem;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .modal-icon {
    margin-bottom: 1rem;
  }

  .modal-header h2 {
    font-size: 1.8rem;
    color: var(--text-dark);
    margin: 0;
  }

  .modal-body {
    padding: 2rem;
  }

  .modal-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
  }

  .modal-benefits {
    margin-bottom: 2rem;
  }

  .modal-benefits h3 {
    font-size: 1.2rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }

  .modal-benefits ul {
    list-style: none;
    padding: 0;
  }

  .modal-benefits li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }

  .modal-benefits li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--green-button);
    font-weight: bold;
  }

  .modal-details {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  .detail-item:last-child {
    margin-bottom: 0;
  }

  .detail-item strong {
    color: var(--text-dark);
  }

  .detail-item .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--green-button);
  }

  .modal-footer {
    padding: 1.5rem 2rem 2rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  .btn-secondary {
    background: #f8f9fa;
    color: var(--text-dark);
    border: 1px solid #ddd;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
  }

  .btn-secondary:hover {
    background: #e9ecef;
  }

  .btn-primary {
    background: var(--green-button);
    color: var(--white);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .btn-primary:hover {
    background: #45a29e;
    transform: translateY(-1px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }

    .hero-content p {
      font-size: 1.1rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 2rem 1.5rem;
    }

    .cta-content h2 {
      font-size: 2rem;
    }

    .hero-section {
      padding: 3rem 1rem;
    }

    .services-container {
      padding: 3rem 1rem;
    }

    .cta-section {
      padding: 3rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .service-title {
      font-size: 1.2rem;
    }

    .cta-content h2 {
      font-size: 1.8rem;
    }

    .service-card {
      padding: 1.5rem 1rem;
    }
  }
</style>
