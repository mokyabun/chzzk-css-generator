<script>
    import { Container, InternalContainer } from '$components/config'
    import { Checkbox, ColorPicker } from '$components/input'
    import { config } from '$state/css'
</script>

<Container category="컨테이너">
    <InternalContainer>
        활성화
        <Checkbox bind:checked={config.container.enabled} />
    </InternalContainer>
    {#if config.container.enabled}
        <InternalContainer>
            배경색
            <ColorPicker bind:value={config.container.color} />
        </InternalContainer>
        <InternalContainer>
            패딩
            <input type="number" class="input input-bordered w-3/4" bind:value={config.container.padding} />
        </InternalContainer>
        <InternalContainer>
            둥근 정도
            <input type="number" class="input input-bordered w-3/4" bind:value={config.container.roundness} />
        </InternalContainer>
    {/if}
</Container>
