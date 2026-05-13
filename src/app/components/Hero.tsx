import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-primary/10"></div>
        <div className="absolute left-1/2 top-32 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full border border-accent/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative h-[24rem] w-full max-w-sm">
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"></div>
              <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl"></div>
              <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl"></div>
              <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-primary/30"></div>
              <div className="absolute bottom-10 right-8 h-20 w-20 rounded-full border border-accent/30"></div>
              <div className="relative mx-auto flex h-full max-w-[21rem] items-end justify-center">
                <div className="absolute bottom-0 h-72 w-72 rounded-[46%_54%_48%_52%/58%_42%_58%_42%] bg-gradient-to-br from-primary/25 via-card to-accent/20 shadow-2xl shadow-primary/10"></div>
                <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-[48%_52%_45%_55%/58%_44%_56%_42%] bg-gradient-to-br from-muted via-background to-primary/15 shadow-xl shadow-primary/10">
                  <img
                    src="/profile.svg"
                    alt="Prasajan Ravishka"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-white/10"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-accent mb-2 tracking-[0.24em] uppercase text-sm">Hello, I'm</p>
              <h1 className="mb-4 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-5xl text-transparent sm:text-6xl">Prasajan Ravishka</h1>
              <h2 className="text-muted-foreground mb-6 text-xl">Undergraduate Student</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-foreground/80 max-w-2xl mx-auto mb-8 text-lg lg:mx-0"
            >
             Full Stack Software Engineer specializing in Python, AI integrations, 
             and end-to-end web development. Passionate about leveraging strong algorithms
              and modern frameworks to build innovative, high-quality software that solves 
              real-world problems
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center mb-12 lg:justify-start"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button onClick={scrollToAbout} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                View My Work
              </button>
              <button onClick={() => window.open("mailto:hello@example.com")} className="px-8 py-4 bg-card/80 backdrop-blur-sm border border-primary/40 rounded-lg hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                Contact Me
              </button>
            </motion.div>
          </div>
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
