/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'zytact.in',
                    },
                ],
                destination: 'https://zytact.com/:path*',
                permanent: true, // This sets up a 301 redirect
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.zytact.in',
                    },
                ],
                destination: 'https://www.zytact.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
