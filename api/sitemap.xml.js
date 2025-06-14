export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://pro-idea-abels-projects-56f2149c.vercel.app/</loc>
      <lastmod>2025-06-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://pro-idea-abels-projects-56f2149c.vercel.app/projects</loc>
      <lastmod>2025-06-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://pro-idea-abels-projects-56f2149c.vercel.app/contact</loc>
      <lastmod>2025-06-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`);
}
