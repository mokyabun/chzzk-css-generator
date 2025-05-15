import type { CssRule } from '../css'
import { settings } from '../../settings'
import type { CssTemplate } from '../templates'

export default {
    cssRule: {
        selector: {
            class: 'live_overlay_chatting',
        },
        properties: {
            padding: '3px',
            'font-family': 'chzzk-css-font, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Helvetica, Arial, NanumGothic, 나눔고딕, Malgun Gothic, 맑은 고딕, Dotum, 굴림, gulim, 새굴림, noto sans, 돋움, sans-serif'
        }
    },
    templateFunction: (cssRule) => {
        if (!settings.effect.topGradient) {
            cssRule.properties['mask-image'] = 'none'
            cssRule.properties['-webkit-mask-image'] = 'none'
        }

        return cssRule
    }
} satisfies CssTemplate
