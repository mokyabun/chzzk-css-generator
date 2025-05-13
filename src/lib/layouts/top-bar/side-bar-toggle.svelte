<script lang="ts">
    import { sideBar } from '../side-bar'
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Menu2 } from '@steeze-ui/tabler-icons'
</script>

<button
    class="hover:bg-base-content/5 flex items-center gap-3 rounded-lg p-3 text-lg font-bold"
    onclick={sideBar.toggle}
>
    <Icon src={Menu2} class="size-7" />
</button>
