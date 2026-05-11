import { Moon, Sun, Droplets, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const renderIcon = () => {
    if (theme === "light") return <Sun className="h-5 w-5" />;
    if (theme === "ocean") return <Droplets className="h-5 w-5" />;
    if (theme === "neon") return <Zap className="h-5 w-5" />;
    return <Moon className="h-5 w-5" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all outline-none flex items-center justify-center w-10 h-10">
          {renderIcon()}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border-border min-w-[8rem]">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer gap-2">
          <Sun className="h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer gap-2">
          <Moon className="h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("ocean")} className="cursor-pointer gap-2">
          <Droplets className="h-4 w-4" />
          Ocean
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("neon")} className="cursor-pointer gap-2">
          <Zap className="h-4 w-4" />
          Neon
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
