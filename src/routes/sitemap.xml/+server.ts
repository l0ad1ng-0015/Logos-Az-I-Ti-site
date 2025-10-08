import { SitemapStream, streamToPromise } from "sitemap";

export async function GET() {
  const sitemap = new SitemapStream({ hostname: "https://logosaziti.bg" });

  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },

    // Основни страници
    { url: "/za-nas", changefreq: "monthly", priority: 0.9 },
    { url: "/uslugi", changefreq: "monthly", priority: 0.9 },
    { url: "/kontakti", changefreq: "monthly", priority: 0.9 },
    { url: "/galeriya", changefreq: "monthly", priority: 0.9 },
    { url: "/blog", changefreq: "monthly", priority: 0.9 },
    { url: "/seminari", changefreq: "monthly", priority: 0.8 },
    { url: "/polezni-resursi", changefreq: "monthly", priority: 0.8 },
    { url: "/chesto-zadavani-vaprosi", changefreq: "monthly", priority: 0.8 },
    { url: "/otzivi", changefreq: "monthly", priority: 0.8 },

    // Подстраници / услуги (ако имаш отделни)
    { url: "/uslugi/ranna-prevenciya", changefreq: "monthly", priority: 0.7 },
    {
      url: "/uslugi/konsultaciya-i-diagnostika",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: "/uslugi/logopedichna-terapiya",
      changefreq: "monthly",
      priority: 0.7,
    },
    { url: "/uslugi/omt", changefreq: "monthly", priority: 0.7 },
    {
      url: "/uslugi/podpomagane-i-obucheniya",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: "/uslugi/logopedichna-vdahnovitelnica",
      changefreq: "monthly",
      priority: 0.7,
    },

    // Политики
    { url: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
    { url: "/terms", changefreq: "yearly", priority: 0.3 },
  ];

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const xmlBuffer = await streamToPromise(sitemap);
  const xml = xmlBuffer.toString();
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
