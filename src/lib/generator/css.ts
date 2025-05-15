import { type CssProperties, generateProperties } from './properties'
import { type CssSelector, generateSelector } from './selector'

export interface CssRule {
    selector: CssSelector
    properties: CssProperties
}

export function generateCssRule(rule: CssRule) {
    let result = ''

    const selectorString = generateSelector(rule.selector)
    const propertiesString = generateProperties(rule.properties)

    result += `${selectorString} {\n`
    result += propertiesString
    result += '}\n'

    return result
}
