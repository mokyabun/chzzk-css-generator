<script lang="ts">
    import { goto } from '$app/navigation'
    import { page } from '$app/state'
    import { Icon } from '$components/icon'
    import { watch } from '$utils/rune'
    import { menus } from './menus'
    import { fade } from 'svelte/transition'
    import { open } from '$state/sidebar'
    import SidebarButton from './SidebarButton.svelte'

    let timeout: ReturnType<typeof setTimeout> | undefined
    let showText = $state(open.value)

    watch(
        () => open.value,
        (value) => {
            clearTimeout(timeout)

            if (value === false) {
                showText = value
                return
            }

            timeout = setTimeout(() => {
                showText = value
            }, 250)
        },
    )
</script>

<aside
    class="hide-scroll bg-base-100 overflow-y-auto py-6 shadow-lg transition-[min-width] {open.value
        ? 'min-w-52 duration-300'
        : 'min-w-0 duration-500'}"
>
    <ul class="mx-3">
        {#each menus as i}
            {#if i === 'divider'}
                <li class="divider mx-4 my-0.5"></li>
            {:else}
                <li class="my-0.5 w-full">
                    <SidebarButton
                        class="w-full {page.url.pathname === i.route ? 'bg-base-content/5' : ''}"
                        aria-label="{i.title} 설정으로 이동"
                        onclick={() => goto(i.route)}
                    >
                        <Icon icon={i.icon} />
                        {#if showText}
                            <span in:fade={{ duration: 50 }}>{i.title}</span>
                        {/if}
                    </SidebarButton>
                </li>
            {/if}
        {/each}
    </ul>
</aside>

<style lang="postcss">
    .hide-scroll::-webkit-scrollbar {
        display: none;
    }

    .hide-scroll::marker {
        display: none;
    }

    .hide-scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
