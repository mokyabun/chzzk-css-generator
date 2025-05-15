import { settings } from '../../settings'
import type { CssTemplate } from '../templates'

export default {
    cssRule: {
        selector: {
            element: 'div',
            class: 'live_overlay_message'
        },
        properties: {
            'max-width': '100%',
        }
    },
    templateFunction: (cssRule) => {
        cssRule.properties['background-color'] = 'transparent'

        if (settings.container.enabled) {
            cssRule.properties['border-radius'] = settings.container.roundness
            cssRule.properties['background-color'] = settings.container.color
        }

        if (settings.effect.chat.enabled) {
            cssRule.properties['animation'] = settings.effect.chat.effect
            cssRule.properties['animation-duration'] = settings.effect.chat.duration
        }

        return cssRule
    }
} satisfies CssTemplate