// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // 全局引入CSS
  css: [
    "/public/css/normalize.css", // 样式重制
    "/public/css/base.css", // 全局样式
    "/public/css/root.css", // 样式主题
  ],
});
