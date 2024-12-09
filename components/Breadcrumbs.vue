<template>
    <div class="breadcrumbs">{{ pathName }}</div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useMenusStore } from "@/stores/useMenusStore";

const { menus, currentMenuId } = storeToRefs(useMenusStore());
// 获取当前路径
const pathName = ref("");
const findFullPathById = (menus, id, currentPath = []) => {
    for (const menu of menus) {
        const newPath = [...currentPath, menu.name];
        if (menu.id === id) {
            return newPath.join(" / ");
        }
        if (menu.child) {
            const result = findFullPathById(menu.child, id, newPath);
            if (result) {
                return result;
            }
        }
    }
    return null;
};
// 监听菜单变化
watchEffect(() => {
    if (currentMenuId.value && menus.value.length) {
        pathName.value = findFullPathById(menus.value, currentMenuId.value);
    }
});
</script>
<style scoped>
.breadcrumbs {
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: var(--bg-color-3);
    border-bottom: 0.015rem solid var(--border--color-1);
    color: var(--font-color-2);
    padding: 0 0.6rem;
    font-size: 0.6rem;
}
</style>
