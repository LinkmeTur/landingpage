import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */

    async redirects() {
        return [
            {
                source: '/',
                destination: '/app',
                has: [{ type: 'host', value: 'app.linkmetur.com.br' }],
                permanent: false, // Use "true" se quiser que o redirecionamento seja permanente
            },
            {
                source: '/',
                destination: '/blog',
                has: [{ type: 'host', value: 'blog.linkmetur.com.br' }],
                permanent: false,
            },
        ];
    },

    async rewrites() {
        return [
            {
                source: '/',
                destination: '/(pages)/app',
                has: [{ type: 'host', value: 'app.linkmetur.com.br' }],
            },
            {
                source: '/',
                destination: '/blog',
                has: [{ type: 'host', value: 'blog.linkmetur.com.br' }],
            },
            {
                source: '/',
                destination: '/system',
                has: [{ type: 'host', value: 'system.linkmetur.com.br' }],
            },
        ];
    },
};

export default nextConfig;
