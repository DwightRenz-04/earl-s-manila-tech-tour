import { motion } from "framer-motion";
import { Plane, Hotel, Utensils, Ticket, Wallet } from "lucide-react";

const items = [
  { icon: Plane, label: "Transportation", desc: "Round-trip travel and local transfers" },
  { icon: Hotel, label: "Accommodation", desc: "3-night hotel stay" },
  { icon: Utensils, label: "Meals", desc: "Breakfast, lunch, and dinner" },
  { icon: Ticket, label: "Entrance Fees", desc: "All admission charges" },
  { icon: Wallet, label: "Other Expenses", desc: "Essential tour-related costs" },
];

const CostBreakdown = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-3"
      >
        What's Covered in{" "}
        <span className="text-gold-gradient">₱24,800.00</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-12 max-w-lg mx-auto"
      >
        A comprehensive package ensuring a worry-free educational experience.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 font-sans text-sm">
              {item.label}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CostBreakdown;
