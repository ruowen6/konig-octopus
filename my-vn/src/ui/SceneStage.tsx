import type { Scene } from "../engine/types";
import { useTheme } from "../theme/ThemeProvider";

export function SceneStage({ scene }: { scene?: Scene }) {
  const { theme } = useTheme();

  const bg =
    theme === "night"
      ? scene?.bgNight ?? scene?.bg
      : scene?.bgDay ?? scene?.bg;

  const bgColor =
    theme === "night"
      ? scene?.bgNightColor ?? scene?.bgColor
      : scene?.bgDayColor ?? scene?.bgColor;

  const char = scene?.character;
  const fx = scene?.fx;

  const style: React.CSSProperties | undefined =
    bg || bgColor
      ? {
          ...(bg ? { backgroundImage: `url(${bg})` } : {}),
          ...(bgColor ? { backgroundColor: bgColor } : {}),
        }
      : undefined;

  return (
    <div className="stage" style={style}>
      {fx && <img className="fx" src={fx} alt="fx" />}
      {char && <img className={`character ${scene?.characterAnim ?? "none"}`} src={char} alt="character" />}
    </div>
  );
}
