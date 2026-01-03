import badEndPic from "../assets/ending/bad.png";
import { EndingScreen } from "./EndingScreen";

export function DemoEnding() {
  return (
    <EndingScreen
      title="坏结局"
      description={
        "肥美的食材近在眼前怎么可以不做成美食呢？\n" +
        "章鱼烧，章鱼寿司，烤章鱼，章鱼冰淇淋……\n\n" +
        "你抱歉了一瞬，获得一个粘着你的奇怪生物小幽灵"
      }
      onRestart={() => window.location.reload()}
    >
      <img src={badEndPic} alt="ending artwork" />
    </EndingScreen>
  );
}
