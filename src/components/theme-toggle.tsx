"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(
      "%c🚀 Hey Developer! 👨‍💻",
      "color: #8b5cf6; font-size: 16px; font-weight: bold;",
    );
    console.log(
      "%cLooking for something cool? Check out the hidden terminal at /sh",
      "color: #10b981; font-size: 14px;",
    );
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-10 w-10">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 border border-violet-200 bg-violet-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-900/50 dark:hover:bg-violet-800"
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-4 w-4 text-violet-700 dark:text-violet-300" />
      ) : (
        <Sun className="h-4 w-4 text-violet-700 dark:text-violet-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
