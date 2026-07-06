import { MetadataRoute } from "next";
import { CONFIG } from "@/lib/constants";
import { getAllProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = CONFIG.siteUrl;
  const slugs = getAllProjectSlugs();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/projects`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/buyer-help`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/buyer-help/pm-awas-yojana`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/buyer-help/emi-calculator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/buyer-help/home-loan-documents`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/buyer-help/legal-title-check`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const projectPages = slugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    priority: 0.9,
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...projectPages];
}
