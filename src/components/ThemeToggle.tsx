import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border text-tech-text hover:text-tech-cyan hover:border-tech-cyan transition-colors"
    >
      <Sun className={`h-5 w-5 transition-transform ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <Moon className={`h-5 w-5 absolute transition-transform ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
    </button>
  );
};

export default ThemeToggle;
