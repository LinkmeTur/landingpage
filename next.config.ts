import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */

    async redirects() {
        return [
            // {
            //     source: '/',
            //     destination: '/pages/app',
            //     permanent: false,
            // },
            {
                source: '/',
                destination: '/pages/landingPage',
                has: [{ type: 'host', value: 'linkmetur.com.br' }],
                permanent: false, // Use "true" se quiser que o redirecionamento seja permanente
            },
            {
                source: '/',
                destination: '/pages/blog',
                has: [{ type: 'host', value: 'blog.linkmetur.com.br' }],
                permanent: false,
            },
            {
                source: '/',
                destination: '/pages/learning',
                has: [{ type: 'host', value: 'academy.linkmetur.com.br' }],
                permanent: false,
            },
            {
                source: '/',
                destination: '/pages/system',
                has: [{ type: 'host', value: 'commandcenter.linkmetur.com.br' }],
                permanent: false,
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
            {
                source: '/',
                destination: '/pages/app',
                has: [{ type: 'host', value: 'app.linkmetur.com.br' }],
            },
            {
                source: '/',
                destination: '/pages/blog',
                has: [{ type: 'host', value: 'blog.linkmetur.com.br' }],
            },
            {
                source: '/',
                destination: '/pages/system',
                has: [{ type: 'host', value: 'commandcenter.linkmetur.com.br' }],
            },
        ];
    },
};

export default nextConfig;
