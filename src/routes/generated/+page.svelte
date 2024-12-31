<script lang="ts">
    import { css } from '$state/css'
</script>

<h2 class="flex items-center justify-between border-b-2 border-base-200 pb-2 text-2xl font-light">
    생성된 CSS
    <span class="text-xs font-extralight"> * 이 코드는 수정해도 저장되지 않습니다. </span>
</h2>
<div class="flex h-full flex-col gap-y-6">
    <textarea class="textarea h-full w-full" bind:value={css.value}> </textarea>
</div>
