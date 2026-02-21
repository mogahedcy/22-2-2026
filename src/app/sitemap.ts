import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://deyarsu.com';

    // Define your routes here
    const routes = [
        '',
        '/services/car-shades',
        '/services/pergolas',
        '/services/tents',
        '/services/sawatr', // Note: I should verify if folder is sawatr or sawater. In step 419 list_dir showed 'sawatr'.
        '/services/panel',
        '/services/landscaping',
        '/services/restoration',
        '/services/qarmid',
        '/contact',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
