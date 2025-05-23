const baseUrl = process.env.NODE_ENV === "production"
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
