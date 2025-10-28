<script lang="ts">
</script>

<div class="heading">
  <div class="heading-container">
    <div class="hero-left">
      <h1 class="hero-title">
        „Логос - <span class="az-i-ti">
          Аз и Ти
          <!-- underline само под „Аз и Ти“ -->
          <span class="underline" aria-hidden="true">
            <svg
              width="291"
              height="17"
              viewBox="0 0 291 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 2.59825C49.9649 2.59825 98.4179 2.24623 146.88 2.01682C179.797 1.861 212.723 1.5 245.641 1.5C255.891 1.5 265.944 1.68693 276.073 2.46904C287.24 3.33139 264.124 3.85393 264.025 3.858C241.397 4.7953 219.057 6.71283 196.512 8.02488C163 9.97509 129.378 10.4382 95.7431 11.4488C67.8289 12.2876 39.7804 15.3896 11.8529 15.3896C10.5673 15.3896 6.90326 15.7094 5.70392 15.2604C2.86256 14.1966 12.8334 10.8237 13.6725 10.609C27.7736 7.00108 45.6698 5.55205 61.1078 4.66553C74.2427 3.91127 86.358 4.03504 99.6333 4.27792C130.334 4.8396 161.062 5.95931 191.68 7.21734C216.255 8.22707 240.633 9.56625 264.904 11.8041C273.029 12.5533 281.199 13.6453 289.5 13.6453"
                stroke="#E2F099"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </span>“
      </h1>

      <p class="hero-subtitle">
        <span class="star" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0L19.0517 10.9483L30 15L19.0517 19.0517L15 30L10.9483 19.0517L0 15L10.9483 10.9483L15 0Z"
              fill="#E2F099"
            />
          </svg>
        </span>
        Център за образователни и терапевтични услуги и програми за цялостно развитие
        на детето.
      </p>

      <a class="btn-hero" href="/about">За Нас</a>
    </div>
    <div class="hero-right">
      <img src="/others/puzzle.svg" alt="Пъзел и икони" class="puzzle-img" />
    </div>
  </div>
</div>

<style>
  .heading {
    background-color: var(--orange);
    text-align: left;
    border-radius: 16px;
    padding: 30px 35px;
    margin-top: 30px;
    color: #fff;
  }
  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-left {
    max-width: 560px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .hero-title {
    font-size: clamp(28px, 4.2vw, 56px);
    line-height: 1.1;
    font-weight: 700;
    margin: 0 0 5px;
    color: #fff;
  }

  .az-i-ti {
    position: relative;
    display: inline-block;
    padding-bottom: 10px; /* място за underline */
  }
  .underline {
    width: clamp(90px, 60vw, 215px);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -12px;
    display: block;
    pointer-events: none;
  }
  .underline svg {
    width: clamp(90px, 60vw, 200px);
    height: auto;
  }

  .hero-subtitle {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: clamp(14px, 1.6vw, 18px);
    line-height: 1.5;
    margin: 0 0 22px;
    color: #fff;
    max-width: 640px;
  }
  .star {
    flex: 0 0 auto;
    margin-top: 5px;
  }

  .star svg {
    width: 20px;
    height: 20px;
  }

  .btn-hero {
    display: inline-block;
    width: 75px;
    max-width: 100%;
    text-align: center;
    align-self: flex-start;
    background: #8ac99a; /* нежно зелено като в примера */
    color: #1c1c1c;
    padding: 10px 18px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition:
      transform 0.15s ease,
      opacity 0.15s ease;
  }
  .btn-hero:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  .hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
  }
  .puzzle-img {
    width: clamp(280px, 35vw, 420px);
    height: auto;
  }

  @media screen and (max-width: 1100px) {
    .hero-left {
      max-width: 450px;
    }

    .underline svg {
      width: 180px;
    }
  }

  /* --- 955px: започва по-компактна визия --- */
  @media screen and (max-width: 955px) {
    .heading {
      padding: 20px 30px;
      margin: 30px 30px 40px 30px;
    }

    .hero-left {
      max-width: 460px;
    }

    .hero-left h1 {
      font-size: clamp(30px, 5vw, 52px);
    }

    .hero-left p {
      font-size: 16px;
    }

    .hero-subtitle {
      margin-top: 10px;
    }

    .puzzle-img {
      width: clamp(260px, 40vw, 360px);
    }
  }

  /* --- 755px: колоните една под друга --- */
  @media screen and (max-width: 755px) {
    .heading {
      padding: 35px 25px 20px;
      margin: 20px auto;
      text-align: center;
    }

    .heading-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero-left {
      padding-right: 0;
      align-items: center;
    }

    .hero-title {
      font-size: 2.8rem !important;
    }

    .underline {
      top: 22px;
      left: -20px;
    }

    .underline svg {
      width: 180px;
    }

    .hero-subtitle {
      justify-content: center;
      font-size: 1.2rem !important;
    }

    .btn-hero {
      align-self: center;
    }

    .hero-right {
      margin-top: 25px;
      justify-content: center;
    }

    .puzzle-img {
      width: 85%;
    }
  }

  /* --- 500px: телефони, по-малки текстове и повече въздух --- */
  @media screen and (max-width: 500px) {
    .heading {
      border-radius: 12px;
      padding: 35px 20px;
    }

    .hero-title {
      font-size: clamp(
        24px,
        7vw,
        36px
      ); /* ДА СЕ ПРЕПРАВИ РАЗНЕРА НА СНИМКАТА И ПО ВЪЗМОЖНОСТ ДА СЕ ОГОЛЕМИ ИЛИ ЗАМЕНИ */
    }

    .hero-subtitle {
      gap: 0;
      font-size: 15px;
      line-height: 1.4;
    }

    .puzzle-img {
      width: 90%;
    }
  }

  /* --- 375px: много малки екрани --- */
  @media screen and (max-width: 375px) {
    .hero-title {
      font-size: 22px;
    }

    .btn-hero {
      font-size: 14px;
      padding: 8px 14px;
    }
  }
</style>
