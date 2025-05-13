

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
                <span class="live_chatting_username_nickname__dDbbj" style="color: {message.user.nicknameColor}">
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
