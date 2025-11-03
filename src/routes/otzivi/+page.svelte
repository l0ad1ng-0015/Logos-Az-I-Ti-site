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
      age: 65,
      image: "/pfps/reviews/violeta_bo.jpg",
      rating: 5,
      text: "Препоръчвам, защото познавам специлистите, които работят там -прекрасни професионалисти и чудесни хора!",
    },
    {
      id: 4,
      name: "Теодора Караминчева",
      age: 35,
      image: "/pfps/reviews/teodora_k.jpg",
      rating: 5,
      text: "Уникален специалист и човек, прави чудеса с децата и ги дарява с много любов и топлина в отношенията, затова и резултатите са изключителни. ❤",
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="110.8419 122.2011 248.1 248.1"
        width="70px"
        height="70px"
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
          transform="matrix(1, 0, 0, 1, 106.89191866905466, 118.25107206295286)"
        >
          <g transform="scale(0.5,0.5)">
            <path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            />
            <g>
              <path
                d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
                fill="#ffac71"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.565438, 0, 0, 3.140884, -423.405016, -705.154641)"
                x="177.985"
                y="290.296">A</text
              >
            </g>
            <g>
              <path
                d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
                fill="#eb9783"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.62775, 0, 0, 3.157958, -515.098067, -551.446882)"
                x="177.985"
                y="290.296">Б</text
              >
            </g>
            <g>
              <g>
                <path
                  d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                  fill="#edc92f"
                />
                <text
                  style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                  transform="matrix(3.581682, 0, 0, 3.157822, -347.678975, -552.280256)"
                  x="177.985"
                  y="290.296">B</text
                >
              </g>
            </g>
          </g>
        </g>
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
    font-family: var(--font);
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }

  .client-age {
    font-family: var(--font);
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
