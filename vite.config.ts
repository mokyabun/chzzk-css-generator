import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [tailwindcss(), sveltekit(), viteCompression({ algorithm: 'brotliCompress' })],
    build: {
        rollupOptions: {
            external: ['@simonwep/pickr', 'eta', 'lodash.debounce', 'zod'],
            output: {
                paths: {
                    '@simonwep/pickr': 'https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.9.1/+esm',
                    eta: 'https://cdn.jsdelivr.net/npm/eta@3.5.0/+esm',
                    'lodash.debounce': 'https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm',
                    zod: 'https://cdn.jsdelivr.net/npm/zod@3.24.1/+esm',
                },
            },
        },
    },
})
