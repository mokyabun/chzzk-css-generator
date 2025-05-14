import { untrack } from 'svelte'

export type Getter<T> = () => T

function internalWatch<T>(
    source: Getter<T> | Array<Getter<T>>,
    effectFunc: (values: T | Array<T>) => void | VoidFunction,
    lazy = false,
) {
    let active = !lazy

    $effect(() => {
        const values = Array.isArray(source) ? source.map((s) => s()) : source()

        if (!active) {
            active = true
            return
        }

        return untrack(() => effectFunc(values))
    })
}

export function watch<T extends Array<unknown>>(
    source: {
        [K in keyof T]: Getter<T[K]>
    },
    effectFunc: (values: T) => void | VoidFunction,
    lazy?: boolean,
): void
export function watch<T>(source: Getter<T>, effectFunc: (value: T) => void | VoidFunction, lazy?: boolean): void
export function watch<T>(
    source: Getter<T> | Array<Getter<T>>,
    effectFunc: (values: T | Array<T>) => void | VoidFunction,
    lazy = false,
) {
    internalWatch(source, effectFunc, lazy)
}
