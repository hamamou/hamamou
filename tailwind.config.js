/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            animation: {
                'gradient-slow': 'spin 40s linear infinite',
                'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%,100%': {opacity: '.4'},
                    '50%': {opacity: '1'},
                },
            },
        },
    },
    plugins: [],
};
