<script lang="ts">
    import '../app.css'
    import '@simonwep/pickr/dist/themes/nano.min.css'
    import { Example } from './components/example'
    import { Sidebar } from './components/sidebar'
    import { Topbar } from './components/topbar'

    let { children } = $props()
</script>

<Topbar />
<div class="fixed top-0 flex h-screen w-full bg-base-200 pt-16">
    <div class="flex w-[65%] divide-base-content/20">
        <Sidebar />
        <div class="m-6 flex flex-1 flex-col gap-8 overflow-y-auto p-6 pb-20 relative">
            {@render children()}
            <div class="absolute text-xs font-extralight justify-self-end bottom-0">
                버그 제보 및 문의:
                <p class="inline font-bold">
                    <a href="mailto:mo@kya.sh" class="link">mokya</a>
                </p>
                <br />
                이 앱은 치지직 앱의 오픈소스 서드파티 사이트로, 치지직의 승인을 받지 않았으며, 공식 웹사이트가 아닙니다.
                <br />
                'CHZZK' 및 '치지직'은 네이버 주식회사의 등록상표입니다. 이 앱은 상표 소유 회사의 승인, 보증, 후원을 받지
                않았습니다.
            </div>
        </div>
    </div>
    <div class="h-full w-[35%] border border-base-content/20 bg-base-300">
        <Example class="h-full w-full" />
    </div>
</div>
