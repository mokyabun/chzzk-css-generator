import type { Settings } from './types.ts'

export const defaultSettings: Settings = {
    general: {
        size: 32,
        gap: 0.2,
        font: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Minguk-Bold.woff',
    },
    text: {
        enabled: true,
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
        color: {
            enabled: false,
            color: '#FFFFFF',
        },
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
        color: '#000000CC',
        amount: 3,
    },
    effect: {
        topGradient: false,
        chat: {
            enabled: true,
            effect: 'fadeIn',
            duration: 0.2,
        },
    },
}
