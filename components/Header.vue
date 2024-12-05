<template>
    <header class="header">
        <!-- 关闭 最小化 缩放 -->
        <div class="btn">
            <span class="close-btn">
                <img src="/public/image/svg/close.svg" alt="close" />
            </span>
            <span class="min-btn">
                <img src="/public/image/svg/min.svg" alt="min" />
            </span>
            <span class="zoom-btn">
                <img src="/public/image/svg/zoom.svg" alt="zoom" />
            </span>
        </div>
        <div class="title">个人主页</div>
        <div class="logo"><img src="/public/favicon.ico" alt="logo" /></div>
    </header>
</template>

<script setup></script>

<style scoped>
.header {
    height: 2rem;
    line-height: 2rem;
    background-color: var(--bg-color-1);
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 0.015rem solid var(--border--color-1);
    box-sizing: border-box;
    display: flex;
    font-size: 0.6rem;
    .btn {
        width: 4rem;
        margin-left: 0.5rem;
        &:hover .close-btn img,
        &:hover .min-btn img,
        &:hover .zoom-btn img {
            display: inline-block;
        }
        .close-btn,
        .min-btn,
        .zoom-btn {
            display: inline-block;
            background-color: var(--red);
            width: 0.7rem;
            height: 0.7rem;
            line-height: 0.8rem;
            vertical-align: middle;
            margin: 0 0.2rem;
            text-align: center;
            border-radius: 50%;
            box-sizing: border-box;
            border: 0.015rem solid var(--red-border);
            img {
                width: 0.5rem;
                height: 0.5rem;
                top: -0.02rem;
                box-sizing: border-box;
                position: relative;
                display: none;
            }
        }
        .min-btn {
            background-color: var(--orange);
            border-color: var(--orange-border);
        }
        .zoom-btn {
            background-color: var(--green);
            border-color: var(--green-border);
        }
    }
    .title {
        text-align: center;
        flex: 1;
        color: var(--font-color-2);
    }
    .logo {
        width: 4rem;
        padding-right: 0.5rem;
        text-align: right;
        img {
            vertical-align: middle;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
        }
    }
}
</style>
