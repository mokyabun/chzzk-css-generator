import { Main, Variables, Font } from '$assets/templates'
import { generateOutline } from './outline'
import { Eta } from 'eta'
import type { Config, PreprocessedConfig } from './css.svelte'

const mainEta = new Eta({ autoTrim: false })
const mainFn = mainEta.compile(Main)

const eta = new Eta({ autoTrim: false })
const variablesFn = eta.compile(Variables)
const fontFn = eta.compile(Font)

export function preprocess(config: Config): PreprocessedConfig {
    const shadow = (() => {
        if (!config.outline.enabled) {
            return ''
        }

        return generateOutline(config.outline.type, config.outline.color, config.outline.amount)
    })()

    return {
        ...config,
        outline: {
            enabled: config.outline.enabled,
            shadow: shadow,
        },
    }
}

function animateCSSImporter(config: PreprocessedConfig) {
    return config.effect.chat.showEffect ? '@import url(\'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\');' : ''
}

function generateFont(config: PreprocessedConfig): string {
    return '@font-face {\n' + eta.render(fontFn, config) + '\n}\n'
}

function generateVariables(config: PreprocessedConfig): string {
    return ':root {\n' + eta.render(variablesFn, config) + '\n}\n'
}

function generateMain(config: PreprocessedConfig): string {
    return eta.render(mainFn, config)
}

export async function generate(preprocessed: PreprocessedConfig) {
    const results = await Promise.all([
        animateCSSImporter(preprocessed),
        generateVariables(preprocessed),
        generateFont(preprocessed),
        generateMain(preprocessed),
    ])
    return results.join('\n')
}
