import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">About</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 mb-8 text-foreground">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              I'm Laxmi Ganji — a dedicated full stack developer from Hyderabad, India.
              I'm passionate about crafting seamless digital experiences, from pixel-perfect
              frontends to robust backend systems.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science Engineering,
              I bring a mix of academic knowledge and hands-on project experience
              across the MERN stack, Python, Java, and DevOps practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {[
              { label: "Name", value: "Laxmi Ganji" },
              { label: "Location", value: "Hyderabad, India" },
              { label: "Email", value: "laxmiganji2005@gmail.com" },
              { label: "Focus", value: "Full Stack Development" },
            ].map(({ label, value }, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-border/50">
                <span className="text-primary font-heading text-sm font-medium w-24">{label}</span>
                <span className="text-foreground/80 font-body text-sm">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
