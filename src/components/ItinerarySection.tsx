import { motion } from "framer-motion";
import { Plane, Building2, Landmark, Sparkles } from "lucide-react";

const days = [
  {
    day: "Day 1",
    icon: Plane,
    title: "DVO → MNL",
    items: ["Arrival in Manila", "Company Visit 1", "Lunch", "Company Visit 2", "Dinner", "Hotel check-in"],
  },
  {
    day: "Day 2",
    icon: Landmark,
    title: "Culture & Tech",
    items: ["Breakfast", "Heritage / Cultural Tour", "Lunch", "Company Visit 3", "Dinner", "Overnight"],
  },
  {
    day: "Day 3",
    icon: Sparkles,
    title: "Tech & Adventure",
    items: ["Breakfast", "Company Visit 4", "Lunch", "Dinner", "Overnight"],
  },
  {
    day: "Day 4",
    icon: Building2,
    title: "MNL → DVO",
    items: ["Breakfast", "Hotel Check-out", "Company Visit 5", "Lunch", "Dinner", "MNL → DVO"],
  },
];

const ItinerarySection = () => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
      >
        Tour Schedule
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-12 max-w-lg mx-auto"
      >
        A well-organized itinerary filled with valuable learning and professional opportunities.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {days.map((d, i) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl shadow-card overflow-hidden"
          >
            <div className="bg-navy-gradient p-4 flex items-center gap-3">
              <d.icon className="w-5 h-5 text-secondary" />
              <div>
                <span className="text-secondary text-xs font-semibold font-sans">{d.day}</span>
                <h3 className="text-primary-foreground font-semibold text-sm font-sans">{d.title}</h3>
              </div>
            </div>
            <ul className="p-4 space-y-2">
              {d.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ItinerarySection;
