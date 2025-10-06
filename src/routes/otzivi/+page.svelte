<script>
  export let title = "Отзиви на клиенти | Логос – Аз и Ти";
  export let description =
    "Прочетете отзиви от родители за ОЦ Логос „Аз и ти“. Логопедичен център в София с индивидуален подход, видими резултати и подкрепа за развитието на всяко дете.";

  const reviews = [
    {
      id: 1,
      name: "Натали Славова",
      age: 32,
      image: "/pfps/reviews/natali_s.jpg",
      rating: 5,
      text: "Човечност, грижа и страхотен професионализъм! Грижата, надграждането на знания и умения за децата е тяхната мисия. Бъдете здрави! Препоръчвам.",
    },
    {
      id: 2,
      name: "Виолета Бакалова",
      age: 33,
      image: "/pfps/reviews/violeta_b.jpg",
      rating: 5,
      text: "Страхотен специалист! Радвам се, че срещнах г-жа Игнатова. Тя е точният човек от който има нужда детето ми.",
    },
    {
      id: 3,
      name: "Виолета Боянова",
      age: 35,
      image: "/pfps/reviews/violeta_bo.jpg",
      rating: 5,
      text: "Препоръчвам, защото познавам специлистите, които работят там -прекрасни професионалисти и чудесни хора!",
    },
    // {
    //   id: 4,
    //   name: "Иван Георгиев",
    //   age: 45,
    //   image:
    //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    //   rating: 5,
    //   text: "Като строител работя физически тежка работа всеки ден. ОМТ терапията ми помогна не само да се справя с болката, но и да предотвратя бъдещи проблеми. Професионалният подход е впечатляващ.",
    //   problem: "Мускулно напрежение в раменете",
    //   sessions: 8,
    // },
    // {
    //   id: 5,
    //   name: "Елена Стоянова",
    //   age: 28,
    //   image:
    //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    //   rating: 5,
    //   text: "Работя в офис и имах постоянни главоболия заради лошата стойка. След терапията не само се почувствах по-добре, но и научих как да поддържам правилната си стойка ежедневно.",
    //   problem: "Главоболие и напрежение в шията",
    //   sessions: 6,
    // },
    // {
    //   id: 6,
    //   name: "Георги Димитров",
    //   age: 52,
    //   image:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    //   rating: 5,
    //   text: "След операция на коляното имах затруднения с движението. Терапията ми върна увереността и силата. Сега отново мога да се радвам на активен начин на живот.",
    //   problem: "Възстановяване след операция",
    //   sessions: 15,
    // },
    // {
    //   id: 5,
    //   name: "Анна Николова",
    //   age: 41,
    //   image:
    //     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    //   rating: 5,
    //   text: "Като майка на две деца постоянно се чувствах изтощена и с болка в гърба. Терапията ми даде нова енергия и възможността отново да се радвам на времето с децата си.",
    //   problem: "Постурални проблеми",
    //   sessions: 12,
    // },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join(
      ""
    );
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедичен кабинет ОЦ Логос, логопедичен кабинет за деца София, нашият екип логопеди, логопедичен опит и квалификация, мисия на логопедичния център, логопедични специалисти за деца, методики за логопедична терапия, ОЦ Логос Аз и ти екип, професионални логопеди София, логопедична грижа за деца, логопедичен опит над 10 години, логопедична помощ и развитие, логопедична подкрепа за родители, обучение и квалификация на логопеди, логопедичен център с индивидуален подход, логопедичен център за цялостно развитие на детето, логопедичен център в Овча купел, детски логопедичен център София, логопедична грижа и внимание, logopedichen centar Sofia, logopedichen ekip Sofia, detski logoped Sofia, logoped Ovtcha kupel"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="Отзиви" />

  <!-- Open Graph тагове (за Facebook и други) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="Отзиви" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/otzivi" />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>Отзиви за нас</h1>
      <p>
        Тук ще откриете споделени впечатления и отзиви от нашите родители, чиито
        деца са преминали през нашите услуги.
      </p>
      <!-- Прочетете техните истории и мнения за постигнатите резултати и положителната промяна в ежедневието им. -->
    </div>
    <div id="h-right">
      <svg
        class="first-svg"
        style="top: 0; position:static"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
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
          ><g transform="scale(0.5,0.5)"
            ><path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            ></path><path
              d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
              fill="#ffac71"
            ></path><path
              d="M303.2,192.6l-27.6,-68.1c-1.3,-3.4 -2.4,-6.1 -3.2,-8.2c-0.8,-2 -1.9,-3.9 -3.1,-5.7c-1.2,-1.8 -2.8,-3.2 -4.8,-4.4c-2,-1.1 -4.5,-1.7 -7.5,-1.7c-2.9,0 -5.4,0.6 -7.4,1.7c-2,1.1 -3.6,2.6 -4.8,4.4c-1.2,1.8 -2.4,4.1 -3.5,6.9c-1.1,2.8 -2,5.1 -2.8,7.1l-27,68.6c-1.1,2.7 -1.9,4.9 -2.4,6.4c-0.5,1.5 -0.7,3 -0.7,4.5c0,2.5 1,4.7 3.1,6.7c2.1,2 4.4,3 7.1,3c3.2,0 5.4,-0.9 6.8,-2.8c1.4,-1.8 3.1,-5.4 5,-10.7l5,-13.5h42.9l5,13.2c0.7,1.6 1.5,3.5 2.4,5.7c0.9,2.1 1.8,3.7 2.6,4.8c0.8,1 1.8,1.9 3,2.4c1.2,0.6 2.6,0.9 4.3,0.9c2.9,0 5.3,-1 7.4,-3.1c2,-2 3.1,-4.3 3.1,-6.7c0.4,-2.5 -0.7,-6.2 -2.9,-11.4zM241.3,170.6l15.6,-43.6l15.9,43.6z"
              fill="#ecedea"
            ></path><path
              d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
              fill="#eb9783"
            ></path><path
              d="M203.4,316.7c10.6,-4.9 15.8,-12.6 15.8,-23.2c0,-3.1 -0.5,-6 -1.5,-8.8c-1,-2.8 -2.5,-5.3 -4.4,-7.6c-1.9,-2.3 -4.1,-4.2 -6.6,-5.7c-2.9,-1.8 -6.2,-3 -9.9,-3.6c-3.7,-0.6 -8.1,-0.9 -13.1,-0.9h-34.2c-4.6,0 -7.9,1 -9.9,3.1c-2,2 -3.1,5.4 -3.1,10v79.4c0,4.6 1,7.9 3,10c2,2.1 5.3,3.1 10,3.1h32.3c5.6,0 10.4,-0.3 14.6,-0.8c4.2,-0.6 7.9,-1.5 11.1,-2.8c5.1,-2.3 9.2,-5.8 12.2,-10.5c3,-4.7 4.5,-10 4.5,-16c0,-12.7 -6.9,-21.3 -20.8,-25.7zM157.9,283h17.4c7.8,0 13.6,0.9 17.4,2.6c3.8,1.8 5.7,5.3 5.7,10.6c0,2.5 -0.6,4.8 -1.8,6.8c-1.5,2.8 -3.8,4.8 -6.7,5.8c-2.9,1 -7,1.5 -12.4,1.5h-19.6zM180.9,356.5h-23v-30.8h22.3c7.4,0 13,1.2 16.8,3.6c3.7,2.4 5.6,6.3 5.6,11.6c0,10.4 -7.3,15.6 -21.7,15.6z"
              fill="#ecedea"
            ></path><g
              ><path
                d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                fill="#edc92f"
              ></path><path
                d="M380.1,337c-1.8,-1.8 -4,-2.7 -6.5,-2.7c-3,0 -5.1,0.9 -6.5,2.6c-1.3,1.8 -2.5,4 -3.4,6.8c-2.2,5.9 -5.4,10.4 -9.6,13.4c-4.2,3 -9.4,4.6 -15.6,4.6c-5.7,0 -10.6,-1.3 -14.8,-4c-4.2,-2.7 -7.5,-6.8 -9.8,-12.2c-2.3,-5.4 -3.5,-12.3 -3.5,-20.5c0,-12.3 2.6,-21.8 7.8,-28.4c5.2,-6.7 12.2,-10 21,-10c5.5,0 10.2,1.3 13.9,3.9c3.8,2.6 7,6.5 9.8,11.7c1.7,3.2 3.2,5.4 4.6,6.7c1.4,1.3 3.4,1.9 6.2,1.9c2.4,0 4.5,-0.9 6.3,-2.8c1.7,-1.9 2.6,-4 2.6,-6.5c0,-4.5 -1.8,-9.2 -5.3,-14.2c-3.6,-5 -8.7,-9.2 -15.3,-12.6c-6.7,-3.4 -14.3,-5.1 -22.8,-5.1c-7,0 -13.6,1.3 -19.8,3.7c-6.2,2.5 -11.6,6.1 -16.2,10.9c-4.6,4.8 -8.1,10.5 -10.6,17.2c-2.5,6.7 -3.7,14.3 -3.7,22.8c0,5.2 0.5,10.2 1.5,14.8c1,4.7 2.5,9 4.4,13.1c2,4.1 4.3,7.8 7.1,11.1c3.1,3.6 6.5,6.6 10.3,8.8c3.7,2.2 7.9,3.9 12.4,4.9c4.6,1.1 9.6,1.6 15.2,1.6c7.3,0 13.8,-1.2 19.3,-3.5c5.5,-2.4 10.1,-5.4 13.6,-9.2c3.6,-3.8 6.2,-7.6 7.8,-11.5c1.7,-3.9 2.5,-7.5 2.5,-10.9c-0.2,-2.4 -1.1,-4.7 -2.9,-6.4z"
                fill="#ecedea"
              ></path></g
            ></g
          ></g
        >
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

