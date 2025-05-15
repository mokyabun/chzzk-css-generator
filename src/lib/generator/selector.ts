export interface CssSelector {
    element?: string
    class?: string
    child?: CssSelector
}

export function generateSelector(selector: CssSelector): string {
    let result = ''
    if (selector.element) {
        result += selector.element
    }

    if (selector.class) {
        result += `[class*='${selector.class}']`
    }

    if (selector.child) {
        result += ` > ${generateSelector(selector.child)}`
    }

    return result
}
