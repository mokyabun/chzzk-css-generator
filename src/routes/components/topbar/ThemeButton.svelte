<script lang="ts">
    import type { IconSource } from '@steeze-ui/svelte-icon'
    import { Icon } from '$components/icon'
    import { Moon, Sun } from '@steeze-ui/tabler-icons'
    import { type Theme, theme, toggleTheme } from '$state/theme'

    const icons: Record<Theme, IconSource> = {
        light: Sun,
        dark: Moon,
    }
</script>

<button
    class="flex aspect-square h-full w-auto items-center justify-center rounded-lg hover:bg-base-content/5"
    aria-label="테마 변경"
    onclick={toggleTheme}
    title="Toggle theme"
>
    <div class="swap swap-active swap-rotate">
        {#each Object.entries(icons) as [key, icon]}
            <div class:swap-on={key === theme.value} class:swap-off={key !== theme.value}>
                <Icon {icon} />
            </div>
        {/each}
    </div>
</button>
