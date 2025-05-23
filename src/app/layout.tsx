import type { Metadata } from 'next';
import { Geist, Geist_Mono, Russo_One, Roboto } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const roboto = Roboto({
    weight: '900',
    variable: '--font-roboto',
    subsets: ['latin'],
});
const roboto1 = Roboto({
    weight: '100',
    variable: '--font-roboto1',
    subsets: ['latin'],
});

const russo_one = Russo_One({
    subsets: ['latin'],
    variable: '--font-russo-one',
    weight: '400',
    display: 'swap',
});

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Linkme Tur',
    description: 'Conexões que movem o turismo',
    keywords: 'turismo, conexões, linkme tur',
    openGraph: {
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
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-BR'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${russo_one.variable} ${roboto.variable} ${roboto1.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
