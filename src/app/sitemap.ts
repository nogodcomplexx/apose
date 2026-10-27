import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apose-eight.vercel.app";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/rezervace", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ski-areal-bublava", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/krusnohorska-magistrala", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/vylety-okoli", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/lobby-bar", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        "cs-CZ": `${baseUrl}${r.path}`,
        "en-US": `${baseUrl}${r.path}?lang=en`,
        "de-DE": `${baseUrl}${r.path}?lang=de`,
      },
    },
  }));
}
