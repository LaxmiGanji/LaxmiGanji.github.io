import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Java", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Python", level: 75 },
  { name: "React.js", level: 80 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "MySQL", level: 75 },
  { name: "SQLite", level: 65 },
  { name: "PostgreSQL", level: 70 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Expertise</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:glow-border transition-all duration-300 cursor-default"
            >
              <div className="text-center">
                <span className="font-heading text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <div className="mt-3 w-full h-1 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.06, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
