import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-primary/20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground">
            © 2026 John Developer. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-primary hover:text-white rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-primary hover:text-white rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 hover:bg-accent hover:text-white rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
