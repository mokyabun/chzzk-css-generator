<script lang="ts">
    import { watch } from '$utils/rune'
    import { Message, X } from '@steeze-ui/tabler-icons'
    import { Icon } from '$components/icon'
    import { type Chat, random } from './generator'
    import { css } from '$state/css'

    type Props = {
        class?: string
    }

    let { class: className }: Props = $props()

    let messages = $state<Chat[]>([])
    const style = document.createElement('style')
    document.head.appendChild(style)
    watch(
        () => css.value,
        (value) => {
            messages = []
            style.textContent = value
        },
    )

    let enabled = $state(true)
    let interval: ReturnType<typeof setInterval> | undefined
    watch(
        () => enabled,
        (value) => {
            clearInterval(interval)

            if (value) {
                interval = setInterval(async () => {
                    if (!css.value) return

                    if (messages.length > 20) {
                        messages.shift()
                    }

                    messages.push(random())
                }, 1000)
            }
        },
    )

    const scrollToBottom = (node: HTMLDivElement, messages: Chat[]) => {
        const scroll = () =>
            node.scroll({
                top: node.scrollHeight,
            })
        scroll()

        return { update: scroll }
    }

    const toggleExample = () => {
        enabled = !enabled
    }
</script>

<div class="relative h-full">
    <button
        class="absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-base-100"
        aria-label="예시 채팅 토글"
        onclick={toggleExample}
    >
        <div class="swap swap-active swap-rotate">
            <div class:swap-on={enabled === true} class:swap-off={enabled !== true}>
                <Icon icon={Message} />
            </div>
            <div class:swap-on={enabled === false} class:swap-off={enabled !== false}>
                <Icon icon={X} />
            </div>
        </div>
    </button>
    <div class="chat-example h-full p-4">
        {#if css.value}
            <div class="live_overlay_chatting__gG7gu {className}" use:scrollToBottom={messages}>
                {#each messages as message (message.id)}
                    <div class="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                        <div class="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                            <div class="live_chatting_message_wrapper__xpYre">
                                <span
                                    class="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr"
                                    style="margin-right: 6px"
                                >
                                    {#if message.user.badges.length !== 0}
                                        <span class="live_chatting_username_wrapper__iJpJB">
                                            {#each message.user.badges as badge}
                                                <span class="live_chatting_username_icon__6Dj7b"
                                                    ><span class="badge_container__a64XB"
                                                        ><img src={badge} alt="배지" width="28" height="28" /></span
                                                    ></span
                                                >
                                            {/each}
                                        </span>
                                    {/if}
                                    <span
                                        class="live_chatting_username_nickname__dDbbj"
                                        style="color: {message.user.nicknameColor}"
                                    >
                                        <span>
                                            <span class="name_text__yQG50">{message.user.nickname}</span>
                                        </span>
                                    </span>
                                </span>

                                <span class="live_chatting_message_text__DyleH">
                                    {#if typeof message.message === 'string'}
                                        {message.message}
                                    {:else}
                                        {#each message.message as emoji}
                                            <img src={emoji} alt="emoji" />
                                        {/each}
                                    {/if}
                                </span>
                            </div>
                        </div>
                    </div>
                {/each}
                <div style="width: 100%; height: 1px; min-height: 1px"></div>
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
    .chat-example * {
        display: unset;
        box-sizing: border-box;
        -webkit-text-size-adjust: none;
    }

    .chat-example {
        /* Below CSS and above HTML is not mine, it's from CHZZK's chat overlay */
        /* I don't have any rights about this CSS, HTML code, design */
        /* It's for default chat structure */
        /* 🙏 */
        .badge_container__a64XB {
            position: relative;
        }

        div {
            display: block;
        }

        img,
        svg {
            vertical-align: top;
        }

        .live_overlay_chatting__gG7gu {
            -ms-overflow-style: none;
            -ms-flex-align: start;
            -webkit-overflow-scrolling: auto;
            align-items: flex-start;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            margin: 0 auto;
            -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 70px);
            mask-image: linear-gradient(180deg, transparent 0, #000 70px);
            overflow-y: auto;
            position: relative;
            scrollbar-width: none;
        }

        .live_overlay_chatting__gG7gu::-webkit-scrollbar {
            display: none;
        }

        .live_overlay_item__Sg18i {
            margin-bottom: 12px;
        }

        .live_overlay_item__Sg18i:first-child {
            margin-top: auto;
        }

        .live_chatting_message_container__vrI-y .live_chatting_message_emoji__1V1bl {
            font-size: 22px;
        }

        .live_chatting_message_container__vrI-y:not(
                .live_chatting_message_is_overlay__cALCf
            ).live_chatting_message_is_hidden__CLKiR
        .live_chatting_message_text__DyleH {
            color: var(--color-content-03) !important;
            opacity: 0.3;
        }

        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        .live_chatting_message_text__DyleH {
            color: var(--color-content-02);
        }

        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        .live_chatting_message_text__DyleH.live_chatting_message_highlight__k5SfA {
            color: var(--Content-Accent-Violet-Strong);
        }

        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        .live_chatting_message_wrapper__xpYre {
            line-height: 20px;
        }

        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        button.live_chatting_message_wrapper__xpYre {
            max-width: 100%;
            padding: 4px 8px 4px 6px;
            text-align: left;
        }

        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        button.live_chatting_message_wrapper__xpYre:active,
        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        button.live_chatting_message_wrapper__xpYre:focus-visible,
        .live_chatting_message_container__vrI-y:not(.live_chatting_message_is_overlay__cALCf)
        button.live_chatting_message_wrapper__xpYre:hover {
            background-color: var(--color-bg-overlay-03);
            border-radius: 8px;
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_wrapper__xpYre {
            font-size: 24px;
            line-height: 32px;
            padding: 8px 13px;
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH {
            color: var(--color-content-01-fixed);
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH
        em {
            color: var(--color-content-chzzk-01-fixed);
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH
        img {
            margin: 4px 0 4px 6px;
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf.live_chatting_message_is_hidden__CLKiR
        .live_chatting_message_text__DyleH {
            color: rgba(var(--color-content-01-fixed-rgb), 0.3) !important;
        }

        .live_chatting_message_wrapper__xpYre {
            overflow-wrap: anywhere;
            word-break: break-all;
        }

        .live_chatting_message_text__DyleH img {
            height: 24px;
            margin-right: 1px;
            width: 24px;
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH {
            color: var(--color-content-01-fixed);
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH
        em {
            color: var(--color-content-chzzk-01-fixed);
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf
        .live_chatting_message_text__DyleH
        img {
            margin: 4px 0 4px 6px;
        }

        .live_chatting_message_container__vrI-y.live_chatting_message_is_overlay__cALCf.live_chatting_message_is_hidden__CLKiR
        .live_chatting_message_text__DyleH {
            color: rgba(var(--color-content-01-fixed-rgb), 0.3) !important;
        }

        .live_chatting_message_text__DyleH img {
            height: 24px;
            margin-right: 1px;
            width: 24px;
        }

        .badge_container__a64XB {
            position: relative;
        }

        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj).live_chatting_username_is_message__jvTvP {
            line-height: 18px;
            margin: -2px 0;
            padding: 2px 4px 2px 2px;
            position: relative;
        }

        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj).live_chatting_username_is_message__jvTvP:not(
                .live_chatting_username_is_manage__OJtAS
            ):active,
        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj).live_chatting_username_is_message__jvTvP:not(
                .live_chatting_username_is_manage__OJtAS
            ):focus-visible,
        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj).live_chatting_username_is_message__jvTvP:not(
                .live_chatting_username_is_manage__OJtAS
            ):hover {
            background-color: var(--color-bg-overlay-03);
            border-radius: 6px;
        }

        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj)
        .live_chatting_username_icon__6Dj7b {
            height: 18px;
            width: 18px;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_overlay__A8Xmr
        .live_chatting_username_wrapper__iJpJB {
            gap: 6px;
            line-height: 28px;
            margin-right: 6px;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_overlay__A8Xmr
        .live_chatting_username_wrapper__iJpJB
        + .live_chatting_username_nickname__dDbbj {
            margin-left: 2px;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_donation__eXMYs {
            text-align: left;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_donation__eXMYs
        .live_chatting_username_nickname__dDbbj {
            color: var(--color-content-01-fixed) !important;
            font-family:
                    Sandoll Nemony2,
                    Apple SD Gothic NEO,
                    Helvetica Neue,
                    Helvetica,
                    나눔고딕,
                    NanumGothic,
                    Malgun Gothic,
                    맑은 고딕,
                    굴림,
                    gulim,
                    새굴림,
                    noto sans,
                    돋움,
                    Dotum,
                    sans-serif;
            font-weight: 400;
            vertical-align: top;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_donation_alarm__xEM44 {
            display: inline;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_donation_alarm__xEM44
        .live_chatting_username_wrapper__iJpJB {
            gap: 10px;
            margin-right: 8px;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_donation_alarm__xEM44
        .live_chatting_username_nickname__dDbbj {
            color: var(--color-content-chzzk-01-fixed) !important;
            font-family:
                    Sandoll Nemony2,
                    Apple SD Gothic NEO,
                    Helvetica Neue,
                    Helvetica,
                    나눔고딕,
                    NanumGothic,
                    Malgun Gothic,
                    맑은 고딕,
                    굴림,
                    gulim,
                    새굴림,
                    noto sans,
                    돋움,
                    Dotum,
                    sans-serif;
            font-weight: 400;
            vertical-align: top;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_mission__TVMIj
        .live_chatting_username_nickname__dDbbj {
            color: inherit !important;
            font-family:
                    Sandoll Nemony2,
                    Apple SD Gothic NEO,
                    Helvetica Neue,
                    Helvetica,
                    나눔고딕,
                    NanumGothic,
                    Malgun Gothic,
                    맑은 고딕,
                    굴림,
                    gulim,
                    새굴림,
                    noto sans,
                    돋움,
                    Dotum,
                    sans-serif;
            font-weight: 400;
            vertical-align: top;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_subscription__G\+gtA {
            overflow: hidden;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_subscription__G\+gtA
        .live_chatting_username_nickname__dDbbj {
            color: inherit !important;
            font-family:
                    Sandoll Nemony2,
                    Apple SD Gothic NEO,
                    Helvetica Neue,
                    Helvetica,
                    나눔고딕,
                    NanumGothic,
                    Malgun Gothic,
                    맑은 고딕,
                    굴림,
                    gulim,
                    새굴림,
                    noto sans,
                    돋움,
                    Dotum,
                    sans-serif;
            font-weight: 400;
            overflow: hidden;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_ellipsis__5DqoB {
            display: -ms-inline-flexbox;
            display: inline-flex;
            max-width: 100%;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_ellipsis__5DqoB
        .live_chatting_username_wrapper__iJpJB {
            -ms-flex: none;
            flex: none;
        }

        .live_chatting_username_container__m1-i5.live_chatting_username_is_ellipsis__5DqoB
        .live_chatting_username_nickname__dDbbj {
            min-width: 0;
        }

        .live_chatting_username_wrapper__iJpJB {
            display: -ms-inline-flexbox;
            display: inline-flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            gap: 4px;
            margin-right: 4px;
            vertical-align: top;
        }

        .live_chatting_username_wrapper__iJpJB + .live_chatting_username_nickname__dDbbj {
            margin-left: 1px;
        }

        .live_chatting_username_wrapper__iJpJB.live_chatting_username_is_button_badge__ZCA4G {
            gap: 9px;
        }

        .live_chatting_username_container__m1-i5 {
            display: inline-block;
        }

        .live_chatting_username_container__m1-i5:not(.live_chatting_username_is_overlay__A8Xmr):not(
                .live_chatting_username_is_donation__eXMYs
            ):not(.live_chatting_username_donation_alarm__xEM44):not(
                .live_chatting_username_is_subscription__G\+gtA
            ):not(.live_chatting_username_is_mission__TVMIj) {
            text-shadow: 0 0 0 rgba(0, 0, 0, 0.8);
        }
    }
</style>
