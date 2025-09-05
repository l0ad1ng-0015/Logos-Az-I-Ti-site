<script>
  // Форма данни
  let formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  // Функция за изпращане на формата
  function handleSubmit() {
    console.log('Форма изпратена:', formData);
    // Тук ще бъде логиката за изпращане
    alert('Вашето запитване е изпратено успешно!');
  }
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f1eb;
  }

  .hero-section {
    background: linear-gradient(135deg, #ff9a56, #ff7729);
    color: white;
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    bottom: 30px;
    right: 100px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .content-section {
    padding: 60px 0;
  }

  .section-title {
    color: #ff9a56;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }

  .service-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #ff9a56;
  }

  .service-title {
    color: #333;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .service-list {
    list-style: none;
    padding: 0;
  }

  .service-list li {
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
  }

  .service-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #ff9a56;
    font-weight: bold;
  }

  .process-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    margin: 40px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .step {
    text-align: center;
    padding: 20px;
  }

  .step-number {
    background: #ff9a56;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-weight: bold;
  }

  .specialist-section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: start;
  }

  .specialist-card {
    background: white;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .specialist-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #ddd;
    margin: 0 auto 20px;
  }

  .specialist-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .specialist-title {
    color: #666;
    margin-bottom: 20px;
  }

  .contact-btn {
    background: #ff9a56;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s;
  }

  .contact-btn:hover {
    background: #e8854a;
  }

  .qualifications {
    background: #f8f6f2;
    padding: 30px;
    border-radius: 15px;
    margin-top: 20px;
  }

  .qualification-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .qualification-icon {
    background: #ff9a56;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 0.8rem;
  }

  .form-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    margin-top: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #ff9a56;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .submit-btn {
    background: #ff9a56;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    display: block;
    margin: 20px auto 0;
  }

  .submit-btn:hover {
    background: #e8854a;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .specialist-section {
      grid-template-columns: 1fr;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero секция -->
<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Консултация, диагностика и оценка</h1>
    <p class="hero-subtitle">
      Професионална психологическа диагностика и консултации за деца, тийнейджъри и възрастни. 
      Индивидуален подход за разкриване на потенциала и преодоляване на предизвикателствата.
    </p>
  </div>
</section>

<div class="container">
  <!-- Какво предлагаме секция -->
  <section class="content-section">
    <h2 class="section-title">Какво предлагаме</h2>
    
    <div class="services-grid">
      <div class="service-card">
        <h3 class="service-title">Психологическа диагностика за деца</h3>
        <ul class="service-list">
          <li>Диагностика на познавателни способности</li>
          <li>Оценка на емоционалното развитие</li>
          <li>Диагностика на училищната готовност</li>
          <li>Оценка на речевото развитие</li>
          <li>Диагностика на вниманието и концентрацията</li>
          <li>Оценка на социалните умения</li>
        </ul>
      </div>

      <div class="service-card">
        <h3 class="service-title">Консултации за родители</h3>
        <ul class="service-list">
          <li>Консултиране по въпроси на детското развитие</li>
          <li>Съвети за справяне с поведенчески проблеми</li>
          <li>Подкрепа при семейни кризи</li>
          <li>Консултации за родителски умения</li>
          <li>Подготовка за важни жизнени промени</li>
          <li>Работа с тревожност и стрес</li>
        </ul>
      </div>

      <div class="service-card">
        <h3 class="service-title">Оценка на училищни трудности</h3>
        <ul class="service-list">
          <li>Диагностика на дислексия и дисграфия</li>
          <li>Оценка на математически трудности</li>
          <li>Диагностика на ADHD и ADD</li>
          <li>Оценка на аутистичен спектър</li>
          <li>Диагностика на интелектуални способности</li>
          <li>Препоръки за образователна подкрепа</li>
        </ul>
      </div>

      <div class="service-card">
        <h3 class="service-title">Консултации за тийнейджъри</h3>
        <ul class="service-list">
          <li>Подкрепа при емоционални трудности</li>
          <li>Консултиране за професионална ориентация</li>
          <li>Работа с тревожност и депресия</li>
          <li>Подкрепа при проблеми в отношенията</li>
          <li>Консултации за самооценка и увереност</li>
          <li>Справяне със стрес от изпити</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Как протича процесът -->
  <section class="process-section">
    <h2 class="section-title">Как протича процесът?</h2>
    
    <div class="process-steps">
      <div class="step">
        <div class="step-number">1</div>
        <h4>Първоначална консултация</h4>
        <p>Запознаваме се с проблема и определяме необходимите диагностични процедури</p>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <h4>Диагностична оценка</h4>
        <p>Прилагаме специализирани тестове и методи за цялостна оценка</p>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <p>Анализ и интерпретация</p>
        <p>Анализираме резултатите и подготвяме подробен доклад</p>
      </div>
      
      <div class="step">
        <div class="step-number">4</div>
        <h4>Консултация и препоръки</h4>
        <p>Обсъждаме резултатите и предоставяме конкретни препоръки за подкрепа</p>
      </div>
    </div>
  </section>

  <!-- Нашият специалист -->
  <section class="content-section">
    <h2 class="section-title">Нашият специалист</h2>
    
    <div class="specialist-section">
      <div class="specialist-card">
        <div class="specialist-photo"></div>
        <div class="specialist-name">Мария-Паола Тулуи</div>
        <div class="specialist-title">Клиничен психолог</div>
        
        <button class="contact-btn">📧 mptului@gmail.com</button>
        <button class="contact-btn">📞 +359 876 860 602</button>
        
        <div class="qualifications">
          <h4>Професионални квалификации, обучения, сертификати и участия в семинари:</h4>
          
          <div class="qualification-item">
            <div class="qualification-icon">✓</div>
            <span>Магистър по клинична психология - специализация към УНСС в партньорство с Лондонски университет</span>
          </div>
          
          <div class="qualification-item">
            <div class="qualification-icon">✓</div>
            <span>Сертификат за клинична психотерапия на деца към София Медикал - завършена 4-годишна програма с множество супервизии</span>
          </div>
          
          <div class="qualification-item">
            <div class="qualification-icon">✓</div>
            <span>Множество специализирани обучения за работа с деца в различни области на развитието</span>
          </div>
          
          <div class="qualification-item">
            <div class="qualification-icon">✓</div>
            <span>Повече от 15 години опит в областта на детската и клиничната психология</span>
          </div>
        </div>
      </div>

      <div>
        <h3>За мен като специалист</h3>
        <p>
          Като магистър по клинична психология с над 15 години опит, съм специализирана в работата с деца, тийнейджъри и техните семейства. Моята мисия е да подкрепя всяко дете в откриването на собствения му потенциал и преодоляването на предизвикателствата в развитието.
        </p>
        
        <p>
          Работя с разнообразни случаи - от училищни трудности и поведенчески проблеми до емоционални предизвикателства и семейни кризи. Използвам съвременни диагностични методи и терапевтични подходи, адаптирани към индивидуалните нужди на всеки клиент.
        </p>
        
        <p>
          Вярвам в партньорството с родителите и семейството като основа за успешната работа. Всяка консултация и диагностика се провежда в топла, подкрепяща атмосфера, където детето се чувства сигурно и разбрано.
        </p>

        <h4>Специализирани области:</h4>
        <ul class="service-list">
          <li>Диагностика и терапия на училищни трудности</li>
          <li>Работа с деца с ADHD и аутистичен спектър</li>
          <li>Емоционална подкрепа за деца и тийнейджъри</li>
          <li>Семейно консултиране</li>
          <li>Професионална ориентация</li>
          <li>Кризисна интервенция</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Форма за контакт -->
  <section class="form-section">
    <h2 class="section-title">Свържете се с нас</h2>
    
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-grid">
        <div class="form-group">
          <label for="name">Име *</label>
          <input type="text" id="name" bind:value={formData.name} required>
        </div>
        
        <div class="form-group">
          <label for="email">Имейл *</label>
          <input type="email" id="email" bind:value={formData.email} required>
        </div>
      </div>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="phone">Телефон *</label>
          <input type="tel" id="phone" bind:value={formData.phone} required>
        </div>
        
        <div class="form-group">
          <label for="service">Услуга *</label>
          <select id="service" bind:value={formData.service} required>
            <option value="">Изберете услуга</option>
            <option value="child-diagnosis">Психологическа диагностика за деца</option>
            <option value="parent-consultation">Консултации за родители</option>
            <option value="school-difficulties">Оценка на училищни трудности</option>
            <option value="teen-consultation">Консултации за тийнейджъри</option>
            <option value="other">Друго</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">Съобщение</label>
        <textarea id="message" bind:value={formData.message} placeholder="Опишете накратко за какво искате да се консултирате..."></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Изпрати запитване</button>
    </form>
  </section>
</div>