import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
        {
      title: "Smrt Library Management System with Image Processing Mobile App(Ongoing)",
      description: "A mobile application for library management that incorporates image processing to automate book check-ins and check-outs. The app allows users to scan book covers for quick transactions, manage their library accounts, and receive notifications for due dates. The backend is built with Node.js and PostgreSQL, while the frontend is developed using React Native.",
      tags: ["React Native", "Node.js", "PostgreSQL", "Image Processing"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with cart management, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Event Management Application",
      description: "A comprehensive event management solution with registration, scheduling, and attendee management.",
      tags: ["Html", "php", "My SQL", "CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Job Board Dashboard",
      description: "A job board dashboard for job seekers to track applications, manage resumes, and receive job recommendations.",
      tags: ["React", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com"
    },
        {
      title: "Aroma Dry IoT Project",
      description: " An IoT-based aroma diffuser that allows users to control scent intensity, schedule diffusion times, and monitor usage through a mobile app. The project integrates sensors for real-time feedback and uses a cloud platform for data storage and remote access.",
      tags: ["Html", "php", "Firebase", "CSS", "IoT"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals to showcase their work.",
      tags: ["Vue.js", "Express", "AWS S3"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/6 to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 border border-primary/25 text-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
