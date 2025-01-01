<script>
    import { Container, InternalContainer } from '$components/config'
    import { config } from '$state/css'
</script>

<Container category="일반">
    <InternalContainer>
        전체 사이즈
        <input type="number" class="input input-bordered w-3/4" bind:value={config.general.size} />
    </InternalContainer>
    <InternalContainer>
        채팅 간격
        <input type="number" class="input input-bordered w-3/4" bind:value={config.general.gap} />
    </InternalContainer>
    <InternalContainer>
        폰트 URL
        <input type="text" class="input input-bordered w-3/4" bind:value={config.general.font} />
    </InternalContainer>
</Container>
