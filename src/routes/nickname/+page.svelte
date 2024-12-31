<script>
    import { Container, InternalContainer } from '$components/config'
    import { Checkbox } from '$components/input'
    import { config } from '$state/css'
</script>

<Container category="닉네임">
    <InternalContainer>
        활성화
        <Checkbox bind:checked={config.nickname.enabled} />
    </InternalContainer>
    {#if config.nickname.enabled}
        <InternalContainer>
            줄바꿈
            <Checkbox bind:checked={config.nickname.break} />
        </InternalContainer>
        <InternalContainer>
            사이즈
            <input type="number" class="input input-bordered w-3/4" bind:value={config.nickname.size} />
        </InternalContainer>
        <InternalContainer>
            간격
            <input type="number" class="input input-bordered w-3/4" bind:value={config.nickname.gap} />
        </InternalContainer>
    {/if}
</Container>
