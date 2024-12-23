// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '耶温-个人主页',
      meta: [
        { name: 'description', content: '欢迎来到耶温的个人主页！这里是我分享作品、思考和技术的地方。我是一名前端开发，热爱探索钻研技术，并热衷于解决问题。' },
        { name: 'keywords', content: '耶温, 耶温博客,前端导航,前端分享,个人主页, 耶温个人主页, 前端开发, 前端开发个人主页' },
      ]
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  // 全局引入CSS
  // 样式放到asssets 打包时会被压缩 放到public中不会被压缩
  css: [
    "@/assets/css/normalize.css", // 样式重制
    "@/assets/css/base.css", // 全局样式
    "@/assets/css/root.css", // 样式主题
    'github-markdown-css/github-markdown.css'
  ],
  modules: [
    '@nuxt/content'
  ]
});
