<script>
    import { Icon } from '$components/icon'
    import { resetConfig } from '$state/css'
    import { Restore } from '@steeze-ui/tabler-icons'

    const reset = () => {
        const ok = confirm('정말 지금 설정을 초기화하시겠습니까?')

        if (ok) {
            resetConfig()
        }
    }
</script>

<button
    class="flex aspect-square h-full w-auto items-center justify-center rounded-lg hover:bg-base-content/5"
    aria-label="초기화"
    onclick={reset}
    title="Toggle theme"
>
    <Icon icon={Restore} />
</button>
