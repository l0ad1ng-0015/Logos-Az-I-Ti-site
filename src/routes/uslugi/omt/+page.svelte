<script>
  export let title = "ОМТ | Логос – Аз и Ти";
  export let description =
    "ОЦ Логос „Аз и ти“ предлага орофациална миофункционална терапия (ОМТ) в София – специализирана програма за корекция на неправилно дишане, преглъщане и мускулен тонус на лицето.";

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

    let text = `🆕 Ново съобщение от контактната форма в ОМТ:

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
    content="логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедичен кабинет ОЦ Логос, логопедичен кабинет за деца София, орофациална миофункционална терапия София, омт, ОМТ, ОМТ София, орофициална миофункционална терапия, логопедична терапия София, терапия при неправилно преглъщане, терапия при дишане с уста, терапия при слаба орална моторика, терапия при орални навици, логопедична рехабилитация София, логопедична помощ при неправилна захапка, логопед при проблеми с говора и дишането, логопедична терапия след френулотомия, миофункционални упражнения за деца, орофациална терапия за правилно дишане, логопедичен кабинет Овча купел, логопедичен център София, логопедични и терапевтични услуги София, детски логопед София, logoped Sofia, orofacialna miofunkcionalna terapiya Sofia, OMT logopedia, miofunkcionalna terapiya detsa, logoped Ovtcha kupel, terapiya na orofacialni narusheniya"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="ОМТ" />

  <!-- Open Graph тагове (за Facebook и други) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="ОМТ" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/uslugi/omt" />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>ОМТ</h1>
      <p>
        <strong>Орофациалната миофункционална терапия</strong> подпомага правилното
        функциониране на езика, устните и дишането чрез специални упражнения, които
        укрепват мускулатурата.
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

<!-- What is this? -->
<div class="what-i-t" style="margin-bottom: 1rem;">
  <div class="what-i-t-container">
    <div class="w-left">
      <h2>Какво представлява?</h2>
      <p>
        Орофациалната миофункционална терапия (ОМТ) е съвременен терапевтичен
        подход, който се фокусира върху правилната функция на езика, устните,
        челюстта и дихателните пътища. Целта ѝ е да се възстановят естествени
        модели на преглъщане, говор, дишане и мускулен баланс, които често са
        нарушени при деца и възрастни.
      </p>
    </div>
    <div class="w-right">
      <svg
        class="first-svg-w"
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
        class="second-svg-w"
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
      <picture>
        <source srcset="/pages/omt.webp" type="image/webp" loading="lazy" />
        <img src="/pages/omt.jpg" alt="ОМТ" loading="lazy" />
      </picture>
    </div>
  </div>
</div>

<!-- Why necessary? -->
<div class="why-nec">
  <div class="why-nec-container">
    <h2>Кога е необходима терапия?</h2>
    <div class="why-nec-content">
      <h3>ОМТ се прилага при:</h3>
      <ul style="margin-bottom: 0 !important;">
        <li>Дишане през устата</li>
        <li>Неправилно преглъщане</li>
        <li>Отворена или кръстосана захапка</li>
        <li>Липса на назално дишане</li>
        <li>Нарушения в артикулацията на звукове като /С/, /З/, /Р/, /Л/</li>
        <li>Вредни навици – смучене на пръст, устни, гризане на нокти</li>
        <li>След ортодонтско лечение – за стабилизиране на резултатите</li>
        <li>Хъркане и обструктивна сънна апнея</li>
        <li>Подкрепа при състояния като дизартрия, дисфазия и ДЦП</li>
      </ul>
    </div>
  </div>
</div>

<!-- How is it going? -->
<div class="how-is-it-g">
  <div class="how-is-it-g-container">
    <h2>Как протича терапията?</h2>
    <div class="how-is-it-g-content">
      <h3>В нашия кабинет провеждаме:</h3>
      <ul class="key-points">
        <li>Индивидуална оценка на орофациалната мускулатура и функции</li>
        <li>Специализирани упражнения за езика, устните, бузите и небцето</li>
        <li>Корекция на дишане и преглъщане</li>
        <li>Работа върху езиковата позиция в покой и по време на говор</li>
        <li>Интерактивна работа с деца – чрез игри, образи, истории</li>
        <li>Домашна програма и проследяване на напредъка</li>
      </ul>
    </div>
  </div>
</div>

<!-- Why is it important? -->
<div class="why-is-it-im">
  <div class="why-is-it-im-container">
    <h2>Защо е важна?</h2>
    <div class="why-is-it-im-content">
      <div class="subsection">
        <p>
          ОМТ не просто тренира мускули – тя възстановява фундаментални навици,
          които влияят на цялостното развитие. Когато езикът стои между зъбите
          или устата е винаги отворена, това води до:
        </p>
        <ul style="margin-bottom: 20px !important;">
          <li>Нарушения в говора</li>
          <li>Проблеми със зъбите и захапката</li>
          <li>Дихателни затруднения</li>
          <li>Смущения в съня и концентрацията</li>
        </ul>
        <p class="emphasis">
          Чрез ОМТ ние възстановяваме естествения баланс и подпомагаме детето
          или възрастния в неговото говорно, дихателно и орално развитие.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Work in team -->
<div class="work-in-team">
  <div class="work-in-team-container">
    <h2>Кога е необходима терапия?</h2>
    <div class="work-in-team-content">
      <h3>При необходимост си сътрудничим с:</h3>
      <ul style="margin-bottom: 0 !important;">
        <li>🦷 Ортодонти</li>
        <li>🩺 УНГ специалисти</li>
        <li>🧠 Невролози и педиатри</li>
        <li>🛌 Специалисти по сънна апнея</li>
      </ul>
    </div>
  </div>
</div>

<!-- Contact section -->
<div class="contact">
  <div class="contact-container">
    <h2>Искате ли оценка или консултация?</h2>
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
        <div class="subsection" style="margin-bottom: 1.5rem;">
          <p style="font-size: larger;">
            Свържете се с нас, за да определим дали орофациалната терапия е
            подходяща за Вашето дете или за Вас.
          </p>
          <ul
            style="margin-bottom: 0 !important; list-style: none; padding-left: 0;"
          >
            <li>📩 logos_aziti@abv.bg</li>
            <li>📞 0876860602</li>
          </ul>
        </div>
        <input type="hidden" bind:value={apples} />
        <div class="form-row">
          <!-- Име -->
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
          <!-- Имейл -->
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
          <!-- Телефон -->
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
          <!-- Тема -->
          <div class="form-group">
            <label for="subject">Тема *</label>
            <select
              id="subject"
              bind:value={formData.subject}
              on:change={() => clearError("subject")}
            >
              <option value="">ОМТ</option>
            </select>
            {#if formErrors.subject}
              <span class="error-message">{formErrors.subject}</span>
            {/if}
          </div>
        </div>
        <!-- Съобщение -->
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
        <!-- Чек -->
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
            Съгласявам се с условията за
            <a href="/privacy-policy" target="_blank">защита на личните данни</a
            > *
          </label>
          {#if formErrors.agree}
            <span class="error-message">{formErrors.agree}</span>
          {/if}
        </div>
        <!-- Изпрати -->
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
    transform: translateY(-115%);
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

  /* ---- 2. What is this? ---- */
  .what-i-t {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  }

  .what-i-t-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin-bottom: 2rem;
  }

  .w-left {
    width: 51%;
    padding-right: 20px;
    line-height: 1.5;
  }

  .w-left p {
    font-size: 1.3rem;
  }

  .w-right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    position: relative;
    padding: 0 25px;
  }

  .first-svg-w {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
  }

  .second-svg-w {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
  }

  .w-right img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }

  /* ---- 3. Why necessary? ---- */
  .why-nec {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .why-nec-container {
    width: 90%;
    max-width: 1000px;
  }

  .why-nec-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .why-nec h3 {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    border-left: 4px solid var(--orange);
    padding-left: 15px;
  }

  .why-nec ul {
    background: var(--background);
    border: 2px solid var(--orange);
    border-radius: 10px;
    color: #666;
    line-height: 1.7;
    padding: 20px;
    margin-bottom: 20px;
    list-style: none;
  }

  .why-nec li {
    margin-bottom: 8px;
    margin-left: 20px;
    position: relative;
    font-size: 1.2rem !important;
    list-style: outside;
  }

  .why-nec li:last-child {
    margin-bottom: 0 !important;
  }

  /* --- 4. How is it going? --- */
  .how-is-it-g {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .how-is-it-g-container {
    width: 90%;
    max-width: 1000px;
  }

  .how-is-it-g-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .how-is-it-g h3 {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    border-left: 4px solid var(--orange);
    padding-left: 15px;
  }

  /* Key points  */
  .key-points {
    list-style: none;
    margin-top: 15px;
    background: var(--background);
    border-radius: 10px;
    border: 2px solid var(--orange);
    padding: 25px;
  }

  .key-points li {
    margin-bottom: 12px;
    padding-left: 30px;
    position: relative;
    font-size: 1.25rem !important;
  }

  .key-points li:last-child {
    margin-bottom: 0 !important;
  }

  .key-points li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #ff9d6b;
    font-weight: bold;
    font-size: 1.25rem;
  }

  /* ---- 4. Why is it important? ---- */
  .why-is-it-im {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .why-is-it-im p,
  li {
    font-size: 1.2rem !important;
  }

  .why-is-it-im-container {
    width: 90%;
    max-width: 1000px;
  }

  .why-is-it-im-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  /* Content Sections */
  .subsection {
    background: var(--background);
    padding: 20px;
    border: 2px solid var(--orange);
    border-radius: 10px;
  }

  .subsection p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 5px;
  }

  .subsection ul {
    color: #666;
    line-height: 1.7;
    padding-left: 20px;
    margin-bottom: 40px;
  }

  .subsection li {
    margin-bottom: 8px;
    position: relative;
  }

  .subsection li:last-child {
    margin-bottom: 0 !important;
  }

  .emphasis {
    background: var(--orange-dark);
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #ffb347;
    margin-top: 15px;
    font-style: italic;
    font-weight: 600;
    color: black;
  }

  /* ---- 5. Work in team ---- */
  .work-in-team {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .work-in-team-container {
    width: 90%;
    max-width: 1000px;
  }

  .work-in-team-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .work-in-team h3 {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    border-left: 4px solid var(--orange);
    padding-left: 15px;
  }

  .work-in-team ul {
    background: var(--background);
    border: 2px solid var(--orange);
    border-radius: 10px;
    color: #666;
    line-height: 1.7;
    padding: 20px;
    margin-bottom: 20px;
    list-style: none;
  }

  .work-in-team li {
    margin-bottom: 8px;
    position: relative;
    font-size: 1.2rem !important;
  }

  .work-in-team li:last-child {
    margin-bottom: 0 !important;
  }

  /* ---- 6. Contact section ---- */
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .contact-container {
    width: 90%;
    max-width: 1000px;
  }

  .form-content {
    background: var(--orange-light);
    border-radius: 15px;
    padding: 35px;
    margin-bottom: 40px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
    max-width: 1000px; /* Set maximum width */
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
    font-family: inherit;
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
    margin-bottom: 30px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.87rem !important;
    color: #333;
    margin-top: 1rem;
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
      transform: translateY(160%);
      align-self: flex-start;
    }

    /* ---- 2. What is this? ---- */
    .w-left {
      width: 45%;
    }

    .w-left p {
      font-size: 1.2rem;
    }

    .w-right {
      width: 55%;
    }

    /* ---- 6. Contact section ---- */
    .form-content {
      width: 100%;
      max-width: none;
    }

    .checkbox-label {
      margin-top: 1.2rem;
      margin-bottom: 0 !important;
      font-size: 1rem !important;
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

    /* ---- 2. What is this? ---- */
    .what-i-t {
      flex-direction: column;
      align-items: center;
    }

    .what-i-t-container {
      flex-direction: column;
      margin-bottom: 0;
    }

    .w-left {
      width: 100%;
      padding-right: 0;
    }

    .w-left p {
      font-size: 1.3rem;
    }

    .w-right {
      width: 100%;
      padding: 0;
      margin: 50px 0;
      display: flex;
      flex-direction: column;
    }

    /* ---- 3. Why necessary? ---- */
    .why-nec-content,
    .how-is-it-g-content,
    .why-is-it-im-content,
    .work-in-team-content,
    .contact-content {
      padding: 30px 20px;
    }

    /* ---- 6. Contact section ---- */
    .form-row {
      display: flex;
      flex-direction: column; /* Stack vertically instead of side by side */
      gap: 25px;
      margin-bottom: 25px;
    }

    .checkbox-label {
      font-size: 1rem !important;
    }
  }

  /* ---- Media query - 425 ---- */
  @media screen and (max-width: 425px) {
    .cta-button {
      width: 250px;
      height: 100px;
    }
  }
</style>
