import { watch } from '$utils/rune'
import debounce from 'lodash.debounce'
import { defaultValue } from './default'
import { generate, preprocess } from './generator'
import { schema } from './schema'

export type Config = ReturnType<(typeof schema)['parse']>

export interface PreprocessedConfig extends Omit<Config, 'outline'> {
    outline: {
        enabled: boolean
        shadow: string
    }
}

const load = () => {
    const stored = localStorage.getItem('config')

    if (!stored) {
        return defaultValue
    }

    const validated = schema.safeParse(JSON.parse(stored))
    if (!validated.success) {
        return defaultValue
    }

    return validated.data
}

export const config = $state<Config>(load())
export const css = $state({ value: '' })

async function updateCss(value: Config) {
    const validated = schema.safeParse(value)
    if (!validated.success) {
        css.value = ''
        return
    }

    css.value = await generate(preprocess(validated.data))

    localStorage.setItem('config', JSON.stringify(value))
}

export function resetConfig() {
    localStorage.removeItem('config')
    location.reload()
}

$effect.root(() => {
    watch(
        () => $state.snapshot(config),
        (value) => {
            debounce(updateCss, 500)(value)
        },
    )
})
