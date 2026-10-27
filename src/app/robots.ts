import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://apose-eight.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot-Extended",
          "Amazonbot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
