import { get, set } from '$lib/db'
import { watch } from '$lib/utils'
import { defaultSettings } from './default'
import type { Settings } from './types'
import debounce from 'lodash.debounce'

const SETTINGS_KEY = 'settings'
const initialState = await (async () => {
    const stored = await get<Settings>(SETTINGS_KEY)

    if (!stored) return defaultSettings

    return stored
})()

export const settings = $state(initialState)
export const generated = $state({ value: '' })

const debouncedOnUpdate = debounce((value) => {
    set(SETTINGS_KEY, value).catch((e: Error) => {
        console.error('Failed to save settings', e)
    })
}, 500)

$effect.root(() => {
    watch(() => $state.snapshot(settings), debouncedOnUpdate, true)

    return () => debouncedOnUpdate.cancel()
})
