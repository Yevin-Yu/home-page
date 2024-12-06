<template>
    <div class="file-item">
        <div class="content">
            <img src="/public/image/svg/file.svg" alt="file" />
            <span> fileName </span>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.file-item {
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: var(--font-color-2);
    border-left: 0.015rem solid var(--border--color-1);
    cursor: pointer;
    margin-left: 0.8rem;
    .content {
        padding-left: 0.4rem;
        user-select: none;
        img {
            margin-right: 0.2rem;
            vertical-align: sub;
        }
    }
    .content:hover {
        background-color: var(--bg-color-1);
    }
}
</style>
