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
    <section id="about" className="py-20 relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Forward-thinking Full Stack Developer with a solid foundation in computing, mathematical modeling, and information systems.
             I am passionate about bridging traditional web development with cutting-edge AI, bringing hands-on experience in Python, 
             computer vision, and large language model integrations. From architecting efficient backend logic to building automated,
              data-driven solutions, I specialize in transforming complex engineering challenges into elegant software. I am eager to 
              drive impactful innovation and deliver seamless user experiences within a collaborative team
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
              className="p-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
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
