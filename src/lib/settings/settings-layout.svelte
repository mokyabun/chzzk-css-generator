<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        children?: Snippet
        category: string
    }

    let { children, category }: Props = $props()
</script>

<div>
    <h2 class="mb-2 text-2xl font-bold">{category}</h2>
    <div class="bg-base-100 flex flex-col gap-y-6 rounded-xl p-6 shadow-xl">
        {@render children?.()}
    </div>
</div>
