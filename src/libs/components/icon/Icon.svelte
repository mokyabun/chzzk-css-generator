<script lang="ts">
    import { Icon, type IconSource } from '@steeze-ui/svelte-icon'

    type Props = {
        icon: IconSource
        class?: string
    }

    let { icon, class: className }: Props = $props()
</script>

<Icon src={icon} class="size-7 {className}" />
