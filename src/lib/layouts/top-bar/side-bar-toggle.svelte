<script lang="ts">
    import { toggleSideBar } from '../side-bar'
    import Icon from '@iconify/svelte'
</script>

<button class="hover:bg-base-content/5 flex items-center rounded-lg p-3 text-lg font-bold" onclick={toggleSideBar}>
    <Icon icon="tabler:menu-2" class="size-6" />
</button>
