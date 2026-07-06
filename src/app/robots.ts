import { MetadataRoute } from "next";
import { CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${CONFIG.siteUrl}/sitemap.xml`,
  };
}
