import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  //   localStorage.setItem("theme", newTheme);
  // };

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme") || "light";
  //   setTheme(storedTheme);
  //   document.documentElement.classList.toggle("dark", storedTheme === "dark");
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 transition-colors duration-300 ease-in-out bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-md px-6">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Experience a seamless transition between themes. This version respects
          your system settings and remembers your choice for next time.
        </p>
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-200 dark:border-slate-700 group cursor-pointer"
      >
        {theme === "light" ? (
          <Moon className="text-purple-600 group-hover:rotate-12 transition-transform" />
        ) : (
          <Sun className="text-amber-400 animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default App;
