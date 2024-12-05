<!-- layouts/default.vue -->
<template>
    <Loading :isLoading="isLoading" />
    <div class="home-page">
        <Header />
        <div class="content">
            <Sidebar />
            <main class="main">
                <Breadcrumbs />
                <NuxtPage />
            </main>
        </div>
        <Footer />
    </div>
</template>

<script setup>
// 响应式
import { useResponsiveFontSize } from "../hook/useResponsiveFontSize";
useResponsiveFontSize();
// 首次进入加载
const isLoading = ref(true);
onMounted(async () => {
    isLoading.value = false; // 加载完成
});
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
        width: calc(100% - 100px);
    }
}
</style>
