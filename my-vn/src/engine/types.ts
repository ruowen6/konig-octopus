export type ThemeName = "day" | "night";

// engine/types.ts
export type Scene = {
  bg?: string;                        // 兼容旧写法：单背景
  bgDay?: string;
  bgNight?: string;

  // 背景颜色（可选），当没有背景图时可作为舞台背景
  // 支持按主题覆盖：优先使用 bgDayColor/bgNightColor，否则使用 bgColor
  bgColor?: string;
  bgDayColor?: string;
  bgNightColor?: string;

  character?: string;
  fx?: string;
  characterAnim?: "float" | "shake" | "none" | "breathe";
};


export type Choice = {
  id: string;
  text: string;
  to: string;               // 跳转到哪个 node
};

export type Node = {
  id: string;
  scene?: Scene;
  speaker?: string;
  // text shown in default (day) mode. Use `textNight` for night-mode override.
  text?: string;
  textNight?: string;
  choices?: Choice[];       // 有 choices 就停下等待用户点
  next?: string;            // 没 choices 就可以点“下一句”继续

  ending?: {
    title: string;
    description: string;
    image?: string; // 可选：结局画框图片
  };
};

export type Story = {
  start: string;
  nodes: Record<string, Node>;
};
