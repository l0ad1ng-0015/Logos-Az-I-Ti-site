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
  /* .hero {
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
  } */

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
    text-align: center;
  }

  .subsection {
    margin-bottom: 35px;
  }

  .subsection h3 {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    border-left: 4px solid #ff9a73;
    padding-left: 15px;
  }

  .subsection h4 {
    color: #555;
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .subsection p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 15px;
    font-size: 1rem;
  }

  .subsection ul {
    color: #666;
    line-height: 1.7;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .subsection li {
    margin-bottom: 8px;
    position: relative;
  }

  .subsection li strong {
    color: #333;
  }

  /* Highlight Box */
  .highlight-box {
    background: linear-gradient(135deg, #fff5f0, #ffeee6);
    border-left: 5px solid #ff9a73;
    padding: 25px;
    margin: 25px 0;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.1);
  }

  .highlight-box h4 {
    color: #ff9a73;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .highlight-box p {
    color: #555;
    margin-bottom: 10px;
  }

  .highlight-box ul {
    color: #555;
    margin-bottom: 0;
  }

  /* Important Note Box */
  .important-note {
    background: linear-gradient(135deg, #e8f5e8, #d4f1d4);
    border-left: 5px solid #4caf50;
    padding: 20px;
    margin: 25px 0;
    border-radius: 10px;
    font-style: italic;
  }

  .important-note p {
    color: #2e7d32;
    margin: 0;
    font-weight: 500;
  }

  /* When to Visit Section */
  .conditions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin: 30px 0;
  }

  .condition-card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    border: 1px solid #eee;
    transition: all 0.3s ease;
    position: relative;
  }

  .condition-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #ff9a73;
    border-radius: 15px 0 0 15px;
  }

  .condition-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .condition-card h4 {
    color: #ff9a73;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .condition-card p {
    margin-bottom: 10px;
    color: #666;
  }

  .condition-card ul {
    color: #666;
    margin: 0;
  }

  /* Diagnosis Process */
  .process-steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0;
  }

  .process-step {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  .process-step:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .step-number {
    background: #ff9a73;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }

  .step-content h4 {
    color: #333;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .step-content p {
    color: #666;
    margin: 0;
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

  /* Numbered List */
  .numbered-list {
    counter-reset: item;
    padding-left: 0;
  }

  .numbered-list li {
    display: block;
    margin-bottom: 15px;
    padding-left: 40px;
    position: relative;
  }

  .numbered-list li::before {
    content: counter(item);
    counter-increment: item;
    background: #ff9a73;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
  }

  /* Therapy Info Box */
  .therapy-info {
    background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
    border: 2px solid #2196f3;
    border-radius: 15px;
    padding: 25px;
    margin: 30px 0;
  }

  .therapy-info h4 {
    color: #1976d2;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .therapy-info p {
    color: #424242;
    margin-bottom: 10px;
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

    .conditions-grid {
      grid-template-columns: 1fr;
    }

    .process-step {
      flex-direction: column;
      text-align: center;
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
          <p>Логопедичната консултация е първата крачка към разбиране, подкрепа и уверен напредък. <strong>Силата е в ранната помощ.</strong> Започваме с усмивка и грижа – заедно!</p>
          <p>Тя е първата среща, в която се запознаваме с Вашето дете и неговото езиково-говорно развитие. Провеждат се кратки наблюдения на детето и разговори с Вас, проследява се развитието на детето още по време на бремеността, раждането до актуалната му възраст.</p>
        </div>

        <div class="subsection">
          <h3>Какво включва консултацията?</h3>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Разговор с родителя</h4>
                <p>За притеснения, тревожни моменти, наблюдения и история на развитието на детето.</p>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Игрови задачи с детето</h4>
                <p>С цел предразполагане в обстановката за наблюдение и проверка на разбиране, изразяване, внимание и др.</p>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Обсъждане и препоръки</h4>
                <p>Необходимо ли е допълнително проследяване, терапия или допълнително подпомагане в домашна обстановка.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="highlight-box">
          <h4>Каква е целта?</h4>
          <p>Целта не е да се постави "диагноза" веднага, а да се получи ясна картина за най-доброто на детето: дали детето има нужда от логопедична подкрепа – и каква точно.</p>
        </div>

        <div class="subsection">
          <h3>Как да се подготвим за логопедичната консултация?</h3>
          <ul class="numbered-list">
            <li>Подгответе кратка информация за езиково-говорното развитие на детето в отделните възрастови периоди (пример - очен контакт, лепетна реч, гукане, сядане, прохождане, разбиране на прости словесни инструкции, първи думи, изречения, хранене и тн.)</li>
            <li>Помислете и споделете с логопеда Вашата тревожност за детето (разбиране, звукове, думи, ситуации и тн.)</li>
            <li>Ако имате документи (мнения от специалисти), доносете ги</li>
            <li>Позволете на детето да вземе любимата си играчка с него – тя помага на детето да се отпусне в непознатата за него обстановка</li>
          </ul>
          
          <div class="important-note">
            <p><strong>Важно:</strong> Детето не е нужда „да се представя добре" – ние сме тук да го разберем, не да го оценим.</p>
          </div>
        </div>
      </div>
    {/if}

    <!-- Diagnosis Content -->
    {#if selectedService === 'diagnosis'}
      <div class="content-section">
        <h2 class="section-title">Логопедична диагностика</h2>
        
        <div class="subsection">
          <p><strong>Логопедична диагностика</strong> е систематичен процес на оценка на езиково-говорното развитие и комуникативните умения на дете или възрастен, с цел да се установи:</p>
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
              <h4>Нарушения на езиковата система</h4>
              <p><strong>Общо недоразвитие на речта:</strong></p>
              <ul>
                <li>Детето не говори или говори малко за възрастта си</li>
                <li>Речта е неразбираема</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Разбиране и комуникация</h4>
              <ul>
                <li>Не разбира словесни инструкции</li>
                <li>Използва жестове, мимики вместо думи</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Артикулационни проблеми</h4>
              <p>Затруднения при артикулация на звуковете:</p>
              <ul>
                <li>Изопачава звукове</li>
                <li>Заменя или пропуска звукове</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Плавност и ритъм на говора</h4>
              <ul>
                <li>Заекване</li>
                <li>Клътеринг</li>
                <li>Нарушена плавност на говора</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Дисфазия</h4>
              <ul>
                <li>Експресивен тип</li>
                <li>Импресивно-експресивен тип</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Обучителни затруднения</h4>
              <p><strong>Дислексия на развитието:</strong></p>
              <ul>
                <li>Специфични обучителни затруднения – четене, писане</li>
                <li>Дисграфия, дискалкулия и др.</li>
                <li>Затруднения в обучителния процес</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>ХАДВ</h4>
              <p><strong>Хиперактивност и дефицит на вниманието:</strong></p>
              <ul>
                <li>Неустойчива концентрация на вниманието</li>
                <li>Слаба концентрация на вниманието</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Неврологични състояния</h4>
              <ul>
                <li>Разстройства от аутистичния спектър</li>
                <li>ДЦП</li>
                <li>Дизатрии, апраксии</li>
                <li>Синдроми и др.</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Травми и придобити нарушения</h4>
              <p>Загуба на говор вследствие на травма:</p>
              <ul>
                <li>Афазии</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Моторни затруднения</h4>
              <ul>
                <li>Затруднения в развитието на грубата моторика</li>
                <li>Затруднения в развитието на фината моторика</li>
                <li>RMTI обучения</li>
              </ul>
            </div>
            
            <div class="condition-card">
              <h4>Билингвизъм</h4>
              <p>Затруднения при деца, израстнали в билингвистична среда.</p>
            </div>
          </div>
        </div>

        <div class="highlight-box">
          <h4>Как се извършва диагностиката?</h4>
          <p>Диагностиката се извършва с тестови батерии, включващи диагностични маркери, съобразени с възрастта на детето, вид и специфичността на затруднението.</p>
        </div>

        <div class="therapy-info">
          <h4>След логопедична диагностика</h4>
          <p>След логопедична диагностика се прави оценка на езиково-говорното развитие и се назначава персонализирана терапевтична програма за развитие на детето.</p>
          <p>Назначават се терапевтични сесии, включващи целите и задачите, посочени в терапевтичната програма. Сесиите могат да се провеждат два или три пъти седмично в зависимост от степента на нарушението.</p>
        </div>
      </div>
    {/if}

    <!-- Contact Form -->
    <div class="contact-form">
      <h2 class="section-title">Запазете час за консултация</h2>
      <p style="text-align: center; color: #666; margin-bottom: 30px;">Свържете се с нас, за да започнем пътуването към по-добрата комуникация заедно!</p>
      
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
              <option value="adult">Възрастен</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Опишете накратко притесненията или въпросите си</label>
          <textarea id="message" bind:value={formData.message} placeholder="Споделете с нас какво Ви притеснява относно развитието на детето, какви затруднения забелязвате или каква подкрепа търсите..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Изпрати заявка за консултация</button>
      </form>
    </div>
  </div>
</main>