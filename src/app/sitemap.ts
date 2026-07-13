import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/services",
  "/ai-automation",
  "/industries",
  "/how-we-work",
  "/about",
  "/ask-ai",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
