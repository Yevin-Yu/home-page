<template>
    <div class="nav-tabs">
        <ul class="tabs">
            <li
                @click="openMenu(item)"
                v-for="item in tabList"
                :key="item.id"
                :class="item.id === currentMenuId ? 'active' : ''"
                class="tab-item"
            >
                {{ item.name }}
                <img
                    @click.stop="closeCurrentTab(item)"
                    src="/image/svg/close.svg"
                    alt="close"
                />
            </li>
        </ul>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useMenusStore } from "@/stores/useMenusStore";
const { setCurrentMenuId, closeCurrentTab } = useMenusStore();
const { currentMenuId, tabList } = storeToRefs(useMenusStore());
const router = useRouter();

const openMenu = (item) => {
    router.push(item.path);
    setCurrentMenuId(item.id);
    console.log('123123')
};
</script>
<style scoped>
.nav-tabs {
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: var(--bg-color-2);
    border-bottom: 0.015rem solid var(--border--color-1);
    color: var(--font-color-2);
    font-size: 0.6rem;

    .tabs {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        .tab-item {
            padding: 0 1.6rem 0 0.8rem;
            cursor: pointer;
            position: relative;
            border-right: 0.015rem solid var(--border--color-1);
            &.active {
                position: relative;
                top: 1px;
                background-color: var(--bg-color-3);
            }
            &:hover img {
                display: inline-block;
            }
            img {
                height: 0.5rem;
                width: 0.5rem;
                display: none;
                position: absolute;
                right: 0.5rem;
                top: 0.55rem;
            }
        }
    }
}
</style>
