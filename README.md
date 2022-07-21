# KenkoGo WebUI

一个简单的前端页面，用于控制 [KenkoGoServer](https://github.com/AkagiYui/KenkoGoServer) 的运行。

> 示例 demo
> 
> 地址: https://kenkogo.akagiyui.com

> 注意！这只是个人学习 Vue 的作品，谨慎用于生产环境！
> 
> 由于这是本人的第一个 Vue 项目，各种不规范请**指出**，以帮助我改进，感谢！

## 更新日志 [Changelog](Changelog.md)

## 注意事项 Tips

[该仓库](https://github.com/AkagiYui/kenkogo-webui) 仅实现前端服务，后端服务请前往 [KenkoGoServer](https://github.com/AkagiYui/KenkoGoServer)

该项目尚未成熟！

`master`分支仍处于开发阶段，请勿在生产环境使用！

## 开发相关 Development

### 使用技术 TechnologyStack

NodeJS: [v16.15.1](https://nodejs.org/zh-cn/) [下载地址](https://nodejs.org/download/release/v16.15.1/)

包管理器: [pnpm](https://pnpm.io/zh/)

构建工具: [Vite 3](https://cn.vitejs.dev/)

代码规范工具: [ESLint](https://eslint.org/) [中文文档](https://eslint.bootcss.com/)

自动构建/托管: [Vercel](https://vercel.com/)

编程语言: [TypeScript](https://www.typescriptlang.org/)

#### Node模块 Node Modules

- [vue ^3.2.37](https://staging-cn.vuejs.org/) 前端框架
- [vue-router ^4.1.2](https://router.vuejs.org/zh/index.html) 路由控制器
- [pinia ^2.0.16](https://pinia.vuejs.org/) Vue 状态管理插件
- [naive-ui ^2.31.0](https://www.naiveui.com/zh-CN/light) Vue3 组件库
- [axios ^0.27.2](https://axios-http.com/zh/) 异步HTTP客户端
- [pinia-plugin-persistedstate ^1.6.3](https://github.com/prazdevs/pinia-plugin-persistedstate) Pinia 持久化插件
- [@vicons/fluent ^0.12.0](https://www.xicons.org/) 图标库
- [@vicons/ionicons5 ^0.12.0](https://www.xicons.org/) 图标库

- [vue-clipboard3 2.0.0](https://github.com/JamieCurnow/vue-clipboard3) 剪贴板操作
- [qrcode.vue ^3.3.3](https://github.com/scopewu/qrcode.vue) 二维码生成组件
- [sha1 ^1.1.1](https://github.com/pvorb/node-sha1) sha1 加密模块

### 待办事项 Todo

- [ ] 构建初始页面

## 推送前注意 Warnings

- console 是否报错/警告
- eslint 格式检查
- build 是否报错

## 快速开始 Quick Start

请确保你的机器有 **NodeJS 16.15.1** 的环境，其他版本未经测试。

1. 全局安装 pnpm

```sh
npm install --location=global pnpm
```

2. 安装依赖

```sh
git clone https://github.com/AkagiYui/kenkogo-webui
cd kenkogo-webui
pnpm install
```

3. 启动服务

```sh
pnpm dev
```
