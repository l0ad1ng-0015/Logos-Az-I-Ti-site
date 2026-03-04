<script>
  export let title = "Контакти | Логос – Аз и Ти";
  export let description =
    "Свържете се с ОЦ Логос „Аз и ти“ – логопедичен център в София, ж.к. Овча купел-1. Телефон, имейл, адрес, карта и работно време за записване на консултация.";

  let formData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  let formErrors = {};
  let isSubmitting = false;
  let submitSuccess = false;
  let agree = false;
  let statusMessage = "";
  let apples = "apples";

  function validateForm() {
    formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Името е задължително поле";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Имейлът е задължително поле";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Моля въведете валиден имейл адрес";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Телефонът е задължително поле";
    } else if (!/^[\d\s\+\-\(\)]{8,}$/.test(formData.phone)) {
      formErrors.phone = "Моля въведете валиден телефонен номер";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Темата е задължително поле";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Съобщението е задължително поле";
    } else if (formData.message.trim().length < 10) {
      formErrors.message = "Съобщението трябва да бъде поне 10 символа";
    }

    if (!agree) {
      formErrors.agree =
        "Трябва да се съгласите с условията за защита на личните данни";
    }

    return Object.keys(formErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (apples !== "oranges") {
      return;
    }

    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    statusMessage = "";

    // Telegram integration
    const chat_id = "-4837044041";
    const botID = "7107520837:AAG4l1yT_fcaQAh86oEmKsQ-g-mabjy8GZk";
    const telegramURL = `https://api.telegram.org/bot${botID}/sendMessage`;

    let text = `🆕 Ново съобщение от контактната форма в КОНТАКТИ:

        👤 Име: ${formData.name}
        📧 Имейл: ${formData.email}  
        📞 Телефон: ${formData.phone}
        📋 Тема: ${formData.subject}
        💬 Съобщение: ${formData.message}`;

    try {
      const response = await fetch(telegramURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text }),
      });

      if (response.ok) {
        isSubmitting = false;
        submitSuccess = true;
        statusMessage = "Съобщението беше изпратено успешно!";

        // Reset form after successful submission
        formData = {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        };
        agree = false;
        apples = "apples"; // Reset the spam protection

        // Hide success message after 5 seconds
        setTimeout(() => {
          submitSuccess = false;
          statusMessage = "";
        }, 5000);
      } else {
        isSubmitting = false;
        statusMessage =
          "Изпращането беше неуспешно :( " + (await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
      isSubmitting = false;
      statusMessage = "Възникна грешка при изпращането на съобщението.";
    }
  }

  function clearError(field) {
    if (formErrors[field]) {
      delete formErrors[field];
      formErrors = formErrors;
    }
  }

  function doApples() {
    apples = "oranges";
    console.log("apples", apples);
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="контакти логопед София, логопедичен център контакти, логопед Овча купел контакти, логопедичен,логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедичен кабинет ОЦ Логос, логопедичен кабинет за деца София, контакти логопед София, логопед Овча купел контакти, логопедичен център София адрес, телефон логопед София, записване логопед София, логопедичен кабинет контакти, работно време логопед София, логопедична консултация контакти, карта логопед София, ОЦ Логос Аз и ти контакти, logoped Sofia contact, detski logoped Sofia address, logoped Ovtcha kupel contact, logopedicheski kabinet Sofia phone, logopedicheski konsultatsii Sofia email, logopedicheski specialist Sofia office hours"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="Контакти" />

  <!-- Open Graph тагове (за Facebook и други) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="Контакти" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/kontakti" />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>Контакти</h1>
      <p>
        Свържете се с нас – тук ще намерите локация, телефони, имейли и
        контактна форма за Вашите въпроси. Ако желаете да запишете час, обадете
        ни се – ние сме тук, за да съдействаме.
      </p>
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

<div class="contacts">
  <div class="info">
    <div class="info-container">
      <h2>Контактна информация</h2>
      <div class="info-content">
        <div class="info-item">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"
              />
            </svg>
          </div>
          <div class="info-text">
            <h3>Адрес</h3>
            <p>ж.к. "Овча купел-1" - бл.409А, вх."А";</p>
            <p>бл.411, вх."Г" - София, България</p>
          </div>
        </div>
        <div class="info-item">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
              />
            </svg>
          </div>
          <div class="info-text">
            <h3>Телефон</h3>
            <p><a href="tel:+359876860602">+359 876 860 602</a></p>
          </div>
        </div>
        <div class="info-item">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>
          </div>
          <div class="info-text">
            <h3>Имейл</h3>
            <p><a href="mailto:logos_aziti@abv.bg">logos_aziti@abv.bg</a></p>
          </div>
        </div>
        <div class="info-item">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M13 17h-2v-6h2zm0-8h-2V7h2z"
              />
            </svg>
          </div>
          <div class="info-text">
            <h3>Работно време</h3>
            <p>Понеделник - Петък: 9:00 - 18:00</p>
            <p>Събота: 9:00 - 14:00</p>
            <p>Неделя: почивен ден</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right-part">
    <div class="contact-form">
      <div class="form-container">
        <h2>Свържете се с нас</h2>
        <div class="form-content">
          {#if submitSuccess}
            <div class="success-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                />
              </svg>
              <p>
                Благодарим ви! Вашето съобщение беше изпратено успешно. Ще се
                свържем с вас скоро.
              </p>
            </div>
          {/if}
          {#if statusMessage && !submitSuccess}
            <div class="error-message-global">
              <p>{statusMessage}</p>
            </div>
          {/if}
          <form on:submit={handleSubmit} class="contact-form">
            <input type="hidden" bind:value={apples} />

            <div class="form-row">
              <div class="form-group">
                <label for="name">Име *</label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  on:input={() => clearError("name")}
                  class:error={formErrors.name}
                  placeholder="Вашето име"
                  required
                />
                {#if formErrors.name}
                  <span class="error-message">{formErrors.name}</span>
                {/if}
              </div>

              <div class="form-group">
                <label for="email">Имейл *</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  on:input={() => clearError("email")}
                  class:error={formErrors.email}
                  placeholder="your@email.com"
                  required
                />
                {#if formErrors.email}
                  <span class="error-message">{formErrors.email}</span>
                {/if}
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  on:input={() => clearError("phone")}
                  class:error={formErrors.phone}
                  placeholder="+359 xx xxx xxxx"
                  required
                />
                {#if formErrors.phone}
                  <span class="error-message">{formErrors.phone}</span>
                {/if}
              </div>

              <div class="form-group">
                <label for="subject">Тема *</label>
                <select
                  id="subject"
                  bind:value={formData.subject}
                  on:change={() => clearError("subject")}
                  class:error={formErrors.subject}
                  required
                >
                  <option value="">Изберете тема</option>
                  <option value="диагностика-и-консултация"
                    >Диагностика и консултация</option
                  >
                  <option value="информация-за-услуги"
                    >Информация за услуги</option
                  >
                  <option value="ценова-листа">Ценова листа</option>
                  <option value="друго">Друго</option>
                </select>
                {#if formErrors.subject}
                  <span class="error-message">{formErrors.subject}</span>
                {/if}
              </div>
            </div>

            <div class="form-group">
              <label for="message">Съобщение *</label>
              <textarea
                id="message"
                bind:value={formData.message}
                on:input={() => {
                  clearError("message");
                  doApples();
                }}
                class:error={formErrors.message}
                placeholder="Опишете как можем да ви помогнем..."
                rows="6"
                required
              ></textarea>
              {#if formErrors.message}
                <span class="error-message">{formErrors.message}</span>
              {/if}
            </div>

            <div class="form-group checkbox-group">
              <label for="agree" class="checkbox-label">
                <input
                  type="checkbox"
                  id="agree"
                  bind:checked={agree}
                  on:change={() => clearError("agree")}
                  class:error={formErrors.agree}
                  required
                />
                <span class="checkmark"></span>
                <p>Съгласявам се с условията за
                <a href="/privacy-policy" target="_blank"
                  >защита на личните данни</a
                > *</p> 
              </label>
              {#if formErrors.agree}
                <span class="error-message">{formErrors.agree}</span>
              {/if}
            </div>

            <button type="submit" class="submit-btn" disabled={isSubmitting}>
              {#if isSubmitting}
                <div class="spinner"></div>
                Изпращане...
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                  />
                </svg>
                Изпрати съобщение
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- <div class="social-media">
            <div class="social-container">
                <h2>Последвайте ни</h2>
                <div class="social-links">
                    <a href="https://www.facebook.com/people/%D0%9E%D0%A6-%D0%9B%D0%BE%D0%B3%D0%BE%D1%81-%D0%90%D0%B7-%D0%B8-%D0%A2%D0%B8/61564854236122/" target="_blank">
                            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a93d3d">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#1877F2CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M15 2H18V6H16C14.8954 6 14 6.89543 14 8V10H18L16.9565 14H13.8261V22H9.65217V14H6V10.0396H10V7C10 4.23858 12.2386 2 15 2Z" stroke="#1877F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                            </svg>
                    </a>
                    <a href="https://www.instagram.com/logosaziti/" target="_blank">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                                </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12.0001" r="4.44444" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M18 6.0217V6" stroke="#c13584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div> -->
  </div>
</div>

<div class="map">
  '
  <div class="map-container">
    <h2>Как да ни намерите</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8367206548787!2d23.251006944237616!3d42.68600090930964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b20fa558ddd%3A0x7c1a857d75a46b42!2z0JvQvtCz0L7RgSDQkNCXINC4INCi0Jg!5e0!3m2!1sbg!2sbg!4v1761170720965!5m2!1sbg!2sbg"
      width="100%"
      height="400"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Нашето местоположение"
    >
    </iframe>
    <div class="map-overlay">
      <div class="map-info">
        <h3>Лесно достъпно място</h3>
        <p>
          Намираме се на удобно място в София с лесен достъп до обществен
          транспорт.
        </p>
        <a
          href="https://maps.app.goo.gl/KdVMZnYSCF31gypJA"
          target="_blank"
          class="directions-btn"
        >
          Вземете указания
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  /* ---- 0. Global ---- */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Cormorant Garamond", serif;
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
    transform: translateY(-110%);
  }

  .second-svg {
    align-self: flex-end;
    transform: translateY(55%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Contacts ---- */
  .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 20px;
    width: 90%;
    max-width: 1000px;
  }

  /* ---- 3. Info ---- */
  /* .info-container {
        width: 90%;
        max-width: 1000px;
    } */

  .info-content {
    display: grid;
    background: var(--orange-light);
    border-radius: 15px;
    padding: 30px;
    height: 568px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    padding-bottom: 25px;
    border-bottom: 1px solid #f5f5f5;
  }

  .info-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .info-item .icon {
    background: var(--orange);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
  }

  .info-text h3 {
    color: var(--orange);
    margin-bottom: 8px;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .info-text p {
    margin: 0;
    color: var(--green-dark);
    line-height: 1.5;
  }

  .info-text a {
    color: var(--green-dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .info-text a:hover {
    color: #4a7c59;
  }

  /* ---- 4. Right part ---- */
  .right-part {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  /* ---- 5. Contact form ---- */
  .form-content {
    background: var(--orange-light);
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
    max-width: 500px; /* Set maximum width */
    width: 100%; /* Ensure it's responsive */
    margin: 0 auto; /* Center the form */
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px; /* Reduced gap for smaller width */
    margin-bottom: 25px;
  }

  .form-group {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    color: black;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 12px 14px; /* Slightly reduced horizontal padding */
    border: 1px solid var(--orange);
    background: var(--background);
    border-radius: 8px;
    font-size: 1rem;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
    width: 100%; /* Ensure full width usage */
    box-sizing: border-box; /* Include padding in width calculation */
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--orange);
    box-shadow: 0 0 0 3px rgba(47, 77, 25, 0.1);
  }

  .form-group input.error,
  .form-group select.error,
  .form-group textarea.error {
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  .error-message {
    color: #dc2626;
    font-size: 0.85rem;
    margin-top: 5px;
    font-weight: 500;
  }

  .checkbox-group {
    margin: 15px 0;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.87rem !important;
    color: #333;  
    line-height: 1.4;
  }

  .checkbox-label input[type="checkbox"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    margin-right: 10px;
    margin-top: 2px;
    flex-shrink: 0;
    position: relative;
    transition: all 0.3s ease;
  }

  .checkbox-label input[type="checkbox"]:checked {
    background-color: var(--orange);
    border-color: var(--green-dark);
  }

  .checkbox-label input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    left: 10px;
    top: 4px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .checkbox-label input[type="checkbox"].error {
    border-color: #dc2626;
  }

  .checkbox-label a {
    margin: 0 5px;
    color: var(--green-dark);
    text-decoration: none;
    font-weight: 500;
  }

  .checkbox-label a:hover {
    color: #4a7c59;
  }

  .submit-btn {
    background: var(--orange);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(47, 77, 25, 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .success-message {
    background: #dcfce7;
    border: 1px solid #bbf7d0;
    color: #166534;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .success-message svg {
    flex-shrink: 0;
    color: #22c55e;
  }

  /* ---- 6. Social Media ---- */
  /* .social-media {
        margin-top: 40px;
    }

    .social-links {
        display: flex;
        gap: 15px;
    }

    .social-links svg:hover {
        transform: translateY(-3px);
    } */

  /* ---- 6. Map ---- */
  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .map-container {
    width: 90%;
    max-width: 1000px;
    position: relative;
    margin-bottom: 20px; /* Margin само за този елемент */
  }

  /* .map-container iframe {

    } */

  .map-overlay {
    position: absolute;
    top: 70px;
    left: 8px;
    background: var(--orange-light);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    max-width: 320px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .map-info h3 {
    color: var(--orange);
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .map-info p {
    color: var(--green-dark);
    margin-bottom: 15px;
    font-size: 0.9rem;
  }

  .directions-btn {
    background: var(--orange);
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .directions-btn:hover {
    background: #4a7c59;
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-155%);
    }

    .second-svg {
      transform: translateY(155%);
      align-self: flex-start;
    }

    /* ---- 2. Contacts ---- */
    .contacts {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    /* ---- 5. Contact form ---- */
    .form-content {
      width: 100%;
      max-width: none;
    }

    .checkbox-label {
      margin-top: 1.2rem;
      margin-bottom: 0 !important;
      font-size: 1rem !important;
    }

    /* .form-row {
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-bottom: 25px;
        } */
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

    /* ---- 2. Contacts ---- */
    .contacts {
      margin-top: 2rem;
    }

    /* ---- 5. Contact form ---- */
    .form-row {
      display: flex;
      flex-direction: column; /* Stack vertically instead of side by side */
      gap: 25px;
      margin-bottom: 25px;
    }

    .checkbox-label {
      font-size: 1rem !important;
    }

    /* ---- 6. Map ---- */
    iframe {
      height: 600px;
    }
  }

  /* ---- Media query - 425 ---- */
  @media screen and (max-width: 425px) {
    .map-overlay {
      top: 115px;
      left: 5px;
      max-width: 305px;
    }
  }
</style>
