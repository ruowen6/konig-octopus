// my-vn/src/ui/GameScreen.tsx
import React from "react";
import { story } from "../engine/story";
import { gameReducer } from "../engine/reducer";
import { SceneStage } from "./SceneStage";
import { DialogueBox } from "./DialogueBox";
import { ChoiceList } from "./ChoiceList";
import { TopBar } from "./TopBar";
import { NightCover } from "./NightCover";
import { useTheme } from "../theme/ThemeProvider";
import { EndingScreen } from "./EndingScreen"; // ✅ 加这一行

export function GameScreen() {
  const [state, dispatch] = React.useReducer(gameReducer, { nodeId: story.start });
  const { theme } = useTheme();
  const node = story.nodes[state.nodeId];

  // 你的夜间文本逻辑保留
  const textToShow = theme === "night" ? (node.textNight ?? node.text) : node.text;

  React.useEffect(() => {
    dispatch({ type: "START", story });
  }, []);

  // ✅ 关键：结局节点就切到 EndingScreen
  if (node.ending) {
    // compute bgColor from node.scene if provided (support per-theme overrides)
    const bgColor =
      theme === "night"
        ? node.scene?.bgNightColor ?? node.scene?.bgColor
        : node.scene?.bgDayColor ?? node.scene?.bgColor;
    return (
      <EndingScreen
        title={node.ending.title}
        description={node.ending.description}
        onRestart={() => dispatch({ type: "START", story })} // ✅ 不刷新页面重开
        bgColor={bgColor}
      >
        {node.ending.image && <img src={node.ending.image} alt="ending artwork" />}
      </EndingScreen>
    );
  }

  // ✅ 非结局：你的原布局完全保留（ChoiceList 在 DialogueBox 里）
  return (
    <div className="game-root">
      <TopBar />
      <SceneStage scene={node.scene} />
  <NightCover />

      <div className="hud">
        <DialogueBox
          speaker={node.speaker}
          text={textToShow}
          onNext={
            node.choices
              ? undefined
              : node.next
              ? () => dispatch({ type: "NEXT", story })
              : undefined
          }
        >
          {node.choices && (
            <ChoiceList
              choices={node.choices}
              onChoose={(to: string) => dispatch({ type: "CHOOSE", to })}
            />
          )}
        </DialogueBox>
      </div>
    </div>
  );
}
