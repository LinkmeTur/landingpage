import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';
export default {
    content: [
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        default: {
                            '50': '#f6f8f7',
                            '100': '#eaefec',
                            '200': '#dee5e0',
                            '300': '#d2dcd5',
                            '400': '#c5d2c9',
                            '500': '#b9c9be',
                            '600': '#99a69d',
                            '700': '#78837c',
                            '800': '#585f5a',
                            '900': '#383c39',
                            foreground: '#000',
                            DEFAULT: '#b9c9be',
                        },
                        primary: {
                            '50': '#e4fff7',
                            '100': '#beffec',
                            '200': '#97ffe0',
                            '300': '#71ffd5',
                            '400': '#4bffc9',
                            '500': '#25ffbe',
                            '600': '#1fd29d',
                            '700': '#18a67c',
                            '800': '#12795a',
                            '900': '#0b4d39',
                            foreground: '#000',
                            DEFAULT: '#25ffbe',
                        },
                        secondary: {
                            '50': '#e6efff',
                            '100': '#c3d8fe',
                            '200': '#a0c1fd',
                            '300': '#7daafc',
                            '400': '#5a93fc',
                            '500': '#377cfb',
                            '600': '#2d66cf',
                            '700': '#2451a3',
                            '800': '#1a3b77',
                            '900': '#11254b',
                            foreground: '#000',
                            DEFAULT: '#377cfb',
                        },
                        success: {
                            '50': '#e2f9f2',
                            '100': '#b9efdf',
                            '200': '#91e6cd',
                            '300': '#68ddba',
                            '400': '#40d4a8',
                            '500': '#17cb95',
                            '600': '#13a77b',
                            '700': '#0f8461',
                            '800': '#0b6047',
                            '900': '#073d2d',
                            foreground: '#000',
                            DEFAULT: '#17cb95',
                        },
                        warning: {
                            '50': '#fffbea',
                            '100': '#fff5cd',
                            '200': '#ffefb0',
                            '300': '#ffea92',
                            '400': '#ffe475',
                            '500': '#ffde58',
                            '600': '#d2b749',
                            '700': '#a69039',
                            '800': '#79692a',
                            '900': '#4d431a',
                            foreground: '#000',
                            DEFAULT: '#ffde58',
                        },
                        danger: {
                            '50': '#ffe5e5',
                            '100': '#ffc1c1',
                            '200': '#ff9d9d',
                            '300': '#ff7979',
                            '400': '#ff5555',
                            '500': '#ff3131',
                            '600': '#d22828',
                            '700': '#a62020',
                            '800': '#791717',
                            '900': '#4d0f0f',
                            foreground: '#000',
                            DEFAULT: '#ff3131',
                        },
                        background: '#f6fffa',
                        foreground: '#004c1b',
                        content1: {
                            DEFAULT: '#e0f5e8',
                            foreground: '#000',
                        },
                        content2: {
                            DEFAULT: '#c2ebd0',
                            foreground: '#000',
                        },
                        content3: {
                            DEFAULT: '#a3e0b9',
                            foreground: '#000',
                        },
                        content4: {
                            DEFAULT: '#85d6a1',
                            foreground: '#000',
                        },
                        focus: '#66cc8a',
                        overlay: '#000000',
                    },
                },
                dark: {
                    colors: {
                        default: {
                            '50': '#111111',
                            '100': '#212121',
                            '200': '#323232',
                            '300': '#424242',
                            '400': '#535353',
                            '500': '#757575',
                            '600': '#989898',
                            '700': '#bababa',
                            '800': '#dddddd',
                            '900': '#ffffff',
                            foreground: '#fff',
                            DEFAULT: '#535353',
                        },
                        primary: {
                            '50': '#0b4d39',
                            '100': '#12795a',
                            '200': '#18a67c',
                            '300': '#1fd29d',
                            '400': '#25ffbe',
                            '500': '#4bffc9',
                            '600': '#71ffd5',
                            '700': '#97ffe0',
                            '800': '#beffec',
                            '900': '#e4fff7',
                            foreground: '#000',
                            DEFAULT: '#25ffbe',
                        },
                        secondary: {
                            '50': '#11254b',
                            '100': '#1a3b77',
                            '200': '#2451a3',
                            '300': '#2d66cf',
                            '400': '#377cfb',
                            '500': '#5a93fc',
                            '600': '#7daafc',
                            '700': '#a0c1fd',
                            '800': '#c3d8fe',
                            '900': '#e6efff',
                            foreground: '#000',
                            DEFAULT: '#377cfb',
                        },
                        success: {
                            '50': '#073d2d',
                            '100': '#0b6047',
                            '200': '#0f8461',
                            '300': '#13a77b',
                            '400': '#17cb95',
                            '500': '#40d4a8',
                            '600': '#68ddba',
                            '700': '#91e6cd',
                            '800': '#b9efdf',
                            '900': '#e2f9f2',
                            foreground: '#000',
                            DEFAULT: '#17cb95',
                        },
                        warning: {
                            '50': '#4d431a',
                            '100': '#79692a',
                            '200': '#a69039',
                            '300': '#d2b749',
                            '400': '#ffde58',
                            '500': '#ffe475',
                            '600': '#ffea92',
                            '700': '#ffefb0',
                            '800': '#fff5cd',
                            '900': '#fffbea',
                            foreground: '#000',
                            DEFAULT: '#ffde58',
                        },
                        danger: {
                            '50': '#4d0f0f',
                            '100': '#791717',
                            '200': '#a62020',
                            '300': '#d22828',
                            '400': '#ff3131',
                            '500': '#ff5555',
                            '600': '#ff7979',
                            '700': '#ff9d9d',
                            '800': '#ffc1c1',
                            '900': '#ffe5e5',
                            foreground: '#000',
                            DEFAULT: '#ff3131',
                        },
                        background: '#010b06',
                        foreground: '#99d2ad',
                        content1: {
                            DEFAULT: '#14291c',
                            foreground: '#fff',
                        },
                        content2: {
                            DEFAULT: '#295237',
                            foreground: '#fff',
                        },
                        content3: {
                            DEFAULT: '#3d7a53',
                            foreground: '#fff',
                        },
                        content4: {
                            DEFAULT: '#52a36e',
                            foreground: '#000',
                        },
                        focus: '#66cc8a',
                        overlay: '#ffffff',
                    },
                },
            },
            layout: {
                disabledOpacity: '0.5',
            },
        }),
    ],
} satisfies Config;
