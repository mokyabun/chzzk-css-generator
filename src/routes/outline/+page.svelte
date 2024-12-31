<script>
    import { Container, InternalContainer } from '$components/config'
    import { Checkbox, ColorPicker } from '$components/input'
    import { config } from '$state/css'
</script>

<Container category="외곽선">
    <InternalContainer>
        활성화
        <Checkbox bind:checked={config.outline.enabled} />
    </InternalContainer>
    {#if config.outline.enabled}
        <InternalContainer>
            종류
            <select class="select select-bordered w-3/4" bind:value={config.outline.type}>
                <option value="simple">심플</option>
                <option value="blur">블러</option>
                <option value="drop-shadow">드롭 섀도</option>
            </select>
        </InternalContainer>
        <InternalContainer>
            색상
            <ColorPicker bind:value={config.outline.color} />
        </InternalContainer>
        <InternalContainer>
            양
            <input type="number" class="input input-bordered w-3/4" bind:value={config.outline.amount} />
        </InternalContainer>
    {/if}
</Container>
