<script>
    import { Icon } from '$components/icon'
    import { open } from '$state/sidebar'
    import { Menu2 } from '@steeze-ui/tabler-icons'
    import { SidebarButton } from '../sidebar'
    import AppName from './AppName.svelte'
    import CopyButton from './CopyButton.svelte'
    import ResetButton from './ResetButton.svelte'
    import ThemeButton from './ThemeButton.svelte'

    const toggleSidebar = () => {
        open.value = !open.value
    }
</script>

<div class="fixed left-0 top-0 z-[99] flex h-16 w-full justify-center bg-base-100 px-3 py-2 shadow-md">
    <SidebarButton onclick={toggleSidebar} aria-label="사이드바 토글">
        <Icon icon={Menu2} />
    </SidebarButton>
    <AppName class="ml-4" />
    <div class="flex-1"></div>
    <ResetButton />
    <CopyButton />
    <ThemeButton />
</div>
