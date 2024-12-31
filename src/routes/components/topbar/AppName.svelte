<script lang="ts">
    import { ChzzkLogo } from '$assets/images'
    import { theme } from '$state/theme'

    type Props = {
        class?: string
    }

    let { class: className }: Props = $props()
</script>

<div class="flex items-center gap-[0.4em] text-xl md:text-2xl {className}">
    <img src={ChzzkLogo} alt="치지직 로고" class="h-[1em] {theme.value === 'light' ? 'invert' : ''}" />
    <h1 class="font-extralight">채팅 CSS 생성기</h1>
</div>
