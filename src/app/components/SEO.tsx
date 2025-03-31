'use client';
import { NextSeo } from 'next-seo';

export default function SEO() {
    return (
        <NextSeo
            title='Linkme Tur'
            description='Conexões que movem o turismo'
            openGraph={{
                title: 'Linkme Tur',
                description: 'Conexões que movem o turismo',
                type: 'website',
                url: 'https://linkmetur.com.br',
                siteName: 'Linkme Tur',
                images: [
                    {
                        url: 'https://linkmetur.com.br/images/og-image.png',
                        alt: 'Imagem do Linkme Tur',
                    },
                ],
            }}
        />
    );
}
