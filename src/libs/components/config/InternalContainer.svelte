<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        children?: Snippet
    }

    let { children }: Props = $props()
</script>

<div class="flex min-h-12 items-center justify-between gap-x-4 font-bold">
    {@render children?.()}
</div>
