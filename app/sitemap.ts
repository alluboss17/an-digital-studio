import type { MetadataRoute } from "next";

const siteUrl = "https://www.andigitalstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/audit`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
