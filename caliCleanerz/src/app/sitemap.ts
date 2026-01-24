import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://calicleanerz.netlify.app/",
      lastModified: new Date(),
    },
    {
      url: "https://calicleanerz.netlify.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://calicleanerz.netlify.app/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://calicleanerz.netlify.app/contact",
      lastModified: new Date(),
    },
  ];
}
