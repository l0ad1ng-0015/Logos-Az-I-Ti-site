<script>
  import { onMount } from 'svelte';
  
  let activeAccordion = null;
  
  const toggleAccordion = (index) => {
    activeAccordion = activeAccordion === index ? null : index;
  };
  
  const faqData = [
    {
      question: "Кога е необходима терапия?",
      answer: "ОМТ се препоръча при различни здравословни проблеми като нарушения при движение, болки в ставите, проблеми със заздравяването и възстановяването. Терапията е подходяща при нарушения в артикулацията на здравите стави, стресов синдром и други ортопедични състояния."
    },
    {
      question: "Как протича терапията?",
      answer: "В нашия кабинет провеждаме индивидуална оценка на ортопедичната мускулатура и функции. Специализираните упражнения за силна, устойчива, бързина и небезопасност включват различни техники. Работим върху заздравяването поставени в полза и то заема не повече време от една процедура."
    },
    {
      question: "Защо е важна терапията?",
      answer: "ОМТ не просто третира мускули - тя възстановява функционалната подвижност, която влияе на цялостното развитие. Това води до нарушения в общото, проблеми със заспиването и аскорбиновото здраве, диагностики и правене развитието."
    },
    {
      question: "Какви са противопоказанията?",
      answer: "При необходимост се съпреглежда с остеопатия, VHF специалисти, инфекциони и педиатри, или специалисти по силата влияни. Всеки случай се разглежда индивидуално."
    },
    {
      question: "Колко сеанса са необходими?",
      answer: "Броят на сеансите варира в зависимост от индивидуалните нужди и тежестта на състоянието. Обикновено се препоръчват между 8-12 сеанса, като първите резултати могат да се забележат след 3-4 процедури."
    },
    {
      question: "Има ли странични ефекти?",
      answer: "Остеоманипулативната терапия е безопасна процедура при правилното ѝ прилагане от квалифициран специалист. Понякога може да се появи лека умора или дискомфорт след първите сеанси, което е нормална реакция на организма."
    },
    {
      question: "Подходяща ли е терапията за деца?",
      answer: "Да, ОМТ е подходяща и за деца. Техниките се адаптират според възрастта и индивидуалните особености. При деца терапията помага при проблеми с координацията, постуралните нарушения и развитието на моторните умения."
    },
    {
      question: "Как да се подготвя за сеанс?",
      answer: "Препоръчва се да носите удобни дрехи, които позволяват свободно движение. Избягвайте тежка храна преди процедурата и информирайте терапевта за всички лекарства, които приемате."
    }
  ];
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #fff5f0 0%, #ffeee6 100%);
    min-height: 100vh;
  }

  .header {
    background: linear-gradient(135deg, #ff9a73 0%, #ff7f50 100%);
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
  }

  .header::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .header::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -30%;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
  }

  .header h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin: 15px 0 0 0;
    line-height: 1.5;
  }

  .faq-container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
  }

  .faq-title {
    color: #ff7f50;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
  }

  .faq-item {
    margin-bottom: 15px;
    border: 2px solid #fff2ee;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-item.active {
    border-color: #ff9a73;
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.2);
  }

  .faq-question {
    background: linear-gradient(135deg, #fff8f5 0%, #fff2ee 100%);
    padding: 20px 25px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  .faq-question:hover {
    background: linear-gradient(135deg, #fff2ee 0%, #ffede6 100%);
  }

  .faq-item.active .faq-question {
    background: linear-gradient(135deg, #ff9a73 0%, #ff7f50 100%);
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
  }

  .contact-section {
    background: linear-gradient(135deg, #fff5f0 0%, #ffeee6 100%);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    border: 2px solid #fff2ee;
  }

  .contact-title {
    color: #ff7f50;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .contact-text {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .contact-button {
    background: linear-gradient(135deg, #ff9a73 0%, #ff7f50 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }

  .contact-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 127, 80, 0.3);
  }

  @media (max-width: 768px) {
    .container {
      padding: 15px;
    }

    .header {
      padding: 30px 20px;
    }

    .header h1 {
      font-size: 2rem;
    }

    .faq-container {
      padding: 20px;
    }

    .faq-question {
      padding: 15px 20px;
      font-size: 1rem;
    }

    .faq-answer-content {
      padding: 20px;
    }
  }
</style>

<div class="container">
  <div class="header">
    <h1>Често задавани въпроси</h1>
    <p>Намерете отговори на най-често срещаните въпроси относно остеоманипулативната терапия</p>
  </div>

  <div class="faq-container">
    <h2 class="faq-title">Въпроси и отговори</h2>
    
    {#each faqData as faq, index}
      <div class="faq-item" class:active={activeAccordion === index}>
        <button 
          class="faq-question" 
          on:click={() => toggleAccordion(index)}
        >
          <span>{faq.question}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            {faq.answer}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="contact-section">
    <h3 class="contact-title">Не намерихте отговор на въпроса си?</h3>
    <p class="contact-text">
      Свържете се с нас директно и нашите специалисти ще отговорят на всички ваши въпроси относно остеоманипулативната терапия.
    </p>
    <a href="/contacts" class="contact-button">Свържете се с нас</a>
  </div>
</div>