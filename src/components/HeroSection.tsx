import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const nameChars = "Laxmi Ganji".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Hello, I'm
        </motion.p>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={char === " " ? "inline-block w-4" : "text-gradient inline-block"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-24 h-[2px] bg-primary mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl sm:text-2xl font-heading font-light text-foreground/80 mb-2"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-muted-foreground font-body max-w-lg mx-auto mb-10 text-sm leading-relaxed"
        >
          Passionate about building elegant web experiences with modern technologies.
          From Hyderabad, India.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/LaxmiGanji" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:laxmiganji2005@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:laxmiganji2005@gmail.com"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-medium text-sm tracking-wide hover:shadow-[0_0_30px_hsl(32_95%_55%/0.4)] transition-shadow"
          >
            Hire Me
          </a>
          <a
            href="https://docs.google.com/document/d/1SOHIihdg_HY_EQy-yH9fBwCYbjoOMBN3/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-border text-foreground/80 font-heading font-medium text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all"
          >
            My Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
