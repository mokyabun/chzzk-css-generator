<script lang="ts">
    import { theme } from '$lib/states'
    import { Icon, type IconSource } from '@steeze-ui/svelte-icon'
    import { Moon, Sun } from '@steeze-ui/tabler-icons'

    const icons: Record<string, IconSource> = {
        light: Sun,
        dark: Moon,
    }
</script>

<button
    class="flex aspect-square h-full w-auto items-center justify-center rounded-lg hover:bg-base-content/5"
    aria-label="테마 변경"
    onclick={theme.toggle}
    title="Toggle theme"
>
    <span class="swap swap-active swap-rotate">
        {#each Object.entries(icons) as [key, icon]}
            <span class:swap-on={key === theme.value} class:swap-off={key !== theme.value}>
                <Icon src={icon} class="size-7" />
            </span>
        {/each}
    </span>
</button>
