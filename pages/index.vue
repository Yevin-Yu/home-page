<template>
    <div class="home">
        <h1>home</h1>
        <!-- 引入 -->
        <svg style="display: none;">
            <symbol id="icon-home" viewBox="0 0 32 32">
                <path d="M16 3l-13 13h4v13h18v-13h4z"></path>
            </symbol>
            <symbol id="icon-user" viewBox="0 0 32 32">
                <path d="M16 16a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"></path>
            </symbol>
        </svg>
        <!-- 使用 -->
        <svg class="icon">
            <use xlink:href="#icon-home"></use>
        </svg>

        <svg class="icon">
            <use xlink:href="#icon-user"></use>
        </svg>
    </div>
</template>
<style scoped>
.home {
    padding: 0.5rem;
}
</style>
