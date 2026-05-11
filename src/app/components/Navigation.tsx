import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer group" onClick={() => scrollToSection("hero")}>
            <span className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-card/50 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
            <button onClick={() => scrollToSection("about")} className="px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-3 px-4 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="block w-full text-left py-3 px-4 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-3 px-4 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-3 px-4 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-3 px-4 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/20 transition-all">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
