<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        children?: Snippet
        class?: string
    } & Record<string, unknown>

    let { children, class: className, ...props }: Props = $props()
</script>

<button class="flex items-center gap-3 rounded-lg p-3 text-lg font-bold hover:bg-base-content/5 {className}" {...props}>
    {@render children?.()}
</button>
