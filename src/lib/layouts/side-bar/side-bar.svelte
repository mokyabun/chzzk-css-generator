<script lang="ts">
    import { sideBar } from '$lib/layouts/side-bar/state.svelte'
    import SideBarMenu from './side-bar-menu.svelte'
    import { Square, Message, Settings, User, InnerShadowTopLeft, Filters, File } from '@steeze-ui/tabler-icons'
</script>

<aside
    class="hide-scroll bg-base-100 overflow-y-auto py-6 shadow-lg transition-[min-width] {sideBar.open
        ? 'min-w-52 duration-300'
        : 'min-w-0 duration-500'}"
>
    <SideBarMenu title="일반" route="/" icon={Settings} />
    <div class="divider mx-4 my-0.5"></div>
    <SideBarMenu title="텍스트" route="/text" icon={Message} />
    <SideBarMenu title="닉네임" route="/nickname" icon={User} />
    <SideBarMenu title="컨테이너" route="/container" icon={Square} />
    <SideBarMenu title="외곽선" route="/outline" icon={InnerShadowTopLeft} />
    <SideBarMenu title="효과" route="/effect" icon={Filters} />
    <div class="divider mx-4 my-0.5"></div>
    <SideBarMenu title="CSS" route="/generated" icon={File} />
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
