<script>
  export let title = "Семинари | Логос – Аз и Ти";
  export let description = "Очаквайте скоро!";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <!-- <meta
    name="keywords"
    content="логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедични семинари София, обучения за родители София, семинари за логопеди София, семинари за детско развитие, семинари за речево развитие, обучения за специалисти София, логопедични обучения, образователни събития София, логопед София, логопедичен център София, логопедичен кабинет Овча купел, уъркшопи за родители, обучения за педагози София, терапевтични семинари София, програми за развитие на речта, образователни и терапевтични услуги София, логопедичен опит и споделяне, логопедични лекции и дискусии, logoped Sofia, seminari Sofia, obucheniya logopedia, uroci i lekcii logopedia, detski logoped Sofia, logoped Ovtcha kupel"
  />

  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="Семинари | Логос – Аз и Ти" />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="Семинари | Логос – Аз и Ти" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/" /> -->
</svelte:head>

<h1>Очаквайте скоро!</h1>

<a href="/" class="return">Върнете се към началната страница</a>

<style>
  :global(main) {
    min-height: 60vh !important;
    justify-content: center !important;
  }

  .return {
    font-size: 1.2rem;
    background: var(--orange);
    padding: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1.65rem;
    text-align: center;
    color: black;
    border-radius: 1rem;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }

  .return:hover {
    background: var(--orange-light);
    transition: 0.3s;
    text-decoration: underline;
  }
</style>
