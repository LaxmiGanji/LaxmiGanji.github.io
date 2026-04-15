import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ERP System",
    subtitle: "7 Modules",
    desc: "A web-based College Management System built with the MERN stack featuring 7 integrated modules.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/LaxmiGanji/ERP_SPHN",
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Culinary Assistant",
    subtitle: "ML + Web",
    desc: "A smart cooking assistant integrating ML (NLP, CNN) with React frontend and Flask backend.",
    tech: ["React", "Flask", "NLP", "CNN", "SQLite"],
    link: "https://github.com/LaxmiGanji/Culinary_Creations",
    accent: "from-accent/20 to-primary/10",
  },
  {
    title: "Lesson Planner",
    subtitle: "EdTech",
    desc: "A responsive website generating lesson plans for faculty with dynamic content management.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/LaxmiGanji/RTRPProject_Lesson-planner",
    accent: "from-primary/20 to-primary/5",
  },
  {
    title: "C Game Projects",
    subtitle: "Games",
    desc: "Classic games — Brick Breaker and Snake — built from scratch in C with graphics rendering.",
    tech: ["C", "Graphics"],
    link: "https://github.com/LaxmiGanji/C",
    accent: "from-accent/15 to-accent/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Work</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border/50 overflow-hidden bg-card/30 hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient top */}
              <div className={`h-32 bg-gradient-to-br ${project.accent} relative`}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">{project.subtitle}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-primary" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
