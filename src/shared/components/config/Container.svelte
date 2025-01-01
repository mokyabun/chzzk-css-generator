<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        children?: Snippet
        class?: string
        category: string
    }

    let { children, category, class: className }: Props = $props()
</script>

<div>
    <h2 class="mb-2 text-2xl font-light">{category}</h2>
    <div class="flex flex-col gap-y-6 bg-base-100 rounded-xl shadow-lg p-6 {className}">
        {@render children?.()}
    </div>
</div>
