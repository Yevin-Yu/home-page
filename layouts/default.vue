<template>
    <!-- svg 引入-->
    <SvgItem />
    <Loading :isLoading="isLoading" />
    <div class="home-page">
        <Header />
        <div class="content">
            <div ref="sideBarRef">
                <Sidebar v-show="isShowSideBar" :style="sidebarStyle" />
            </div>
            <main class="main" :style="mainExitStyle">
                <NavTabs />
                <Breadcrumbs />
                <NuxtPage class="main-exit" />
            </main>
        </div>
        <div ref="footerRef">
            <Footer :openSidebar="openSidebar" />
        </div>
    </div>
</template>
<script setup>
const isShowSideBar = ref(true);
// 是否为移动端
import { useRequestHeaders } from "#app";
let headers = useRequestHeaders();
const userAgent = window ? navigator.userAgent : headers["user-agent"];
const isApp = ref(/Mobi|Tablet/i.test(userAgent));
if (isApp.value) isShowSideBar.value = false;
// 传递数据
provide('isApp', isApp)
// 响应式
import { useResponsiveFontSize } from "../hook/useResponsiveFontSize";
useResponsiveFontSize();
// 首次进入加载
const isLoading = ref(true);
onMounted(async () => {
    isLoading.value = false; // 加载完成
});
const sidebarStyle = computed(() => {
    if (!isApp.value) return;
    return {
        position: "absolute",
        height: "calc(100% - 3.5rem)",
    };
});
const mainExitStyle = computed(() => {
    if (!isApp.value) return;
    return {
        width: "100%",
    };
});
const openSidebar = () => {
    isShowSideBar.value = !isShowSideBar.value;
};
onMounted(() => {
    document.addEventListener('click', hiddenMenuList);
})
const sideBarRef = ref(null)
const footerRef = ref(null)
const hiddenMenuList = (e) => {
    if (!isApp.value) return
    if (!sideBarRef.value || !footerRef.value) return
    if (!sideBarRef.value.contains(e.target) && !footerRef.value.contains(e.target)) {
        isShowSideBar.value = false
    }
}
</script>
<style scoped>
.home-page {
    width: 100%;
    height: 100%;

    .content {
        height: calc(100% - 3.5rem);
        display: flex;
    }

    .main {
        width: calc(100% - 12rem);
        background-color: var(--bg-color-3);
        height: 100%;
        overflow: hidden;
        .main-exit {
            height: calc(100% - 4.3rem);
            overflow: auto;
        }
    }
}
</style>
