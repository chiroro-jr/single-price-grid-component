/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            karla: ['Karla', 'sans-serif'],
        },
        colors: {
            white: 'hsl(100, 100%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            cyan: 'hsl(179, 62%, 43%)',
            'bright-yellow': 'hsl(71, 73%, 54%)',
            'light-gray': 'hsl(204, 43%, 93%)',
            'grayish-blue': 'hsl(218, 22%, 67%)',
        },
        extend: {},
    },
    plugins: [],
}
