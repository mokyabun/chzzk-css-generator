<script>
    import { SettingsLayout, SettingsSection, settings } from '$lib/settings'
</script>

<SettingsLayout category="일반">
    <SettingsSection title="전체 사이즈">
        <input type="number" class="input input-bordered w-3/4" bind:value={settings.general.size} />
    </SettingsSection>
    <SettingsSection title="채팅 간격">
        <input type="number" class="input input-bordered w-3/4" bind:value={settings.general.gap} />
    </SettingsSection>
    <SettingsSection title="폰트 URL">
        <input type="text" class="input input-bordered w-3/4" bind:value={settings.general.font} />
    </SettingsSection>
</SettingsLayout>
