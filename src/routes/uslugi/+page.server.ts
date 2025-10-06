export const load = async () => {
  return {
    seo: {
      title: "Логопедични услуги за деца – София | ОЦ Логос „Аз и ти“",
      description:
        "Логопедична диагностика, ранна превенция, ОМТ и подпомагащи обучения. Индивидуални планове за цялостно развитие.",
      path: "/uslugi",
      image: "/og-uslugi.jpg",
      type: "website",
      breadcrumbs: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://logosaziti.netlify.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Услуги",
          item: "https://logosaziti.netlify.app/uslugi",
        },
      ],
    },
  };
};
