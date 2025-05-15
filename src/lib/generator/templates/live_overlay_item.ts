import type { CssTemplate } from '../templates'
import { settings } from '../../settings'

export default {
    cssRule: {
        selector: {
            element: 'div',
            class: 'live_overlay_item'
        },
        properties: {}
    },
    templateFunction: (cssRule) => {
        cssRule.properties['margin-bottom'] = settings.general.gap

        return cssRule
    }
} satisfies CssTemplate