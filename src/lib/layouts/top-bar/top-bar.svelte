<script lang="ts">
    import AppLogo from './app-logo.svelte'
    import SideBarToggle from './side-bar-toggle.svelte'
    import ThemeToggle from './theme-toggle.svelte'
</script>

<div class="fixed top-0 z-50 flex h-16 w-full justify-center bg-base-100 px-3 py-2 shadow-md">
    <SideBarToggle />
    <span class="ml-3"></span>
    <AppLogo />
    <span class="flex-1"></span>
    <ThemeToggle />
</div>
