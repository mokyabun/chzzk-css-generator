<script>
    import { Container, InternalContainer } from '$components/config'
    import { ColorPicker } from '$components/input'
    import { config } from '$state/css'
</script>

<Container category="텍스트">
    <InternalContainer>
        사이즈
        <input type="number" class="input input-bordered w-3/4" bind:value={config.text.size} />
    </InternalContainer>
    <InternalContainer>
        텍스트 간격
        <input type="number" class="input input-bordered w-3/4" bind:value={config.text.spacing} />
    </InternalContainer>
    <InternalContainer>
        텍스트 줄 높이
        <input type="number" class="input input-bordered w-3/4" bind:value={config.text.height} />
    </InternalContainer>
    <InternalContainer>
        색상
        <ColorPicker bind:value={config.text.color} />
    </InternalContainer>
</Container>
