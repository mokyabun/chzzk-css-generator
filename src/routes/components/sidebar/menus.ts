import type { IconSource } from '@steeze-ui/svelte-icon'
import { BoxPadding, Filters, InnerShadowTopLeft, Message, Settings2, User, File } from '@steeze-ui/tabler-icons'

export interface MenuProp {
    title: string
    route: string
    icon: IconSource
}

export type Divider = 'divider'

export const menus: (MenuProp | Divider)[] = [
    {
        title: '일반',
        route: '/',
        icon: Settings2,
    },
    'divider',
    {
        title: '텍스트',
        route: '/text',
        icon: Message,
    },
    {
        title: '닉네임',
        route: '/nickname',
        icon: User,
    },
    {
        title: '컨테이너',
        route: '/container',
        icon: BoxPadding,
    },
    {
        title: '외곽선',
        route: '/outline',
        icon: InnerShadowTopLeft,
    },
    {
        title: '효과',
        route: '/effect',
        icon: Filters,
    },
    'divider',
    {
        title: '생성된 CSS',
        route: '/generated',
        icon: File,
    },
]
