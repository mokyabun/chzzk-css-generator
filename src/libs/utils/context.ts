import { getContext, hasContext, setContext } from 'svelte'

interface Context<T, E extends boolean> {
    key: symbol
    get: () => E extends true ? T : T | null
    set: (value: T) => void
    has: () => boolean
}

export function createContext<T, E extends boolean = true>(defaultValue: T | null = null): Context<T, E> {
    const key = Symbol('context-key')

    const get = () => {
        return getContext<T>(key) ?? defaultValue
    }

    const set = (value: T) => {
        return setContext(key, value)
    }

    const has = () => {
        return hasContext(key)
    }

    return { key, get, set, has } as Context<T, E>
}
