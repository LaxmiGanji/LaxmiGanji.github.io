import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { title: "Bachelor's Degree", desc: "Pursuing B.Tech in Computer Science Engineering", icon: GraduationCap },
  { title: "Intermediate", desc: "Completed with 87%", icon: Award },
  { title: "Schooling", desc: "Completed with 10.0 CGPA", icon: Award },
];

const certificates = [
  "DevOps on AWS",
  "Software Development (Microsoft)",
  "PostgreSQL (Infosys)",
  "Developer Program (Accenture)",
  "Web Design (freeCodeCamp)",
  "SQL Advanced",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Background</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Education & <span className="text-gradient">Certs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {education.map((ed, i) => (
              <motion.div
                key={ed.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-12 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <ed.icon size={14} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{ed.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{ed.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Certificates</h3>
            {certificates.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/80 font-body text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
