import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [sveltekit(), viteCompression({ algorithm: 'brotliCompress' }), visualizer()],

    build: {
        minify: 'terser',
        cssMinify: 'lightningcss',
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
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
})
