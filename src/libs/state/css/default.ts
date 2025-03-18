import type { Config } from './css.svelte'

export const defaultValue: Config = {
    general: {
        size: 32,
        gap: 0.2,
        font: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Minguk-Bold.woff',
    },
    text: {
        size: 1,
        color: '#FFFFFF',
        spacing: -0.5,
        height: 1.3,
    },
    nickname: {
        enabled: true,
        badge: true,
        size: 1,
        break: false,
        gap: 0.1,
        overrideColor: false,
        color: '#FFFFFF',
    },
    container: {
        enabled: true,
        color: '#000000B5',
        padding: 0.4,
        roundness: 0.5,
    },
    outline: {
        enabled: true,
        type: 'simple',
        amount: 3,
        color: '#000000CC',
    },
    effect: {
        topGradient: false,
        chat: {
            showEffect: 'fadeIn',
            showDuration: 0.2,
        },
    },
}
