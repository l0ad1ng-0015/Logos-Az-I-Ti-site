<script lang="ts">
  import "./styles.css";
  import Header from "../lib/components/layout/Header.svelte";
  import Footer from "../lib/components/layout/Footer.svelte";

  const SITE_URL = "https://logosaziti.netlify.app"; // напр. 'https://logos-aziti.bg'
  const SITE_NAME = "ОЦ „Логос – Аз и Ти“";
  const DEFAULT_IMAGE = "/logos/nav-logo.png"; // 1200×630px, ще го качиш в /static
  const LOGO = "/logos/logo.png"; // прозрачно лого 512×512 (или 300×300)

  export let data: {
    seo?: {
      title?: string;
      description?: string;
      path?: string; // напр. '/uslugi'
      url?: string; // ако искаш да подадеш пълен URL
      image?: string; // относителен път като '/og-uslugi.jpg'
      type?: "website" | "article";
      noindex?: boolean;
      breadcrumbs?: Array<{
        "@type": "ListItem";
        position: number;
        name: string;
        item: string;
      }>;
    };
  } = {};

  const title = data.seo?.title ?? "ОЦ „Логос – Аз и Ти“";
  const description =
    data.seo?.description ??
    "Център за образователни и терапевтични услуги и програми за цялостно развитие на детето в кв. Овча купел, София.";
  const absoluteUrl = data.seo?.url ?? SITE_URL + (data.seo?.path ?? "/");
  const imageAbs = data.seo?.image
    ? SITE_URL + data.seo.image
    : SITE_URL + DEFAULT_IMAGE;
  const type = data.seo?.type ?? "website";
  const noindex = data.seo?.noindex ?? false;

  // ---- JSON-LD @graph (Google “graphs”) ----
  const ldGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO}`,
        sameAs: [
          "https://www.instagram.com/logosaziti/",
          "https://www.facebook.com/people/%D0%9E%D0%A6-%D0%9B%D0%BE%D0%B3%D0%BE%D1%81-%D0%90%D0%B7-%D0%B8-%D0%A2%D0%B8/61564854236122/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}#org` },
        inLanguage: "bg-BG",
        // Ако по-късно направиш вътрешно търсене, можем да добавим SearchAction
      },
      {
        // Използваме MedicalClinic за логопедичен/терапевтичен център
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}#clinic`,
        name: SITE_NAME,
        url: SITE_URL,
        image: imageAbs,
        address: {
          "@type": "PostalAddress",
          streetAddress: "ж.к. „Овча купел-1“, бл. 409, вх. Б",
          addressLocality: "София",
          addressCountry: "BG",
        },
        areaServed: "София",
        medicalSpecialty: "SpeechTherapy",
        priceRange: "По запитване",
        telephone: "087 686 0602",
        email: "logos_aziti@abv.bg",
      },
    ],
  };

  // Ако дадена страница подаде breadcrumbs, ще генерираме и BreadcrumbList
  const ldBreadcrumbs = data.seo?.breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.seo.breadcrumbs,
      }
    : null;
</script>

<svelte:head>
  <!-- Основни -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={absoluteUrl} />
  <meta
    name="robots"
    content={noindex ? "noindex, nofollow" : "index, follow"}
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="SvelteKit" />

  <!-- Open Graph -->
  <meta property="og:locale" content="bg_BG" />
  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={absoluteUrl} />
  <meta property="og:image" content={imageAbs} />
  <meta property="og:image:alt" content="ОЦ „Логос – Аз и Ти“" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <!-- По желание: @акаунти
  <meta name="twitter:site" content="@ADD_TWITTER_SITE" />
  <meta name="twitter:creator" content="@ADD_TWITTER_CREATOR" />
  -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageAbs} />

  <!-- JSON-LD @graph (Organization, WebSite, MedicalClinic) -->
  <script type="application/ld+json">
{JSON.stringify(ldGraph)}
  </script>

  {#if ldBreadcrumbs}
    <script type="application/ld+json">
{JSON.stringify(ldBreadcrumbs)}
    </script>
  {/if}

  <link rel="icon" href="/favicon.png" />
  <!-- Favicons / PWA (по желание) -->
  <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" /> -->
</svelte:head>

<!-- <slot /> -->

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
