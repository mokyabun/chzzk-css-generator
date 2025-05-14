<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        children?: Snippet
        title?: string
    }

    let { children, title }: Props = $props()
</script>

<div class="flex min-h-12 items-center justify-between gap-x-4 font-bold">
    <span class="text-base-content/80">{title}</span>
    {@render children?.()}
</div>
