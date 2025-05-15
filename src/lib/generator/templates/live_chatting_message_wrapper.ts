import { settings } from '../../settings'
import type { CssTemplate } from '../templates'

export default {
    cssRule: {
        selector: {
            element: 'div',
            class: 'live_chatting_message_wrapper'
        },
        properties: {}
    },
    templateFunction: (cssRule) => {
        cssRule.properties['font-size'] = settings.general.size
        cssRule.properties['line-height'] = settings.text.height
        cssRule.properties['letter-spacing'] = settings.text.spacing

        if (settings.outline.enabled) {
            // TODO: implement outline generator
            cssRule.properties['text-shadow'] = ''
        }

        if (settings.container.enabled) {
            cssRule.properties['border-radius'] = settings.container.roundness
            cssRule.properties['background-color'] = settings.container.color
        }

        if (settings.effect.chat.enabled) {
            cssRule.properties['animation'] = settings.effect.chat.effect
            cssRule.properties['animation-duration'] = settings.effect.chat.duration
        }

        cssRule.properties['padding'] = 0
        if (settings.container.enabled) {
            cssRule.properties['padding'] = settings.container.padding
        }

        return cssRule
    }
} satisfies CssTemplate