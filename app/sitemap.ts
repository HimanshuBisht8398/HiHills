import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/treks`, lastModified: new Date() },
    { url: `${BASE_URL}/treks/winter`, lastModified: new Date() },
    { url: `${BASE_URL}/chardham`, lastModified: new Date() },
    { url: `${BASE_URL}/jeep-safari`, lastModified: new Date() },
    { url: `${BASE_URL}/hotels`, lastModified: new Date() },
    { url: `${BASE_URL}/adventure`, lastModified: new Date() },
    { url: `${BASE_URL}/districts/dehradun`, lastModified: new Date() },
  ];

  const charDhamIds = ['badrinath', 'kedarnath', 'badrinath-kedarnath', 'badrinath-heli'];
  const charDhamUrls: MetadataRoute.Sitemap = charDhamIds.map((id) => ({
    url: `${BASE_URL}/chardham/${id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...charDhamUrls];
}
