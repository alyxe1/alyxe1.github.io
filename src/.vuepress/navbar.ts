import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // "/ai/",
  {
    text: "AI",
    icon: "robot",
    prefix: "/ai/",
    children: [
      { text: "AI简史", icon: "clock-rotate-left", link: "AI_Concise_History" },
    ],
  },
  {
    text: "Java后端",
    icon: "robot",
    prefix: "/javabackend/",
    children: [
      // { text: "Java简史", icon: "clock-rotate-left", link: "Java_Concise_History" },
    ],
  },

  // {
  //   text: "随想",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },

  {
    text: "个人介绍",
    icon: "person",
    link: "/intro",
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
