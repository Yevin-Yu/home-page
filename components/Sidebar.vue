<template>
    <aside class="aside" ref="resizableDiv">
        <div class="aside-content">
            <FileItem>
                <FileItem />
                <FileItem />
                <FileItem />
                <FileItem />
                <FileItem />
            </FileItem>
            <FileItem>
                <FileItem>
                    <FileItem>
                        <FileItem />
                    </FileItem>
                </FileItem>
            </FileItem>
        </div>
        <div class="resizer"></div>
    </aside>
</template>

<script setup></script>

<style scoped>
/* 添加样式 */
.aside {
    background-color: var(--bg-color-2);
    width: 12rem;
    overflow: auto;
    border-right: 0.015rem solid var(--border--color-1);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .aside-content {
        width: calc(100% - 0.2rem);
        height: 100%;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--bg-color-0) transparent;
        padding: 0.2rem;
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
