import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const topDonators = [
  { rank: 1, name: "Anonymous Hero", amount: 2500, message: "Go get 'em, Earl!" },
  { rank: 2, name: "Maria Santos", amount: 2000, message: "Proud of you!" },
  { rank: 3, name: "Juan Dela Cruz", amount: 1500, message: "For your future 🎓" },
  { rank: 4, name: "Ate Kristine", amount: 1000, message: "Study well!" },
  { rank: 5, name: "Kuya Mark", amount: 800, message: "" },
  { rank: 6, name: "Tita Grace", amount: 500, message: "God bless!" },
];

const rankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="w-6 h-6 text-[hsl(45,90%,50%)]" />;
  if (rank === 2) return <Medal className="w-6 h-6 text-[hsl(210,10%,70%)]" />;
  if (rank === 3) return <Award className="w-6 h-6 text-[hsl(25,70%,55%)]" />;
  return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
};

const LeaderboardSection = () => (
  <section id="leaderboard" className="py-20 px-6 bg-muted/50">
    <div className="max-w-2xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        🏆 Top Supporters
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-10 max-w-md mx-auto"
      >
        A heartfelt thank you to everyone who made this journey possible.
      </motion.p>

      <div className="space-y-3">
        {topDonators.map((donor, i) => (
          <motion.div
            key={donor.rank}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`flex items-center gap-4 rounded-xl p-4 transition-shadow ${
              donor.rank <= 3
                ? "bg-card shadow-card"
                : "bg-card/60"
            }`}
          >
            <div className="shrink-0">{rankIcon(donor.rank)}</div>
            <div className="flex-1 text-left min-w-0">
              <p className="font-semibold text-foreground font-sans truncate">{donor.name}</p>
              {donor.message && (
                <p className="text-xs text-muted-foreground italic truncate">"{donor.message}"</p>
              )}
            </div>
            <div className="shrink-0 font-bold text-primary font-sans">
              ₱{donor.amount.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LeaderboardSection;
