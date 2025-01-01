<script>
    import { Container, InternalContainer } from '$components/config'
    import { Checkbox } from '$components/input'
    import { config } from '$state/css'
    import { effects } from './effects'
</script>

<Container category="일반 효과">
    <InternalContainer>
        상단 그라데이션
        <Checkbox bind:checked={config.effect.topGradient} />
    </InternalContainer>
</Container>

<Container category="채팅 생성 효과">
    <InternalContainer>
        종류
        <select class="select select-bordered w-3/4" bind:value={config.effect.chat.showEffect}>
            <option value={undefined}>없음</option>
            {#each Object.entries(effects) as [key, value]}
                <option value={null} disabled>{key}</option>
                {#each value as effect}
                    <option value={effect}>{effect}</option>
                {/each}
            {/each}
        </select>
    </InternalContainer>
    {#if config.effect.chat.showEffect}
        <InternalContainer>
            지속시간
            <div class="flex w-3/4 justify-end gap-2 items-center">
                <span class="text-xs w-6">
                    {config.effect.chat.showDuration}
                </span>
                <input
                    class="range"
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    bind:value={config.effect.chat.showDuration}
                />
            </div>
        </InternalContainer>
    {/if}
</Container>
