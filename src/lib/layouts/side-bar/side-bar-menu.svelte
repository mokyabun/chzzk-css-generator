<script lang="ts">
    import { goto } from '$app/navigation'
    import { page } from '$app/state'
    import { sideBarTitleOpen } from './state.svelte'
    import Icon from '@iconify/svelte'
    import { fade } from 'svelte/transition'

    type Props = {
        title: string
        route: string
        icon: string
    }
    let { title, route, icon }: Props = $props()
    let selected = $derived(page.url.pathname === route)
</script>

<button
    class="{selected ?? 'bg-base-content/5'} hover:bg-base-content/5 flex w-full items-center gap-3 rounded-lg p-2.5"
    onclick={() => goto(route)}
>
    <Icon icon={selected ? icon + '-filled' : icon} class="size-6" />

    {#if sideBarTitleOpen.value}
        <span class="font-bold" in:fade={{ duration: 50 }}>{title}</span>
    {/if}
</button>
