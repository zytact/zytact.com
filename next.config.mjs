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
};

export default nextConfig;
