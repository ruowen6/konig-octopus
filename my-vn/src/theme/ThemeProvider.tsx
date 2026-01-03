import React from "react";

type Mode = "auto" | "day" | "night";
type Theme = "day" | "night";

function getAutoTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "day" : "night";
}

const ThemeCtx = React.createContext<{
  mode: Mode;
  theme: Theme;
  setMode: (m: Mode) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<Mode>("auto");
  const [theme, setTheme] = React.useState<Theme>(getAutoTheme());

  // mode 改变时，立刻刷新 theme
  React.useEffect(() => {
    setTheme(mode === "auto" ? getAutoTheme() : mode);
  }, [mode]);

  // theme 改变时，立刻写到 DOM（给 CSS/其他组件用）
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // auto 模式下，每分钟校准一次（跨越 7:00/19:00 时会自动切）
  React.useEffect(() => {
    if (mode !== "auto") return;
    const id = window.setInterval(() => setTheme(getAutoTheme()), 60_000);
    return () => window.clearInterval(id);
  }, [mode]);

  return (
    <ThemeCtx.Provider value={{ mode, theme, setMode }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
