import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "+91 9398018154", href: "tel:+919398018154" },
            { icon: Mail, label: "laxmiganji2005@gmail.com", href: "mailto:laxmiganji2005@gmail.com" },
            { icon: MapPin, label: "Hyderabad, India", href: "#" },
          ].map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:glow-border transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <p className="text-foreground/80 font-body text-sm break-all">{label}</p>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="w-16 h-px bg-border mx-auto mb-6" />
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            © 2024 Laxmi Ganji — Built with passion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
