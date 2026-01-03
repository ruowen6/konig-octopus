// my-vn/src/engine/story.ts
import type { Story } from "./types";
import beachDay from "../assets/bg/beach-day.png";
import beachNight from "../assets/bg/beach-night.png";
import konigNormal from "../assets/konig/normal.png";
import konigCry from "../assets/konig/cry.png";

import badEndPic1 from "../assets/ending/bad1.png";
import goodEndPic1 from "../assets/ending/good1.png";

export const story: Story = {
  start: "intro",
  nodes: {
    intro: {
      id: "intro",
      scene: {
        bgDay: beachDay,
        bgNight: beachNight,
        // character: konigNormal,
        characterAnim: "float",
      },
      speaker: "???",
      text: "沙滩上的阳光刺眼，你感觉到一阵阵炙热的海风。",
      textNight: "沙滩边浪花阵阵，你散着步，感受惬意而凉爽的夜晚。",
      next: "choose1",
    },

    choose1: {
      id: "choose1",
      speaker: "你",
      text: "一只类似章鱼的生物从海里一点点向你靠近！你决定……",
      scene: {
        bgDay: beachDay,
        bgNight: beachNight,
        character: konigNormal,
        characterAnim: "float",
      },
      choices: [
        { id: "c1", text: "吃掉他…", to: "eat" },
        { id: "c2", text: "带他回家", to: "adopt" },
      ],
    },

    eat: {
      id: "eat",
      scene: {
        bgDay: beachDay,
        bgNight: beachNight,
        character: konigCry,
        characterAnim: "shake",
      },
      speaker: "???",
      text: "真的吗？你真的决定吃掉他吗？",
      next: "bad-end-1",
    },

    adopt: {
      id: "adopt",
      scene: {
        bgDay: beachDay,
        bgNight: beachNight,
        character: konigNormal,
        characterAnim: "none",
      },
      speaker: "???",
      text: "真的吗？小章鱼静静地看着你……",
      next: "good-end-1",
    },

    "bad-end-1": {
      id: "bad-end-1",
      scene: {
        // example: ending page background color (can be any CSS color)
        bgColor: "#172448",
      },
      ending: {
        title: "坏结局1",
        description:
          "肥美的食材近在眼前怎么可以不做成美食呢？\n" +
          "章鱼烧，章鱼寿司，烤章鱼，章鱼冰淇淋……\n\n" +
          "你抱歉了一瞬，获得一个粘着你的奇怪生物小幽灵",
        image: badEndPic1,
      },
    },
    "good-end-1": {
      id: "good-end-1",
      scene: {
        // example: ending page background color (can be any CSS color)
        bgColor: "#351518ff",
      },
      ending: {
        title: "好结局1",
        description:
          "你领养了这个奇怪的小生物。\n" +
          "在交流中，你知道了他是一只叫König的小章鱼。\n" +
          "随着相处时间的增加，你们已经成为了家人一般的存在，幸福生活在一起。\n\n" +
          "你们幸福地过完了一生。",
        image: goodEndPic1,
      },
    },
  },
};
