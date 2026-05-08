# docClaw Public Pages

一个完全独立的 Astro 静态站，用来发布可以公开访问的页面，比如 AI digest 长版内容。

这个 repo 不读取、不同步 `/Users/lenore/Documents/docClaw`，内容直接写在本项目里，降低 vault 暴露和同步复杂度。

## 技术栈

- Astro
- Markdown content collection
- Cloudflare Pages 静态部署

## 本地开发

```sh
npm install
npm run dev
```

## 构建

```sh
npm run build
npm run preview
```

Cloudflare Pages 设置：

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 或更新

## 写一篇 AI digest

在 `src/content/ai-digest/` 下新增 Markdown 文件：

```md
---
title: "标题"
description: "一句话摘要"
date: 2026-05-08
tags:
  - AI
---

正文内容。
```

构建后会生成：

- 首页列表：`/`
- 文章详情：`/ai-digest/<文件名>/`
