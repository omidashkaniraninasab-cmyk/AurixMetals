// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/.next/', '/api/'], // مسیرهایی که نباید ایندکس شوند
    },
    sitemap: 'https://aurixmetals.ir/sitemap.xml',
  };
}