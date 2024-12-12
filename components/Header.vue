<template>
    <header class="header">
        <!-- 关闭 最小化 缩放 -->
        <div class="btn">
            <span class="close-btn">
                <svg class="icon">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </span>
            <span class="min-btn">
                <svg class="icon">
                    <use xlink:href="#icon-min"></use>
                </svg>
            </span>
            <span class="zoom-btn">
                <svg class="icon">
                    <use xlink:href="#icon-zoom"></use>
                </svg>
            </span>
        </div>
        <span class="file-name">home-page</span>
        <span class="git-name">master</span>
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
    position: relative;

    .btn {
        width: 4rem;
        margin-left: 0.5rem;

        &:hover .close-btn .icon,
        &:hover .min-btn .icon,
        &:hover .zoom-btn .icon {
            display: inline-block;
        }

        .close-btn,
        .min-btn,
        .zoom-btn {
            display: inline-block;
            background-color: var(--red);
            width: 0.7rem;
            height: 0.7rem;
            line-height: 0.7rem;
            vertical-align: middle;
            margin: 0 0.2rem;
            text-align: center;
            border-radius: 50%;
            box-sizing: border-box;
            border: 0.015rem solid var(--red-border);
            cursor: pointer;
            position: relative;
            .icon {
                width: 0.7rem;
                height: 0.7rem;
                position: relative;
                top: 0.07rem;
                left: 0.05rem;
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

    .file-name,
    .git-name {
        position: absolute;
        left: 4.5rem;
        font-size: 0.65rem;
        color: var(--font-color-1);
    }

    .git-name {
        left: 8.5rem;
        color: var(--font-color-2);
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
        cursor: pointer;

        img {
            vertical-align: middle;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
        }
    }
}
</style>
