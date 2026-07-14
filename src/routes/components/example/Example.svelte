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
            <div class="_chatting_f6gts_1 {className}" use:scrollToBottom={messages}>
                {#each messages as message (message.id)}
                    <div class="_item_f6gts_20 _message_f6gts_27">
                        <div class="_container_1vemp_1 _is_overlay_1vemp_1">
                            <div class="_wrapper_1vemp_15">
                                <span
                                    class="_container_o04z9_2 _is_message_o04z9_5 _is_overlay_o04z9_5"
                                    style="margin-right: 6px"
                                >
                                    {#if message.user.badges.length !== 0}
                                        {#each message.user.badges as badge}
                                            <span class="_badge_o04z9_20"
                                                ><span class="badge_container__a64XB"
                                                    ><img src={badge} alt="배지" width="28" height="28" /></span
                                                ></span
                                            >
                                        {/each}
                                    {/if}
                                    <span class="_nickname_o04z9_57" style="color: {message.user.nicknameColor}">
                                        <span>
                                            <span class="_text_dtc6c_2">{message.user.nickname}</span>
                                        </span>
                                    </span>
                                </span>

                                <span class="_text_1vemp_1">
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

        img {
            vertical-align: top;
        }

        ._chatting_f6gts_1 {
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

        ._chatting_f6gts_1::-webkit-scrollbar {
            display: none;
        }

        ._item_f6gts_20 {
            margin-bottom: 12px;
        }

        ._item_f6gts_20:first-child {
            margin-top: auto;
        }

        ._wrapper_1vemp_15 {
            font-size: 24px;
            line-height: 32px;
            overflow-wrap: anywhere;
            padding: 8px 13px;
            word-break: break-all;
        }

        ._container_o04z9_2 {
            display: inline-block;
        }

        ._badge_o04z9_20 {
            display: inline-flex;
            vertical-align: top;
        }

        ._nickname_o04z9_57 {
            vertical-align: top;
        }

        ._text_1vemp_1 {
            color: var(--color-content-01-fixed);
        }

        ._text_1vemp_1 img {
            height: 24px;
            margin-right: 1px;
            width: 24px;
        }
    }
</style>
