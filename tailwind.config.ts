import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import { emerald, sunset } from 'daisyui/src/theming/themes'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard Variable'],
            },
        },
    },
    daisyui: {
        styled: true,
        themes: [
            {
                dark: {
                    ...sunset,
                    'base-100': '#0b0b0b',
                    'base-200': '#191919',
                    'base-300': '#1e1e1e',
                    'base-content': '#fff',
                },
                light: {
                    ...emerald,
                    'base-100': '#FFFFFF',
                    'base-200': '#ececec',
                    'base-300': '#e1dddd',
                },
            },
        ],
        themeRoot: 'body',
    },
    plugins: [daisyui],
} satisfies Config
