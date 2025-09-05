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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .service-subtitle {
    color: #666;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }

  .service-list {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }

  .service-list li {
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
  }

  .service-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ff9a56;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .highlight-box {
    background: linear-gradient(135deg, #ff9a56, #ff7729);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .highlight-box h4 {
    margin-top: 0;
  }

  .age-groups {
    background: #f8f6f2;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .goals-section {
    background: #e8f4f8;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .contact-info {
    background: #fff3e0;
    padding: 25px;
    border-radius: 15px;
    margin: 30px 0;
    border: 2px solid #ff9a56;
  }

  .contact-info h4 {
    color: #ff9a56;
    margin-top: 0;
  }

  .contact-methods {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .contact-btn {
    background: #ff9a56;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s;
  }

  .contact-btn:hover {
    background: #e8854a;
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
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
    }

    .contact-methods {
      flex-direction: column;
    }
  }
</style>

<!-- Hero секция -->
<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Подпомагане и обучения</h1>
    <p class="hero-subtitle">
      Професионална подкрепа за деца в предучилищна и начална училищна възраст, 
      чуждоезиково обучение и специализирани програми за студенти, родители и специалисти.
    </p>
  </div>
</section>

<div class="container">
  <!-- Услуги секция -->
  <section class="content-section">
    <h2 class="section-title">Нашите услуги</h2>
    
    <div class="services-grid">
      <!-- Подпомагане на деца -->
      <div class="service-card">
        <h3 class="service-title">Подпомагане на деца в предучилищна и начална училищна възраст</h3>
        <ul class="service-list">
          <li>Преодоляване проблемите в обучителния процес и повишаване на знанията, уменията и компетенциите на децата</li>
          <li>Допълващи терапии и обучения на деца в предучилищна и начална училищна възраст</li>
          <li>Подпомагане на учебния процес по български език и литература и математика в начален и среден курс на обучение</li>
          <li>Подпомагане на учебния процес по английски език</li>
          <li>Оценка на училищната готовност на децата и подготовка за постъпване в училище</li>
        </ul>
      </div>

      <!-- Чуждоезиково обучение -->
      <div class="service-card">
        <h3 class="service-title">Чуждоезиково обучение по английски език</h3>
        
        <p>Допълнителна образователна дейност насочена към постигане на сертификатни нива към Cambridge Assessment English.</p>
        
        <div class="highlight-box">
          <p><strong>🧑‍🏫 Преподаватели:</strong> Висококвалифицирани преподаватели с опит в преподаването на английски език в различни възрастови групи и с професионални квалификации за работа по международни езикови стандарти.</p>
        </div>

        <h4 class="service-subtitle">📚 Как протича обучението:</h4>
        <ul class="service-list">
          <li><strong>Период:</strong> от 1 октомври до 31 май</li>
          <li><strong>Честота:</strong> 2 пъти седмично по 2 учебни часа</li>
          <li><strong>Общо натоварване:</strong> 16 учебни часа на месец / 128 часа за учебната година</li>
          <li><strong>Входящ тест:</strong> за определяне на индивидуалното езиково ниво при постъпване</li>
        </ul>

        <div class="age-groups">
          <h4 class="service-subtitle">👥 Възрастови групи:</h4>
          <ul class="service-list">
            <li><strong>Предучилищна възраст (5–6 г.):</strong> ранно чуждоезиково обучение чрез игри, песни и комуникативни дейности</li>
            <li><strong>Начален етап (1-4 клас):</strong> изграждане на стабилна езикова основа чрез интерактивни методи</li>
            <li><strong>Тийнейджъри (5-12 клас):</strong> целенасочена подготовка по нива на Общата европейска езикова рамка (А1–B2), с възможност за полагане на изпити към Cambridge</li>
            <li><strong>Възрастни:</strong> практическо овладяване на езика за лични, академични или професионални цели по утвърдени международни методики</li>
          </ul>
        </div>

        <div class="goals-section">
          <h4 class="service-subtitle">🎯 Цели на обучението:</h4>
          <ul class="service-list">
            <li>Развитие на четирите основни езикови компонента: слушане, говорене, четене и писане</li>
            <li>Усвояване на богат речников запас и граматични структури, съобразени с нивото</li>
            <li>Стимулиране на уверено устно изразяване чрез ролеви игри, диалози, презентации и фестиволни уроци</li>
            <li>Подготовка за международно признати сертификати (YLE Starters, Movers, Flyers; A2 Key; B1 Preliminary; B2 First)</li>
            <li>Насърчаване на самостоятелност и мотивация за учене чрез интерактивни методи и персонализиран подход</li>
          </ul>
        </div>

        <div class="highlight-box">
          <p><strong>💡 Нашият подход:</strong> Обучението съчетава традиционни и съвременни подходи, за да отговори на индивидуалните нужди на всеки курсист, независимо от възрастта или началното ниво. Атмосферата е подкрепяща и вдъхновяваща с фокус върху ефективното и уверено използване на английски език в реални ситуации.</p>
        </div>
      </div>

      <!-- Обучения за специалисти -->
      <div class="service-card">
        <h3 class="service-title">Обучения за студенти, родители и специалисти</h3>
        <p>Предлагаме специализирани програми и семинари, насочени към различни целеви групи в областта на образованието и детското развитие.</p>
        
        <ul class="service-list">
          <li>Обучения за родители по детска психология и развитие</li>
          <li>Семинари за учители и специалисти в образованието</li>
          <li>Курсове за студенти в областта на психологията и педагогиката</li>
          <li>Работилници за развитие на родителски умения</li>
          <li>Специализирани програми за работа с деца със специални потребности</li>
        </ul>
      </div>
    </div>

    <!-- Контактна информация -->
    <div class="contact-info">
      <h4>📩 Имате въпроси или желаете да запишете детето си?</h4>
      <p>Свържете се с нас за повече информация относно програмата, графика или входящия тест:</p>
      
      <div class="contact-methods">
        <a href="#contact-form" class="contact-btn">📝 Изпратете запитване</a>
        <a href="tel:0876860602" class="contact-btn">📞 0876 860 602</a>
        <a href="mailto:logos_aziti@abv.bg" class="contact-btn">📧 logos_aziti@abv.bg</a>
      </div>
      
      <p><strong>Нашият екип с радост ще отговори на всички въпроси и ще ви насочи към най-подходящото ниво за Вашето дете!</strong></p>
    </div>
  </section>

  <!-- Форма за контакт -->
  <section id="contact-form" class="form-section">
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
          <label for="service">Интересувам се от *</label>
          <select id="service" bind:value={formData.service} required>
            <option value="">Изберете услуга</option>
            <option value="preschool-support">Подпомагане на деца (предучилищна възраст)</option>
            <option value="school-support">Подпомагане на деца (начална училищна възраст)</option>
            <option value="english-preschool">Английски език (5-6 години)</option>
            <option value="english-primary">Английски език (1-4 клас)</option>
            <option value="english-teens">Английски език (5-12 клас)</option>
            <option value="english-adults">Английски език за възрастни</option>
            <option value="parent-training">Обучения за родители</option>
            <option value="specialist-training">Обучения за специалисти</option>
            <option value="other">Друго</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">Съобщение</label>
        <textarea id="message" bind:value={formData.message} placeholder="Опишете накратко вашите нужди или задайте въпрос..."></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Изпрати запитване</button>
    </form>
  </section>
</div>