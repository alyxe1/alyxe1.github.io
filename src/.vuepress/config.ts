import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Edward的博客",
  description: "Edward的博客，记录学习历程和共享知识",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
