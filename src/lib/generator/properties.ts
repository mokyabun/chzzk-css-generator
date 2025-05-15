export type CssProperties = Record<string, string | number>

export function generateProperties(property: CssProperties, important = true): string {
    let result = ''
    for (const [key, value] of Object.entries(property)) {
        result += `${key}: ${value}`

        if (important) {
            result += ' !important'
        }

        result += ';\n'
    }

    return result
}
