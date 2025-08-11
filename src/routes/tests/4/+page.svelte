<script>
  // You can add any reactive logic here if needed
  let isVisible = true;
</script>

<div class="page">
  <div class="header-section">
    <div class="header-content">
      <h1>Ранна превенция</h1>
      <p>Защо е важна ранната превенция? Ранната превенция е първата и най-важна крачка в подкрепата на детето още преди да се появят сериозни езиково-говорни трудности.</p>
    </div>
  </div>

  <div class="container">
    <div class="main-content">
      <div class="intro-section">
        <h2>
          <span class="icon">🌱</span>
          Какво е ранната превенция?
        </h2>
        <p>Ранната превенция не е диагноза, не е терапия – а навременна грижа и насока към правилното развитие. Това е възможност да подкрепим детето в най-важния период на неговото развитие.</p>
        
        <div class="age-info">
          <strong>Важен период:</strong> В периода до 5 години мозъкът се развива интензивно. Това е времето, когато децата започват да разбират, да говорят, да общуват и изграждат когнитивни умения.
        </div>
      </div>

      <div class="benefits-grid">
        <div class="benefit-card">
          <h3>
            <span class="number">1</span>
            Ранното развитие е ключово
          </h3>
          <p>В периода до 5 години децата:</p>
          <ul class="key-points">
            <li>Започват да разбират, да говорят, да общуват</li>
            <li>Изграждат когнитивни умения (внимание, памет, мислене)</li>
            <li>„Попиват" езика чрез игра, общуване и близост</li>
          </ul>
        </div>

        <div class="benefit-card">
          <h3>
            <span class="number">2</span>
            Не е диагноза, а подкрепа
          </h3>
          <p>Чрез наблюдение, игрови задачи и консултация логопедът може да:</p>
          <ul class="key-points">
            <li>Оцени нивото на развитие</li>
            <li>Даде идеи за игри и езиково стимулиране</li>
            <li>Предложи насоки за подкрепа</li>
            <li>При нужда – препоръча допълнителна оценка</li>
          </ul>
        </div>

        <div class="benefit-card">
          <h3>
            <span class="number">3</span>
            Подкрепя цялото семейство
          </h3>
          <p>Родителят получава:</p>
          <ul class="key-points">
            <li>Спокойствие чрез експертна оценка</li>
            <li>Отговори на въпросите си</li>
            <li>Индивидуални препоръки за дома</li>
            <li>Усещане, че не е сам в грижата за детето</li>
          </ul>
        </div>
      </div>

      <div class="highlight-section">
        <h3>Защо превенцията е толкова важна?</h3>
        <p>Превенцията дава яснота и възможност за реакция. Тя ще Ви помогне да избегнете колебанията си и ще Ви даде отговор на въпроси като: „Да изчакам ли?", „Дали това е нормално?"</p>
        
        <div class="benefits-explanation">
          <strong>Превенцията помага да:</strong>
          <ul class="key-points">
            <li>Се избегне натрупване на трудности, които често водят до сериозни проблеми</li>
            <li>Не се губи време, което е ценно за развитието на детето</li>
            <li>Се изгради увереност в общуването и самочувствие</li>
            <li>Се осигури успешна адаптация в детска градина и училище</li>
            <li>Се развият езиково-говорни, когнитивни и социални умения</li>
          </ul>
        </div>
      </div>

      <div class="cta-section">
        <h3>Готови за първата крачка?</h3>
        <p>Превенцията е ключът към навременната подкрепа на детското развитие. Колкото по-рано се открият и насочат особеностите в развитието, толкова по-лесно и уверено детето ще изгради своите комуникативни умения.</p>
        <button class="cta-button" on:click={() => alert('Записване на консултация')}>
          Запишете консултация
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    font-family: 'Arial', sans-serif;
    background-color: #faf8f6;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  .header-section {
    background: linear-gradient(135deg, #ff9d6b, #ffb380);
    color: white;
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .header-section::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .header-section::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
  }

  .header-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .header-content h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .header-content p {
    font-size: 1.1rem;
    opacity: 0.95;
    max-width: 600px;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .main-content {
    padding: 60px 0;
  }

  .intro-section {
    background: white;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .intro-section h2 {
    color: #ff9d6b;
    font-size: 1.8rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .icon {
    width: 40px;
    height: 40px;
    background: #ff9d6b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 40px 0;
  }

  .benefit-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .benefit-card h3 {
    color: #ff9d6b;
    font-size: 1.3rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .benefit-card .number {
    background: #ff9d6b;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .highlight-section {
    background: linear-gradient(135deg, #fff5f0, #ffe8d9);
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
    border-left: 5px solid #ff9d6b;
  }

  .highlight-section h3 {
    color: #ff9d6b;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .benefits-explanation {
    margin-top: 20px;
  }

  .key-points {
    list-style: none;
    padding-left: 0;
    margin-top: 15px;
  }

  .key-points li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;
  }

  .key-points li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #ff9d6b;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .cta-section {
    background: #ff9d6b;
    color: white;
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    margin-top: 50px;
  }

  .cta-section h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .cta-section p {
    margin-bottom: 25px;
    font-size: 1.1rem;
    opacity: 0.95;
  }

  .cta-button {
    display: inline-block;
    background: white;
    color: #ff9d6b;
    padding: 15px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: 2px solid white;
    cursor: pointer;
  }

  .cta-button:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
  }

  .age-info {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    border-left: 4px solid #ff9d6b;
  }

  @media (max-width: 768px) {
    .header-content h1 {
      font-size: 2rem;
    }
    
    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .intro-section, .benefit-card, .highlight-section, .cta-section {
      padding: 25px;
    }
    
    .header-section {
      padding: 40px 20px;
    }
  }
</style>