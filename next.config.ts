import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/app',
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
