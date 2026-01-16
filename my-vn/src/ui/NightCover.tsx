import { useTheme } from "../theme/ThemeProvider";

export function NightCover() {
  const { theme } = useTheme();
  if (theme !== "night") return null;

  return <div className="night-cover" aria-hidden />;
}

export default NightCover;
