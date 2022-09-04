/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                main: {
                    black: '#1A202C',
                    teal: {
                        dark: '#032D3C',
                        light: '#38BDF8',
                    },
                },
            },

            fontFamily: {
                text: ['Inter var', ...defaultTheme.fontFamily.sans],
                title: ['Segoe UI', ...defaultTheme.fontFamily.serif],
                cursive: [
                    'Sacramento Regular',
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            screens: {
                mobileSM: '375px',
                mobileMD: '411px',
                mobile: '576px',
                tablet: '640px',
                laptop: '1024px',
                desktop: '1280px',
            },
        },
    },
    plugins: [],
};
