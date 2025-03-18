import { untrack } from 'svelte'

export function onMount(fn: () => void) {
    $effect(() => {
        untrack(fn)
    })
}
