<template>
    <aside>
        <h2>侧边栏</h2>
        <ul>
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/about">关于</NuxtLink></li>
            <li><NuxtLink to="/contact">联系</NuxtLink></li>
        </ul>
    </aside>
</template>

<script setup></script>

<style scoped>
/* 添加样式 */
aside {
    background: #f4f4f4;
    padding: 1rem;
    width: 200px;
}
</style>
