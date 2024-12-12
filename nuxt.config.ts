// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules:[
    '@nuxt/content'
  ]
});
