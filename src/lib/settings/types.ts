export interface Settings {
    general: GeneralOptions
    text: TextOptions
    nickname: NicknameOptions
    container: ContainerOptions
    outline: OutlineOptions
    effect: EffectOptions
}

interface GeneralOptions {
    size: number
    gap: number
    font: string
}

interface TextOptions {
    enabled: boolean
    size: number
    color: string
    spacing: number
    height: number
}

interface NicknameOptions {
    enabled: boolean
    badge: boolean
    size: number
    break: boolean
    gap: number
    color: NicknameColorOptions
}

interface NicknameColorOptions {
    enabled: boolean
    color: string
}

interface ContainerOptions {
    enabled: boolean
    color: string
    padding: number
    roundness: number
}

interface OutlineOptions {
    enabled: boolean
    type: string
    color: string
    amount: number
}

interface EffectOptions {
    topGradient: boolean
    chat: ChatEffectOptions
}

interface ChatEffectOptions {
    enabled: boolean
    effect: string
    duration: number
}
