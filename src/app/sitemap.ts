import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${process.env.BASE_URL}/skills`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },

        {
            url: `${process.env.BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ];
}
