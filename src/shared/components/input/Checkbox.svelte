<script lang="ts">
    type Props = {
        class?: string
        checked: boolean
    }

    let { class: className, checked = $bindable() }: Props = $props()
</script>

<div class="flex h-12 w-3/4 items-center">
    <input type="checkbox" class="checkbox h-8 w-8 {className}" bind:checked />
</div>
