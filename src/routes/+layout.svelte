<script lang="ts">
  import "./styles.css";
  import Header from "../lib/components/layout/Header.svelte";
  import Footer from "../lib/components/layout/Footer.svelte";

  export const title = "ОЦ „Логос – Аз и Ти“";
  export const description =
    "ОЦ „Логос – Аз и Ти“ е център за образователни и терапевтични услуги и програми за цялостно развитие на детето в кв. Овча купел, София.";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-WZT9NVM8");
  </script>
  <!-- End Google Tag Manager -->

  <meta name="author" content="Логос - Аз и Ти" />
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="логопед София, логопед за деца София, детски логопед София, логопед Овча купел, логопедичен център София, логопедична терапия София, логопедична диагностика София, логопедична консултация София, ранна логопедична превенция, ранна превенция на речта, логопедични услуги София, логопедичен кабинет София, логопед за заекване, логопед при забавено говорно развитие, логопед при артикулационни нарушения, логопед при езикови нарушения, логопед при фонологични нарушения, логопед при дислалия, логопед при дисфазия, логопед при аутизъм, логопед при синдром на Даун, логопед за бебета и малки деца, логопедична диагностика и терапия, орофациална миофункционална терапия София, ОМТ София, миофункционална терапия София, терапия при орални навици, логопедична терапия след френулотомия, логопед след къса юздичка, логопедична терапия при дишане с уста, логопедична терапия при неправилно преглъщане, логопедична терапия при захапка, логопедична терапия за правилно дишане, логопедична рехабилитация София, логопедични занимания София, логопедични упражнения за деца, логопедични игри за родители, родителски обучения логопед София, семинари за родители София, обучение на родители за развитие на речта, логопедична вдъхновителница, логопедични ресурси за родители, логопед онлайн консултация, логопедичен специалист София, консултация с логопед София, логопедична помощ за деца, логопедични програми София, детско развитие и реч София, развитие на речта при деца, логопедичен преглед София, логопедична оценка София, логопедична диагностика деца, терапия при заекване София, логопедични упражнения за правилна артикулация, логопедична помощ при двуезични деца, логопедична помощ при слухови нарушения, логопедична помощ при забавено развитие, логопедична терапия след операции, логопедични уроци София, логопедична подкрепа София, логопедична терапия за деца 2-3 години, логопедична терапия за деца 4-6 години, логопедична терапия за ученици, логопедична помощ за родители, логопед Овча купел 1, логопед Овча купел 2, логопед Бъкстон, логопед Красно село, логопед Княжево, логопед Горна баня, логопед Манастирски ливади, logoped Sofia, detski logoped Sofia, logoped Ovtcha kupel, orofacialna miofunkcionalna terapiya Sofia, ranna prevenziya logopedia, OMT logoped Sofia"
  />

  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="ОЦ „Логос – Аз и Ти“" />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="ОЦ „Логос – Аз и Ти“" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/" />
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  :global(body) {
    margin: 0 !important;
    --background: rgb(255, 249, 238);
    --background-hover: rgb(247, 236, 218);
    --orange: rgb(255, 172, 113);
    --orange-light: rgb(255 236 211);
    --orange-dark: rgba(254, 223, 183, 0.962);
    --green-main: rgba(175, 214, 131, 255);
    --green-secondory: rgba(148, 205, 83, 255);
    --green-dark: rgba(47, 77, 25, 1);
    --green-button: rgb(226, 240, 153);
    --green-button-hover: rgb(233, 244, 176);
    --yellow: rgba(254, 246, 1, 255);
    --blue-example: rgba(227, 242, 255, 255);
    font-weight: 400;
    font-style: normal;
    zoom: 90%;

    /* min-height: calc(100vh - 140px); */
  }

  :global(h1, h2, h3, h4, h5, h6, p, li, a, strong) {
    font-family: "ABeeZee", sans-serif !important;
  }

  main {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: calc(100vh - 140px);
    padding: 20px;
    /* height: 2000px; */
    background-color: var(--background);
  }
</style>
