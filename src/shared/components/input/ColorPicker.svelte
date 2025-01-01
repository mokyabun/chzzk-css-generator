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

<div class="flex w-3/4 items-center gap-3 rounded-xl border border-base-content/20 p-2 font-normal">
    <button
        aria-label="Color Picker"
        bind:this={button}
        class="h-8 w-8 rounded-lg border border-base-content/20"
        style="background-color: {value}"
    >
    </button>
    {value}
</div>
