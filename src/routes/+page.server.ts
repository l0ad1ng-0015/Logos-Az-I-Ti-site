export const load = async () => {
  return {
    seo: {
      title: "ОЦ „Логос – Аз и Ти“",
      description:
        "Логопедични консултации, диагностика и терапевтични програми за деца в Овча купел, София.",
      path: "/",
      image: "/og-home.jpg",
      type: "website",
      breadcrumbs: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://logosaziti.netlify.app/",
        },
      ],
    },
  };
};
