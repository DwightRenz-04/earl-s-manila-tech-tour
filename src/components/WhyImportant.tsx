import { motion } from "framer-motion";
import { Building2, Users, Wrench, Briefcase } from "lucide-react";

const reasons = [
  { icon: Building2, title: "Tech Company Visits", desc: "Visit top tech companies in Manila and understand real-world IT practices and innovations." },
  { icon: Users, title: "Professional Networking", desc: "Meet industry professionals and learn about potential career paths in technology." },
  { icon: Wrench, title: "Hands-on Learning", desc: "Apply classroom knowledge through workshops and demonstrations." },
  { icon: Briefcase, title: "Career Preparation", desc: "Gain awareness of industry standards and professional expectations." },
];

const WhyImportant = () => (
  <section className="py-20 px-6 bg-navy-gradient text-primary-foreground">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Why This Tour Is Important
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 font-sans">{r.title}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyImportant;
