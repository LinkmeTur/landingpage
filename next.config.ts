import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */

    async redirects() {
        return [
            {
                source: '/',
                destination: '/pages/landingPage',
                permanent: false,
            },
            {
                source: '/',
                destination: '/pages/landingPage',
                has: [{ type: 'host', value: 'linkmetur.com.br' }],
                permanent: false, // Use "true" se quiser que o redirecionamento seja permanente
            },
        ];
    },

    async rewrites() {
        return [
            {
                source: '/',
                destination: '/pages/landingPage',
                has: [{ type: 'host', value: 'linkmetur.com.br' }],
            },
        ];
    },
};

export default nextConfig;
