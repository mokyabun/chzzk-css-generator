<script lang="ts">
    import { theme, toggleTheme } from './state.svelte'
    import Icon from '@iconify/svelte'
</script>

<button
    class="hover:bg-base-content/5 flex aspect-square h-full w-auto items-center justify-center rounded-lg"
    aria-label="테마 변경"
    onclick={toggleTheme}
    title="Toggle theme"
>
    <span class="swap swap-active swap-rotate">
        <span class:swap-on={theme.value === 'light'} class:swap-off={theme.value !== 'light'}>
            <Icon icon="tabler:sun" class="size-6" />
        </span>
        <span class:swap-on={theme.value === 'dark'} class:swap-off={theme.value !== 'dark'}>
            <Icon icon="tabler:moon" class="size-6" />
        </span>
    </span>
</button>
