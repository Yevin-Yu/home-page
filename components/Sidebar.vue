<template>
    <aside class="aside" ref="resizableDiv">
        <div class="aside-content">
            <FileItem v-for="menu in menus" :key="menu.id" :menu="menu" :currentMenuId="currentMenuId" />
        </div>
        <div class="resizer"></div>
    </aside>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMenusStore } from '@/stores/useMenusStore'
const { menus, currentMenuId } = storeToRefs(useMenusStore())
</script>

<style scoped>
/* 添加样式 */
.aside {
    background-color: var(--bg-color-2);
    height: 100%;
    width: 12rem;
    overflow: auto;
    border-right: 0.015rem solid var(--border--color-1);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    z-index: 999;
    .aside-content {
        width: calc(100% - 0.2rem);
        height: 100%;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--bg-color-0) transparent;
        padding: 0;
    }

    .resizer {
        width: 0.2rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        cursor: ew-resize;
    }
}
</style>
