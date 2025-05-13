<script lang="ts">
    import { goto } from '$app/navigation'
    import { page } from '$app/state'
    import { sideBar } from '$lib/layouts/side-bar/state.svelte'
    import { Icon, type IconSource } from '@steeze-ui/svelte-icon'
    import { fade } from 'svelte/transition'

    type Props = {
        title: string
        route: string
        icon: IconSource
    }

    let { title, route, icon }: Props = $props()
    let selected = $derived(page.url.pathname === route)
</script>

<li class="my-0.5 w-full">
    <button
        class="{selected
            ? 'bg-base-content/5'
            : 'hover:bg-base-content/5'} w-full flex items-center gap-3 rounded-lg p-3 text-lg font-bold"
        onclick={() => goto(route)}
    >
        <Icon src={icon} class="size-7" theme={selected ? 'filled' : 'default'} />
        {#if sideBar.title}
            <span in:fade={{ duration: 50 }}>{title}</span>
        {/if}
    </button>
</li>
