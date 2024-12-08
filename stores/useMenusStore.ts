// stores/useMenusStore.ts
import { defineStore } from 'pinia'

export const useMenusStore = defineStore('menus', () => {
    // 定义状态
    const menus = ref()
    const currentMenuId = ref(111)

    menus.value = [
        {
            id: 1,
            name: 'home-page',
            icon: '/image/svg/file.svg',
            activeIcon: '/image/svg/file-open.svg',
            type: 1,
            expand: true,
            child: [
                {
                    id: 11,
                    name: '个人主页',
                    icon: '/image/svg/file.svg',
                    activeIcon: '/image/svg/file-open.svg',
                    type: 1,
                    expand: true,
                    child: [
                        { id: 111, name: 'home.html', icon: '/image/svg/html.svg', type: 2 },
                        { id: 112, name: 'connect.html', icon: '/image/svg/html.svg', type: 2 },
                        { id: 113, name: 'cv.md', icon: '/image/svg/md.svg', type: 2 },
                    ]
                },
                {
                    id: 12,
                    name: '开源项目',
                    icon: '/image/svg/file.svg',
                    activeIcon: '/image/svg/file-open.svg',
                    type: 1,
                    expand: true,
                    child: [
                        { id: 121, name: '耶温博客.md', icon: '/image/svg/md.svg', type: 2 },
                        { id: 122, name: '导航页.md', icon: '/image/svg/md.svg', type: 2 },
                        { id: 123, name: 'Web Chat.md', icon: '/image/svg/md.svg', type: 2 }
                    ]
                },
                {
                    id: 13,
                    name: '常用链接',
                    icon: '/image/svg/file.svg',
                    activeIcon: '/image/svg/file-open.svg',
                    type: 1,
                    expand: true,
                    child: [
                        { id: 131, name: 'README.md', icon: '/image/svg/link.svg', type: 2 },
                        { id: 132, name: 'RESUME.md', icon: '/image/svg/link.svg', type: 2 },
                        { id: 133, name: 'CONNECT.md', icon: '/image/svg/link.svg', type: 2 }
                    ]
                },
                {
                    id: 14,
                    name: 'About.md',
                    icon: '/image/svg/md.svg',
                    type: 2,
                }
            ],
        }
    ]

    // 修改状态
    function setCurrentMenuId(id: number) {
        currentMenuId.value = id
    }

    return {
        menus,
        currentMenuId,
        setCurrentMenuId
    }
})
