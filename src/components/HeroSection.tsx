import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import manilaImg from "@/assets/manila-skyline.jpg";
import earlImg from "@/assets/earl-formal.jpg";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate, timeLeft]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds, isExpired: timeLeft <= 0 };
};

const HeroSection = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    new Date("2026-05-05T00:00:00+08:00")
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${manilaImg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src={earlImg}
            alt="Earl Lawrence Obguia"
            className="w-32 h-32 rounded-full mx-auto border-4 border-secondary object-cover shadow-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-secondary font-medium tracking-widest uppercase text-sm mb-3"
        >
          A Humble Request for Your Support
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          Help Me Pursue My{" "}
          <span className="text-gold-gradient">Educational Tour</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Supporting a Computer Science student's academic development by enabling travel to Manila for hands-on industry exposure and meaningful cultural immersion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-primary-foreground/90"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <GraduationCap className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">BS Computer Science</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">May 5-8, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Manila, Philippines</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#donate"
            className="inline-block bg-gold-gradient text-secondary-foreground font-semibold px-8 py-3.5 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Support My Journey
          </a>
        </motion.div>

        {!isExpired && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[72px] text-center"
              >
                <span className="block text-2xl md:text-3xl font-bold text-secondary tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
