<script lang="ts">
    import SideBarMenu from './side-bar-menu.svelte'
    import { sideBarOpen } from './state.svelte'
</script>

<aside
    class="hide-scroll bg-base-100 flex flex-col gap-1.5 overflow-y-auto px-3 py-6 shadow-xl transition-[min-width]
    {sideBarOpen.value ? 'min-w-52 duration-300' : 'min-w-0 duration-500'}"
>
    <SideBarMenu title="일반" route="/" icon="tabler:settings" />
    <div class="divider mx-4 my-0.5"></div>
    <SideBarMenu title="텍스트" route="/text" icon="tabler:message" />
    <SideBarMenu title="닉네임" route="/nickname" icon="tabler:user" />
    <SideBarMenu title="컨테이너" route="/container" icon="tabler:square" />
    <SideBarMenu title="외곽선" route="/outline" icon="tabler:inner-shadow-top-left" />
    <SideBarMenu title="효과" route="/effect" icon="tabler:filters" />
    <div class="divider mx-4 my-0.5"></div>
    <SideBarMenu title="CSS" route="/generated" icon="tabler:file-text" />
</aside>

<style lang="postcss">
    .hide-scroll::-webkit-scrollbar {
        display: none;
    }

    .hide-scroll::marker {
        display: none;
    }

    .hide-scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
