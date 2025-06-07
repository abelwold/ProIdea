// generate-sitemap.js
const fs = require("fs");

const domain = "https://pro-idea-abels-projects-56f2149c.vercel.app";

const pages = [
  "/",
  "/projects",
  "/about",
  "/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `<url>
  <loc>${domain}${page}</loc>
  <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>${page === "/" ? "1.0" : "0.8"}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("✅ sitemap.xml generated!");
