import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import earlCasual from "@/assets/earl-casual.jpg";

const AboutSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
      >
        About My Journey
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <img
            src={earlCasual}
            alt="Earl Lawrence Obguia"
            className="w-64 h-64 rounded-2xl object-cover shadow-card"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-1">
            Earl Lawrence P. Obguia
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Davao City, Philippines</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am currently a third-year Computer Science student at the University of Mindanao in Davao City.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This coming May, our department is planning an educational trip to Manila—an opportunity that will greatly enhance my academic and career development by allowing us to experience and learn from the rapidly growing technology industry in Manila, Philippines.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
