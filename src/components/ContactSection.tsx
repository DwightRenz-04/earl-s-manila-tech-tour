import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-8"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <motion.a
          href="mailto:obguiaearl@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 bg-card shadow-card rounded-xl px-6 py-4 hover:shadow-card-hover transition-shadow"
        >
          <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="font-medium text-foreground text-sm font-sans">obguiaearl@gmail.com</p>
          </div>
        </motion.a>
        <motion.a
          href="tel:09202313282"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 bg-card shadow-card rounded-xl px-6 py-4 hover:shadow-card-hover transition-shadow"
        >
          <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="font-medium text-foreground text-sm font-sans">09202313282</p>
          </div>
        </motion.a>
      </div>
    </div>
  </section>
);

export default ContactSection;
