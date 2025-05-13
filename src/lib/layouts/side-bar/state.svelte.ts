let titleOpenTimeout: number | null = null

export const sideBarOpen = $state<{ value: boolean }>({ value: false })
export const sideBarTitleOpen = $state<{ value: boolean }>({ value: false })

export function toggleSideBar() {
    sideBarOpen.value = !sideBarOpen.value

    if (titleOpenTimeout !== null) {
        clearTimeout(titleOpenTimeout)
        titleOpenTimeout = null
    }

    if (!sideBarOpen.value) sideBarTitleOpen.value = false
    else {
        titleOpenTimeout = setTimeout(() => {
            sideBarTitleOpen.value = true
        }, 250)
    }
}
