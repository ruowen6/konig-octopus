import React from "react";

type Mode = "auto" | "day" | "night";

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "day" : "night";
}

export function useThemeMode() {
  const [mode, setMode] = React.useState<Mode>("auto");

  const theme = React.useMemo(() => {
    if (mode === "auto") return getAutoTheme();
    return mode;
  }, [mode]);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      if (mode === "auto") {
        document.documentElement.dataset.theme = getAutoTheme();
      }
    }, 60_000);
    return () => window.clearInterval(id);
  }, [mode]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { mode, setMode, theme };
}
