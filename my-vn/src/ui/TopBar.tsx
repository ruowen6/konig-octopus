import { useTheme } from "../theme/ThemeProvider";

export function TopBar() {
  const { mode, theme, setMode } = useTheme();

  return (
    <div className="topbar">
      <div className="brand">Menu</div>
      <div className="theme">
        <span>{theme}</span>
        <button onClick={() => setMode("auto")} disabled={mode === "auto"}>Auto</button>
        <button onClick={() => setMode("day")} disabled={mode === "day"}>Day</button>
        <button onClick={() => setMode("night")} disabled={mode === "night"}>Night</button>
      </div>
    </div>
  );
}
