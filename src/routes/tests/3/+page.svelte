<script>
  let selectedService = 'consultation';
  let formData = {
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  };

  function selectService(service) {
    selectedService = service;
  }

  function handleSubmit() {
    console.log('Form submitted:', formData);
    // Тук ще добавите логиката за изпращане на формата
  }
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fef7f0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #ff9a73, #ffc09f);
    color: white;
    padding: 60px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Service Selection */
  .service-tabs {
    display: flex;
    justify-content: center;
    margin: 40px 0;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tab-button {
    padding: 12px 24px;
    border: 2px solid #ff9a73;
    background: white;
    color: #ff9a73;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .tab-button:hover,
  .tab-button.active {
    background: #ff9a73;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.3);
  }

  /* Content Sections */
  .content-section {
    background: white;
    margin: 30px 0;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    color: #ff9a73;
    font-size: 2rem;
    margin-bottom: 30px;
    font-weight: 600;
  }

  .subsection {
    margin-bottom: 30px;
  }

  .subsection h3 {
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .subsection p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 15px;
  }

  .subsection ul {
    color: #666;
    line-height: 1.7;
    padding-left: 20px;
  }

  .subsection li {
    margin-bottom: 8px;
  }

  /* Highlight Box */
  .highlight-box {
    background: linear-gradient(135deg, #fff5f0, #ffeee6);
    border-left: 5px solid #ff9a73;
    padding: 25px;
    margin: 25px 0;
    border-radius: 10px;
  }

  .highlight-box h4 {
    color: #ff9a73;
    margin-bottom: 15px;
    font-weight: 600;
  }

  /* When to Visit Section */
  .conditions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .condition-card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid #eee;
    transition: all 0.3s ease;
  }

  .condition-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .condition-card h4 {
    color: #ff9a73;
    margin-bottom: 10px;
    font-weight: 600;
  }

  /* Contact Form */
  .contact-form {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 40px 0;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #eee;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #ff9a73;
  }

  .form-group textarea {
    resize: vertical;
    height: 120px;
  }

  .submit-btn {
    background: linear-gradient(135deg, #ff9a73, #ffc09f);
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    margin: 30px auto 0;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 154, 115, 0.3);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1.1rem;
    }

    .content-section {
      padding: 20px;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .service-tabs {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<main>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Консултация, диагностика и оценка</h1>
        <p>Професионална подкрепа и грижа за вашето дете. Започваме с усмивка и разбиране - заедно към успешното развитие!</p>
      </div>
    </div>
  </section>

  <div class="container">
    <!-- Service Selection Tabs -->
    <div class="service-tabs">
      <button 
        class="tab-button {selectedService === 'consultation' ? 'active' : ''}"
        on:click={() => selectService('consultation')}
      >
        Логопедична консултация
      </button>
      <button 
        class="tab-button {selectedService === 'diagnosis' ? 'active' : ''}"
        on:click={() => selectService('diagnosis')}
      >
        Логопедична диагностика
      </button>
    </div>

    <!-- Consultation Content -->
    {#if selectedService === 'consultation'}
      <div class="content-section">
        <h2 class="section-title">Логопедична консултация</h2>
        
        <div class="subsection">
          <h3>Какво е логопедична консултация?</h3>
          <p>Логопедичната консултация е първата крачка към разбиране, подкрепа и уверен напредък. Силата е в ранната помощ. Започваме с усмивка и грижа – заедно!</p>
          <p>Тя е първата среща, в която се запознаваме с Вашето дете и неговото езиково-говорно развитие. Провеждат се кратки наблюдения на детето и разговори с Вас, проследява се развитието на детето още по време на бремеността, раждането до актуалната му възраст.</p>
        </div>

        <div class="subsection">
          <h3>Какво включва консултацията?</h3>
          <ul>
            <li><strong>Разговор с родителя</strong> за притеснения, тревожни моменти, наблюдения и история на развитието на детето</li>
            <li><strong>Игрови задачи с детето</strong> с цел предразполагане в обстановката за наблюдение и проверка на разбиране, изразяване, внимание и др.</li>
            <li><strong>Обсъждане и препоръки:</strong> необходимо ли е допълнително проследяване, терапия или допълнително подпомагане в домашна обстановка</li>
          </ul>
        </div>

        <div class="highlight-box">
          <h4>Каква е целта?</h4>
          <p>Целта не е да се постави "диагноза" веднага, а да се получи ясна картина за най-доброто на детето: дали детето има нужда от логопедична подкрепа – и каква точно.</p>
        </div>

        <div class="subsection">
          <h3>Как да се подготвим за консултацията?</h3>
          <ul>
            <li>Подгответе кратка информация за езиково-говорното развитие на детето в отделните възрастови периоди</li>
            <li>Помислете и споделете с логопеда Вашата тревожност за детето</li>
            <li>Ако имате документи (мнения от специалисти), доносете ги</li>
            <li>Позволете на детето да вземе любимата си играчка - тя помага на детето да се отпусне</li>
            <li>Детето не е нужно „да се представя добре" – ние сме тук да го разберем, не да го оценим</li>
          </ul>
        </div>
      </div>
    {/if}

    <!-- Diagnosis Content -->
    {#if selectedService === 'diagnosis'}
      <div class="content-section">
        <h2 class="section-title">Логопедична диагностика</h2>
        
        <div class="subsection">
          <p>Логопедична диагностика е систематичен процес на оценка на езиково-говорното развитие и комуникативните умения на дете или възрастен, с цел да се установи:</p>
          <ul>
            <li>Дали е налице езиково-говорен дефицит</li>
            <li>Каква е причината и степента на затруднението</li>
            <li>Каква терапия или подкрепа е най-подходяща за детето/възрастния</li>
          </ul>
        </div>

        <div class="subsection">
          <h3>Кога да се обърнете към логопед за диагностика?</h3>
          <div class="conditions-grid">
            <div class="condition-card">
              <h4>Езикови нарушения</h4>
              <p>Общо недоразвитие на речта - детето не говори или говори малко за възрастта си. Речта е неразбираема.</p>
            </div>
            
            <div class="condition-card">
              <h4>Разбиране и комуникация</h4>
              <p>Не разбира словесни инструкции и използва жестове, мимики вместо думи.</p>
            </div>
            
            <div class="condition-card">
              <h4>Артикулационни проблеми</h4>
              <p>Затруднения при артикулация на звуковете – изопачава, заменя или пропуска звукове.</p>
            </div>
            
            <div class="condition-card">
              <h4>Плавност на говора</h4>
              <p>Нарушена плавност и ритъм на говора (заекване, клътеринг).</p>
            </div>
            
            <div class="condition-card">
              <h4>Обучителни затруднения</h4>
              <p>Дислексия, дисграфия, дискалкулия и други специфични обучителни затруднения.</p>
            </div>
            
            <div class="condition-card">
              <h4>ХАДВ</h4>
              <p>Хиперактивност и дефицит на вниманието; неустойчива или слаба концентрация.</p>
            </div>
            
            <div class="condition-card">
              <h4>Неврологични състояния</h4>
              <p>Разстройства от аутистичния спектър, ДЦП, дизатрии, апраксии, синдроми и др.</p>
            </div>
            
            <div class="condition-card">
              <h4>Билингвизъм</h4>
              <p>Затруднения при деца, израстнали в билингвистична среда.</p>
            </div>
          </div>
        </div>

        <div class="highlight-box">
          <h4>След диагностиката</h4>
          <p>След логопедична диагностика се прави оценка на езиково-говорното развитие и се назначава персонализирана терапевтична програма за развитие на детето. Назначават се терапевтични сесии, включващи целите и задачите, посочени в терапевтичната програма.</p>
        </div>
      </div>
    {/if}

    <!-- Contact Form -->
    <div class="contact-form">
      <h2 class="section-title">Запазете час за консултация</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Име *</label>
            <input type="text" id="name" bind:value={formData.name} required />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" bind:value={formData.email} required />
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="phone">Телефон *</label>
            <input type="tel" id="phone" bind:value={formData.phone} required />
          </div>
          <div class="form-group">
            <label for="age">Възраст на детето</label>
            <select id="age" bind:value={formData.age}>
              <option value="">Изберете възраст</option>
              <option value="0-2">0-2 години</option>
              <option value="3-5">3-5 години</option>
              <option value="6-8">6-8 години</option>
              <option value="9-12">9-12 години</option>
              <option value="13+">13+ години</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Опишете накратко притесненията или въпросите си</label>
          <textarea id="message" bind:value={formData.message} placeholder="Споделете с нас какво Ви притеснява..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Изпрати заявка</button>
      </form>
    </div>
  </div>
</main>