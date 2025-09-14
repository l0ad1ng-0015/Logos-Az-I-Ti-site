<script>
  const testimonials = [
    {
      id: 1,
      name: "Мария Петрова",
      age: 34,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "След месеци болка в гърба, терапията на Марди-Паола направи истински чудеса. Вече мога да се движа свободно и да се грижа за семейството си без дискомфорт. Препоръчвам на всички!",
      problem: "Хронична болка в долния гръб",
      sessions: 10
    },
    {
      id: 2,
      name: "Иван Георгиев",
      age: 45,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "Като строител работя физически тежка работа всеки ден. ОМТ терапията ми помогна не само да се справя с болката, но и да предотвратя бъдещи проблеми. Професионалният подход е впечатляващ.",
      problem: "Мускулно напрежение в раменете",
      sessions: 8
    },
    {
      id: 3,
      name: "Елена Стоянова",
      age: 28,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "Работя в офис и имах постоянни главоболия заради лошата стойка. След терапията не само се почувствах по-добре, но и научих как да поддържам правилната си стойка ежедневно.",
      problem: "Главоболие и напрежение в шията",
      sessions: 6
    },
    {
      id: 4,
      name: "Георги Димитров",
      age: 52,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "След операция на коляното имах затруднения с движението. Терапията ми върна увереността и силата. Сега отново мога да се радвам на активен начин на живот.",
      problem: "Възстановяване след операция",
      sessions: 15
    },
    {
      id: 5,
      name: "Анна Николова",
      age: 41,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "Като майка на две деца постоянно се чувствах изтощена и с болка в гърба. Терапията ми даде нова енергия и възможността отново да се радвам на времето с децата си.",
      problem: "Постурални проблеми",
      sessions: 12
    },
    {
      id: 6,
      name: "Петър Василев",
      age: 39,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "Спортувам редовно, но контузия ме спря за месеци. Благодарение на професионалния подход и индивидуализираната терапия, се върнах в още по-добра форма от преди.",
      problem: "Спортна контузия",
      sessions: 14
    }
  ];
  
  const renderStars = (rating) => {
    return Array.from({length: 5}, (_, i) => i < rating ? '★' : '☆').join('');
  };
</script>

<style>
  .container {
    max-width: 1200px;
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
    position: relative;
    z-index: 1;
  }

  .header p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin: 15px 0 0 0;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .testimonial-card {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid #fff2ee;
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(255, 154, 115, 0.15);
    border-color: #ff9a73;
  }

  .client-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .client-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ff9a73;
    margin-right: 20px;
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.3);
  }

  .client-info {
    flex: 1;
  }

  .client-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }

  .client-age {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  .rating {
    font-size: 1.2rem;
    color: #ffd700;
  }

  .problem-info {
    background: linear-gradient(135deg, #fff8f5 0%, #fff2ee 100%);
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 15px;
    border: 1px solid #ffeee6;
  }

  .problem-title {
    font-weight: 600;
    color: #ff7f50;
    margin-bottom: 5px;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .problem-text {
    color: #666;
    font-size: 0.95rem;
  }

  .sessions-info {
    color: #999;
    font-size: 0.85rem;
    margin-bottom: 20px;
    text-align: center;
    padding: 8px 15px;
    background: #f8f8f8;
    border-radius: 20px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }

  .testimonial-text {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;
    font-style: italic;
    position: relative;
    padding: 0 15px;
  }

  .testimonial-text::before {
    content: '"';
    font-size: 2.5rem;
    color: #ff9a73;
    position: absolute;
    top: -15px;
    left: -5px;
    line-height: 1;
  }

  .testimonial-text::after {
    content: '"';
    font-size: 2.5rem;
    color: #ff9a73;
    position: absolute;
    bottom: -25px;
    right: -5px;
    line-height: 1;
  }

  .stats-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    margin-top: 40px;
  }

  .stats-title {
    text-align: center;
    color: #ff7f50;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
  }

  .stat-card {
    background: linear-gradient(135deg, #fff8f5 0%, #fff2ee 100%);
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    border: 2px solid #ffeee6;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-3px);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff7f50;
    margin-bottom: 10px;
  }

  .stat-label {
    color: #666;
    font-size: 1rem;
    font-weight: 500;
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

    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .testimonial-card {
      padding: 25px;
    }

    .client-header {
      flex-direction: column;
      text-align: center;
    }

    .client-photo {
      margin-right: 0;
      margin-bottom: 15px;
    }

    .stats-section {
      padding: 30px 20px;
    }

    .stats-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }

    .stat-number {
      font-size: 2rem;
    }
  }
</style>

<!-- <div class="container">
  <div class="header">
    <h1>Отзиви на клиенти</h1>
    <p>Прочетете истински истории на хора, които промениха живота си с остеоманипулативна терапия</p>
  </div> -->

  <div class="testimonials-grid">
    {#each testimonials as testimonial}
      <div class="testimonial-card">
        <div class="client-header">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            class="client-photo"
          />
          
          <div class="client-info">
            <div class="client-name">{testimonial.name}</div>
            <div class="client-age">{testimonial.age} години</div>
            <div class="rating">{renderStars(testimonial.rating)}</div>
          </div>
        </div>

        <div class="problem-info">
          <div class="problem-title">Проблем</div>
          <div class="problem-text">{testimonial.problem}</div>
        </div>

        <div class="sessions-info">
          Брой сеанси: {testimonial.sessions}
        </div>

        <div class="testimonial-text">
          {testimonial.text}
        </div>
      </div>
    {/each}
  </div>

  <!-- <div class="stats-section">
    <h2 class="stats-title">Нашите резултати</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">150+</div>
        <div class="stat-label">Доволни клиенти</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">95%</div>
        <div class="stat-label">Процент на успех</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">5+</div>
        <div class="stat-label">Години опит</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">1200+</div>
        <div class="stat-label">Проведени сеанси</div>
      </div>
    </div>
</div>
</div> -->