
# 个人主页

欢迎来到我的个人主页！这里是我分享作品、思考和技术的地方。我是一名前端开发，热爱探索钻研技术，并热衷于解决问题。


## 项目简介

该网站是一个仿 Zed 编译器样式的个人主页。 [Zed - github](https://github.com/zed-industries/zed)


## 技术栈

- 主框架： [Nuxt3](https://nuxtjs.org.cn/) - Vue3 版的 SSR版本。

- 状态保持：[Pinia](https://pinia.vuejs.org/zh/) - 符合直觉的 Vue.js 状态管理库。

- 图标使用：[iconify.design](https://iconify.design/) - 一个开源图标库。


- MD转换HTML：使用插件 `@nuxt/content`
- MD风格美化：使用插件 `github-markdown-css`


## 安装使用

1. 使用 git 拉取项目
```git
git clone https://github.com/Yevin-Yu/home-page.git
```
2. 进入文件夹，下载依赖

```npm
npm install
```
3. 运行项目

```npm
npm run dev
```
## 部署

1. 项目打包
```npm
npm run build
```

2. 将 `.nuxt` 和 `.output` 上传服务器
```
- .nuxt
- .output
```

3. 启动项目
```bash
node .output/server/index.mjs
```
## 贡献

欢迎任何形式的贡献！如果你有建议或想法，请提交问题或与我联系。

## 许可证

这个项目使用 MIT 许可证 进行许可。

感谢你的访问！希望你喜欢这个主页项目。
