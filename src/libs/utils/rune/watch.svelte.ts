import { untrack } from 'svelte'

type PromiseVoidFunction = () => void | Promise<void>

export type Getter<T> = () => T
export type Setter<T> = (value: T) => void

function internalWatch<T>(
    source: Getter<T> | Array<Getter<T>>,
    effectFunc: (values: T | Array<T>) => void | PromiseVoidFunction,
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
    effectFunc: (values: T) => void | PromiseVoidFunction,
    lazy?: boolean,
): void
export function watch<T>(source: Getter<T>, effectFunc: (value: T) => void | PromiseVoidFunction, lazy?: boolean): void
export function watch<T>(
    source: Getter<T> | Array<Getter<T>>,
    effectFunc: (values: T | Array<T>) => void | PromiseVoidFunction,
    lazy = false,
) {
    internalWatch(source, effectFunc, lazy)
}
