<template>
    <div class="breadcrumbs">
        <ul class="tabs">
            <li class="tab-item">README</li>
            <li class="tab-item">MORE</li>
            <li class="tab-item">CONNECT</li>
        </ul>
    </div>
</template>



<style scoped>
.breadcrumbs {
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: var(--bg-color-2);
    border-bottom: 0.015rem solid var(--border--color-1);
    color: var(--font-color-2);
    font-size: 0.7rem;

    .tabs {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;

        .tab-item {
            padding: 0 0.8rem;
            cursor: pointer;
            position: relative;
            border-right: 0.015rem solid var(--border--color-1);
        }
    }
}
</style>
