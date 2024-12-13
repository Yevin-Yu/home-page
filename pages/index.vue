<template>
    <div class="home">
        <div class="content" :class="!isApp || 'is-app'">
            <div class="left">
                <img src="/logo.png" alt="logo" />
                <h1>耶温-Yevin</h1>
                <p>Web前端开发</p>
                <p>让每一次点击都充满惊喜！</p>
                <p>认真生活，简单做人，用心做事。</p>
                <div class="kill">
                    <svg class="icon" v-for="item in skillList" :key="item">
                        <use :xlink:href="item"></use>
                    </svg>
                </div>
            </div>
            <div class="right">
                <div
                    class="card-item"
                    v-for="(item, index) in caseList"
                    :key="item.name"
                >
                    <div v-if="index % 2 != 0" class="case-image">
                        <img :src="item.image" alt="image" />
                    </div>
                    <div class="detail">
                        <div class="title">
                            <svg class="icon">
                                <use :xlink:href="item.icon"></use>
                            </svg>
                            <a :href="item.github">{{ item.name }}</a>
                        </div>
                        <div class="readme">{{ item.introduction }}</div>
                        <div class="tag" v-if="item.tag">
                            <span v-for="it in item.tag" :key="it">{{
                                it
                            }}</span>
                        </div>
                        <div class="path">
                            <a :href="item.path">{{ item.path }}</a>
                        </div>
                    </div>
                    <div v-if="index % 2 == 0" class="case-image">
                        <img :src="item.image" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const isApp = inject("isApp");
const skillList = ref([
    "#icon-html5",
    "#icon-css3",
    "#icon-js",
    "#icon-ts",
    "#icon-vue",
    "#icon-nuxt",
    "#icon-react",
    "#icon-vite",
    "#icon-webpack",
    "#icon-node",
    "#icon-nest",
    "#icon-git",
    "#icon-gitlab",
    "#icon-jenkins",
    "#icon-mysql",
    "#icon-nginx",
]);
const caseList = ref([
    {
        name: "[ yevin-notes-blog ]",
        icon: "#icon-boke",
        image: "images/boke.png",
        introduction:
            "耶温笔记：一个基于 VuePress 与 vuepress-theme-plume 主题的学习笔记博客网站。",
        tag: ["vuepress", "vuepress-theme-plume", "markdown"],
        path: "https://yuwb.cn",
        github: "https://github.com/Yevin-Yu/yevin-notes-blog",
    },
    {
        name: "[ easy-browser-home ]",
        icon: "#icon-home",
        image: "images/nav.png",
        introduction:
            "耶温导航：一个浏览器导航主页。包括：搜索，导航连接，待办，笔记，热点新闻。",
        tag: ["vue3", "vite"],
        path: "https://yuwb.cn/nav",
        github: "https://github.com/Yevin-Yu/easy-browser-home",
    },
    {
        name: "[ easy-chat-web ]",
        icon: "#icon-chat",
        image: "images/chat.png",
        introduction:
            "EasyChatWeb：一个Web端的简洁轻聊页面，基于Vue + Node.js + WS。能够快速实现简单的群组聊天交互功能。 ",
        tag: ["vue3", "vite", "websocket", "node.js"],
        path: "https://chat.yuwb.cn",
        github: "https://github.com/Yevin-Yu/easy-chat-web",
    },
    {
        name: "[ multi-format-editor ]",
        icon: "#icon-format",
        image: "images/format.png",
        introduction:
            "MultiFormatEditor：多格式编辑器。在线格式化、编辑、下载导出，JSON、MD等格式文件。 ",
        tag: ["vue3", "vite", "json", "md"],
        path: "https://yuwb.cn/format",
        github: "https://github.com/Yevin-Yu/multi-format-editor",
    },
]);
</script>
<style scoped>
.home {
    padding: 0.5rem 1rem;
    position: relative;
    .content {
        border-radius: 1rem;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        .left {
            margin-top: 3rem;
            text-align: center;
            display: inline-block;
            vertical-align: top;
            width: 35%;
            font-size: 0.8rem;
            color: var(--font-color-2);
            h1 {
                font-weight: normal;
            }
            img {
                width: 10rem;
                height: 10rem;
                box-shadow:
                    5px 5px 15px rgba(0, 0, 0, 0.3),
                    -5px -5px 15px rgba(255, 255, 255, 0.8);
            }
            .kill {
                padding: 1rem 2rem;
            }
            .kill .icon {
                padding: 0.2rem;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        .right {
            width: 65%;
            display: inline-block;
            .card-item {
                display: inline-block;
                margin: 0 1rem 1rem;
                width: 100%;
                height: 9.5rem;
                border-radius: 0.4rem;
                padding: 1em;
                box-sizing: border-box;
                box-shadow:
                    5px 5px 15px rgba(0, 0, 0, 0.2),
                    -5px -5px 15px rgba(255, 255, 255, 0.5);
                font-size: 0.8rem;
                color: var(--font-color-2);
                overflow: hidden;
                .detail {
                    display: inline-block;
                    width: 60%;
                    padding: 0 0.5rem;
                    box-sizing: border-box;
                }
                .case-image {
                    width: 40%;
                    display: inline-block;
                    box-sizing: border-box;
                    height: 100%;
                    vertical-align: top;
                    border-radius: 0.2rem;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                .icon {
                    width: 1rem;
                    height: 1rem;
                    vertical-align: middle;
                    margin-right: 0.5rem;
                }
                .title {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
                .readme {
                    font-size: 0.7rem;
                    line-height: 1.2rem;
                    color: var(--font-color-3);
                }
                .path a {
                    color: var(--font-color-1);
                    font-size: 0.7rem;
                    line-height: 1.5rem;
                    text-decoration: none;
                }
                .title a {
                    color: var(--path-color);
                    line-height: 1.5rem;
                    text-decoration: none;
                }
                .tag {
                    span {
                        display: inline-block;
                        margin: 0.2rem 0.4rem 0.2rem 0;
                        padding: 0.2rem 0.4rem;
                        background-color: var(--bg-color-2);
                        color: var(--font-color-3);
                        border-radius: 0.2rem;
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }
}
.home {
    .content.is-app {
        padding: 0;
        .left,
        .right {
            width: 100%;
            .card-item{
                margin: 0.5rem 0;
                height: unset;
            }
            .case-image{
                vertical-align: top;
            }
        }
    }
}
</style>
