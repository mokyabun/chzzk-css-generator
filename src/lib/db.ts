import { openDB } from 'idb'

const db = await openDB('chzzk-css-generator', 1, {
    upgrade(db) {
        db.createObjectStore('store')
    },
})

export function get<T>(key: string): Promise<T | undefined> {
    return db.get('store', key)
}

export function set<T>(key: string, value: T) {
    return db.put('store', value, key)
}

export function remove(key: string) {
    return db.delete('store', key)
}
