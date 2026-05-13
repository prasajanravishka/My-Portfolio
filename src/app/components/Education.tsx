import { motion } from "motion/react";

export function Education() {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2019 - 2021",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed a thesis on neural network optimization."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State College",
      period: "2015 - 2019",
      description: "Core studies in algorithms, data structures, and web development. Active member of the coding club."
    }
  ];

  return (
    <section id="education" className="py-20 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">Education</h2>
          <p className="text-muted-foreground text-lg">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-16 last:pb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-0 top-0 w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 border-4 border-background"
              ></motion.div>
              {index !== educations.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-accent/50"></div>
              )}

              <motion.div
                whileHover={{ x: 4 }}
                className="p-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-accent text-sm mt-1 sm:mt-0">{edu.period}</span>
                </div>
                <h4 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 font-medium">{edu.institution}</h4>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}