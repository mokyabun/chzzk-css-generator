<script lang="ts">
    import Pickr from '@simonwep/pickr'
    import { untrack } from 'svelte'

    type Props = {
        value: string
    }

    let { value = $bindable() }: Props = $props()

    let button: HTMLButtonElement

    $effect(() => {
        untrack(() => {
            const pickr = Pickr.create({
                el: button,
                useAsButton: true,
                theme: 'nano',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        input: true,
                    },
                },
                default: value,
            })

            // eslint-disable-next-line
            // @ts-ignore
            pickr.on('changestop', (source, instance) => {
                value = instance.getColor().toHEXA().toString()
            })
        })
    })
</script>

<div
    class="border-base-content/20 flex w-3/4 items-center gap-3 rounded-sm border p-1.5 font-normal"
    style="height: var(--size); font-size: 0.875rem; --size: calc(var(--size-field, 0.25rem /* 4px */) * 10)"
>
    <button
        aria-label="Color Picker"
        bind:this={button}
        class="border-base-content/20 h-8 w-8 rounded-lg border"
        style="background-color: {value}"
    >
    </button>
    {value}
</div>
