<script>
    import { Icon } from '$components/icon'
    import { css } from '$state/css'
    import { Copy } from '@steeze-ui/tabler-icons'

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(css.value)

            alert('클립보드에 복사되었습니다.')
        } catch (err) {
            console.error('Failed to copy to clipboard:', err)
        }
    }
</script>

<button
    class="flex aspect-square h-full w-auto items-center justify-center rounded-lg hover:bg-base-content/5"
    aria-label="클립보드로 복사"
    onclick={copyToClipboard}
    title="Toggle theme"
>
    <Icon icon={Copy} />
</button>
