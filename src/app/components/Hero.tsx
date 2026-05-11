import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/50">
                <div className="w-36 h-36 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-5xl border-2 border-primary/20">
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-accent mb-2">Hello, I'm</p>
            <h1 className="mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">John Developer</h1>
            <h2 className="text-muted-foreground mb-6">Full Stack Software Engineer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-foreground/80 max-w-2xl mx-auto mb-8 text-lg"
          >
            I build exceptional digital experiences that combine elegant code with intuitive design.
            Passionate about creating scalable solutions and learning new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/50 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/50 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-xl bg-card backdrop-blur-sm border border-border hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/50 transition-all group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={scrollToAbout} className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
              View My Work
            </button>
            <button onClick={() => window.open("mailto:hello@example.com")} className="px-8 py-4 bg-card backdrop-blur-sm border-2 border-primary rounded-xl hover:bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}
