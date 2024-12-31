import { watch } from '$utils/rune'

export type Theme = 'light' | 'dark'

export const theme = $state<{ value: Theme }>({
    value: (() => {
        const saved = localStorage.getItem('theme')

        if (saved === 'dark' || saved === 'light') {
            return saved
        }

        if (matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }

        return 'light'
    })(),
})

export function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

$effect.root(() => {
    watch(
        () => theme.value,
        (value) => document.body.setAttribute('data-theme', value),
    )

    watch(
        () => theme.value,
        (value) => localStorage.setItem('theme', value),
        true,
    )
})

setTimeout(() => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s'
}, 50)
