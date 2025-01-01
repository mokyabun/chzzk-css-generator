import z from 'zod'

export const outlineTypes = ['blur', 'drop-shadow', 'simple'] as const
export type OutlineType = (typeof outlineTypes)[number]
export const outlineTypeSchema = z.enum(outlineTypes)

export function generateOutline(type: OutlineType, color: string, amount: number) {
    switch (type) {
        case 'blur':
            return blurOutline(color, amount)
        case 'drop-shadow':
            return dropShadowOutline(color, amount)
        case 'simple':
            return simpleOutline(color, amount)
    }
}

export function blurOutline(color: string, amount: number) {
    const shadows = []

    for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
            shadows.push(`${dx}px ${dy}px 0 ${color}`)
        }
    }

    shadows.push(...Array.from({ length: amount * 10 }, () => `0px 0px ${amount}px ${color}`))

    return shadows.join(',')
}

export function dropShadowOutline(color: string, amount: number) {
    const shadows = []
    const shadowBorder = amount / 2

    for (let dx = -(shadowBorder - 0.5); dx <= shadowBorder; dx += 0.5) {
        for (let dy = -(shadowBorder - 0.5); dy <= shadowBorder; dy += 0.5) {
            const blur = dx >= 0 && dy >= 0 ? (dx < 1 ? 1 : dx) : 0

            shadows.push(`${dx}px ${dy}px ${blur}px ${color}`)
        }
    }

    return shadows.join(',')
}

export function simpleOutline(color: string, amount: number) {
    const shadows = []

    for (let dx = -amount; dx <= amount; dx += amount) {
        for (let dy = -amount; dy <= amount; dy += amount) {
            shadows.push(`${dx}px ${dy}px 0 ${color}`)
        }
    }

    shadows.push(`0 0 ${amount}px ${color}`)

    return shadows.join(',')
}
