export type EmojiMessage = string[]

export interface User {
    nickname: string
    nicknameColor: string
    badges: string[]
}

export interface Chat {
    user: User
    message: string | EmojiMessage
}

const colors = [
    '#E2BE61',
    '#ECA843',
    '#EC8A43',
    '#EA723D',
    '#E56B79',
    '#E68199',
    '#E16CB5',
    '#BC7ACC',
    '#A983E7',
    '#8B89E1',
    '#7194EE',
    '#7994D0',
    '#71AAED',
    '#5FB7E8',
    '#80BDD3',
    '#80D3CE',
    '#99D3BA',
    '#94D59A',
    '#BBE69A',
    '#CCE57D',
]

const users: User[] = [
    {
        nickname: 'mokya',
        nicknameColor: 'rgb(217, 176, 79)',
        badges: ['https://ssl.pstatic.net/static/nng/glive/icon/streamer.png'],
    },
    {
        nickname: 'Lorem ipsum',
        nicknameColor: colors[Math.floor(Math.random() * colors.length)],
        badges: ['https://ssl.pstatic.net/static/nng/glive/badge/cheatkey_1m.png'],
    },
    {
        nickname: '대충아무닉네임',
        nicknameColor: colors[Math.floor(Math.random() * colors.length)],
        badges: [
            'https://ssl.pstatic.net/static/nng/glive/badge/cheatkey_1m.png',
            'https://ssl.pstatic.net/static/nng/glive/badge/fan_03.png',
        ],
    },
    {
        nickname: '잠자는 곰 0183740',
        nicknameColor: colors[Math.floor(Math.random() * colors.length)],
        badges: [],
    },
]

const emojis = [
    'https://ssl.pstatic.net/static/nng/glive/icon/b_14.gif',
    'https://ssl.pstatic.net/static/nng/glive/icon/cha08.png',
]

const chat = [
    '테스트 채팅입니다.',
    '안녕하세요!',
    'こんにちは!',
    'Hello!',
    'Здравствуйте!',
    'Bonjour!',
    '치지직 채팅 CSS 생성기입니다!',
    '이건 대충 엄청 긴 채팅을 나타낸 무언가입니다, 뭐라고 써야할지 모르겠어요, 아무튼 긴 채팅입니다.',
]

export function random(): Chat {
    const random = Math.random()

    if (random < 0.8) {
        return textChat()
    } else {
        return emojiChat()
    }
}

function randomUser(): User {
    return users[Math.floor(Math.random() * users.length)]
}

export function textChat(): Chat {
    return {
        user: randomUser(),
        message: chat[Math.floor(Math.random() * chat.length)],
    }
}

export function emojiChat(): Chat {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    const length = Math.floor(Math.random() * 5) + 1

    return {
        user: randomUser(),
        message: Array.from({ length }, () => emoji),
    }
}
