<template>
    <div class="file-item" :style="mainStyle">
        <div class="content" @click="openMenu">
            <img :src="menu.expand ? menu.activeIcon : menu.icon" alt="file" />
            <span> {{ menu.name }} </span>
        </div>
        <FileItem v-if="menu.child && menu.expand" v-for="item in menu.child" :key="item.id" :menu="item"
            :currentMenuId="currentMenuId" />
    </div>
</template>
<script setup>
// 接受父组件传递的参数 menu
const props = defineProps({
    menu: {
        type: Object,
        default: () => {
            return {}
        }
    },
    currentMenuId: {
        type: Number,
        default: 111
    }
})

// 计算属性样式
const mainStyle = computed(() => {
    return {
        marginLeft: props.menu.id === 1 ? '0' : '0.8rem',
        borderLeftColor: props.menu.id === 1 ? 'transparent' : 'var(--border--color-1)',
        backgroundColor: props.menu.id === props.currentMenuId ? 'var(--bg-color-1)' : 'transparent'
    }
})


// 打开关闭 跳转路由 
import { useMenusStore } from '@/stores/useMenusStore'
const { setCurrentMenuId } = useMenusStore()
const router = useRouter()
const openMenu = () => {
    if (props.menu.type === 1) {
        props.menu.expand = !props.menu.expand
    } else {
        // 跳转页面 设计当前id
        router.push('/about')
        setCurrentMenuId(props.menu.id)
    }
}
</script>

<style scoped>
.file-item {
    line-height: 1.5rem;
    font-size: 0.7rem;
    color: var(--font-color-2);
    border-left: 0.015rem solid var(--border--color-1);
    cursor: pointer;
    margin-left: 0.8rem;

    .content {
        padding-left: 0.4rem;
        user-select: none;
        line-height: 1.5rem;
        font-size: 0.6rem;

        img {
            height: 1rem;
            width: 1rem;
            margin-right: 0.2rem;
            vertical-align: text-bottom;
        }

    }

    .content:hover {
        background-color: var(--bg-color-1);
    }
}
</style>