<!-- Reviews Grid -->
<div class="reviews">
  <div class="reviews-container">
    <h2>Какво казват за нас?</h2>
    <div class="reviews-grid">
      {#each reviews as review}
        <div class="review-card">
          <div class="client-header">
            <img src={review.image} alt={review.name} class="client-photo" />
            <div class="client-info">
              <div class="client-name">{review.name}</div>
              <div class="client-age">{review.age} години</div>
              <div class="rating">{renderStars(review.rating)}</div>
            </div>
          </div>
          <div class="review-text">
            {review.text}
          </div>
        </div>
      {/each}
    </div>
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
    transform: translateY(-75%);
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

  /* ---- 2. Reviews Grid ---- */
  .reviews {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .reviews-container {
    width: 90%;
    max-width: 1000px;
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .review-card {
    background: var(--background);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    border: 2px solid var(--orange);
  }

  .review-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(255, 154, 115, 0.15);
    border-color: var(--background);
    transition: 0.5s;
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
    border: 3px solid var(--orange);
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

  .review-text {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;
    font-style: italic;
    position: relative;
    padding: 0 15px;
  }

  .review-text::before {
    content: '"';
    font-size: 2.5rem;
    color: var(--orange);
    position: absolute;
    top: -15px;
    left: -5px;
    line-height: 1;
  }

  .review-text::after {
    content: '"';
    font-size: 2.5rem;
    color: var(--orange);
    position: absolute;
    bottom: -25px;
    right: -5px;
    line-height: 1;
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-190%);
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

    /* ---- 2. Review Section ---- */
    .reviews-grid {
      padding: 30px 20px;
    }

    .client-header {
      flex-direction: column;
      text-align: center;
    }

    .client-photo {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  /* ---- Media query - 425 ---- */
  @media screen and (max-width: 475px) {
    .reviews-grid {
      grid-template-columns: auto;
    }
  }
</style>
