<template>
    <footer class="footer">
        <div class="copyright">
            <span>耶温 | Copyright © 2024 |   </span>
            <a target="_blank" href="https://beian.miit.gov.cn/">陕ICP备2024040821号-1</a>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
.footer {
    height: 1.5rem;
    background-color: var(--bg-color-1);
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0.015rem solid var(--border--color-1);
    box-sizing: border-box;
    display: flex;
    color: var(--font-color-2);

    .copyright {
        flex: 1;
        text-align: center;
        font-size: 0.6rem;
        line-height: 1.4rem;

        a {
            color: var(--font-color-2);
            text-decoration: none;
        }
    }
}
</style>
