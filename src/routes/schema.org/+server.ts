export async function GET() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Начало", "За нас", "Услуги", "Блог", "За вас", "Контакти"],
    url: [
      "https://logosaziti.bg/",
      "https://logosaziti.bg/za-nas",
      "https://logosaziti.bg/uslugi",
      "https://logosaziti.bg/blog",
      "https://logosaziti.bg/polezni-resursi",
      "https://logosaziti.bg/kontakti",
    ],
  };

  return new Response(JSON.stringify(schemaData, null, 2), {
    headers: { "Content-Type": "application/ld+json" },
  });
}
