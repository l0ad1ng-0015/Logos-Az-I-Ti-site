import type { RequestHandler } from "@sveltejs/kit";

const HOST = "https://logosaziti.bg"; // смени ако е друг окончателният домейн

export const GET: RequestHandler = async () => {
  const body = `
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /draft/
Disallow: /tmp/
Disallow: /*?*preview=*
Disallow: /*?*utm_*

Sitemap: ${HOST}/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
