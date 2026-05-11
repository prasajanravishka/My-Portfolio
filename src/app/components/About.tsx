import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and design patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm a passionate software engineer with over 5 years of experience building web applications.
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
