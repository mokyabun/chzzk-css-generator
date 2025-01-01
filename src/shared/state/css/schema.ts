import { outlineTypeSchema } from './outline'
import { boolean, number, object, string, union } from 'zod'

export const schema = object({
    general: object({
        size: number().min(1),
        gap: number().min(0),
        font: string().url(),
    }),
    text: object({
        size: number().min(0),
        color: string(),
        spacing: number(),
        height: union([number().min(1), string()]),
    }),
    nickname: object({
        enabled: boolean(),
        size: number().min(0),
        break: boolean(),
        gap: number().min(0),
    }),
    container: object({
        enabled: boolean(),
        color: string(),
        padding: number().min(0),
        roundness: number().min(0),
    }),
    outline: object({
        enabled: boolean(),
        type: outlineTypeSchema,
        color: string(),
        amount: number().int().min(1),
    }),
    effect: object({
        topGradient: boolean(),
        chat: object({
            showEffect: string().optional(),
            showDuration: number().min(0),
        }),
    }),
})
