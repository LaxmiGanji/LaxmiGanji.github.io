import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Server, Layout, GitBranch } from "lucide-react";

const services = [
  { icon: Palette, title: "Web Design", desc: "Creating visual elements and intuitive layouts that captivate users." },
  { icon: GitBranch, title: "DevOps", desc: "Streamlining the development lifecycle with CI/CD and cloud practices." },
  { icon: Layout, title: "Frontend Dev", desc: "Building responsive, dynamic interfaces with React and modern CSS." },
  { icon: Server, title: "Backend Dev", desc: "Crafting robust APIs and server architectures with Node.js and Python." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">What I Do</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/30 hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
