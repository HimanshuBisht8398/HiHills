import { MetadataRoute } from 'next';
import { ADVENTURE_PACKAGES } from './adventure/adventure-data';
import { POPULAR_PACKAGES } from './packages/package-data';
import { DO_DHAM_COMBOS } from './spiritual-yatra/do-dham/do-dham-data';
import { SPIRITUAL_YATRA_PACKAGES } from './spiritual-yatra/yatra-data';
import { TREKS } from './treks/trek-data';
import { SITE_URL } from './lib/site-config';

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/treks`, lastModified: now },
    { url: `${SITE_URL}/treks/winter`, lastModified: now },
    { url: `${SITE_URL}/treks/summer`, lastModified: now },
    { url: `${SITE_URL}/treks/rainy`, lastModified: now },
    { url: `${SITE_URL}/chardham`, lastModified: now },
    { url: `${SITE_URL}/adventure`, lastModified: now },
    { url: `${SITE_URL}/hotels`, lastModified: now },
    { url: `${SITE_URL}/homestays`, lastModified: now },
    { url: `${SITE_URL}/jeep-safari`, lastModified: now },
    { url: `${SITE_URL}/cab-services`, lastModified: now },
    { url: `${SITE_URL}/spiritual-yatra/do-dham`, lastModified: now },
  ];

  const charDhamIds = ['badrinath', 'kedarnath', 'badrinath-kedarnath', 'badrinath-heli'];
  const charDhamUrls: MetadataRoute.Sitemap = charDhamIds.map((id) => ({
    url: `${SITE_URL}/chardham/${id}`,
    lastModified: now,
  }));

  const trekUrls: MetadataRoute.Sitemap = TREKS.map((trek) => ({
    url: `${SITE_URL}/treks/${trek.slug}`,
    lastModified: now,
  }));

  const adventureUrls: MetadataRoute.Sitemap = ADVENTURE_PACKAGES.map((pkg) => ({
    url: `${SITE_URL}/adventure/${pkg.slug}`,
    lastModified: now,
  }));

  const popularPackageUrls: MetadataRoute.Sitemap = POPULAR_PACKAGES.map((pkg) => ({
    url: `${SITE_URL}/packages/${pkg.slug}`,
    lastModified: now,
  }));

  const spiritualYatraUrls: MetadataRoute.Sitemap = SPIRITUAL_YATRA_PACKAGES.map((pkg) => ({
    url: `${SITE_URL}/spiritual-yatra/${pkg.slug}`,
    lastModified: now,
  }));

  const doDhamUrls: MetadataRoute.Sitemap = DO_DHAM_COMBOS.map((pkg) => ({
    url: `${SITE_URL}/spiritual-yatra/do-dham/${pkg.slug}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...charDhamUrls,
    ...trekUrls,
    ...adventureUrls,
    ...popularPackageUrls,
    ...spiritualYatraUrls,
    ...doDhamUrls,
  ];
}
