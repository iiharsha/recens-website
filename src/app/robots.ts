const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? "https://recens.co.in"
  : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
