<script>
    import { Container, InternalContainer } from '$components/config'
    import { config } from '$state/css'
</script>

<Container category="효과">
    <InternalContainer>
        상단 그라데이션
        <input type="checkbox" class="checkbox" bind:checked={config.effect.topGradient} />
    </InternalContainer>
    <InternalContainer>
        채팅 생성 효과
        <select class="select select-bordered w-3/4" bind:value={config.effect.chat.showEffect}>
            <option value={undefined}>없음</option>
            <option value="fade">페이드 인</option>
        </select>
    </InternalContainer>
    {#if config.effect.chat.showEffect}
        <InternalContainer>
            페이드 인 시간
            <div class="flex w-3/4 justify-end gap-2">
                {config.effect.chat.duration}
                <input
                    class="range"
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    bind:value={config.effect.chat.duration}
                />
            </div>
        </InternalContainer>
    {/if}
</Container>
