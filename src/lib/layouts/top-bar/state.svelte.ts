const initialTheme: 'light' | 'dark' = (() => {
    const saved = localStorage.getItem('theme')

    if (saved === 'dark' || saved === 'light') {
        return saved
    }

    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }

    return 'light'
})()

export const theme = $state({ value: initialTheme })

export function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    document.body.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
}

// Initial theme
document.body.setAttribute('data-theme', theme.value)
setTimeout(() => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s'
}, 50)
