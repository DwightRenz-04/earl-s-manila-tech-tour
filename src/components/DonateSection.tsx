import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import gcashQr from "@/assets/gcash-qr.jpg";
import gotymeQr from "@/assets/gotyme-qr.jpg";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="ml-2 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Copy">
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
    </button>
  );
};

const DonateSection = () =>
<section id="donate" className="py-20 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-foreground mb-4">

        Support My Journey
      </motion.h2>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-muted-foreground mb-12 max-w-xl mx-auto italic leading-relaxed">

        "Your generosity means a great deal to me. Every contribution, regardless of size, helps me move closer to this life-changing opportunity. Thank you for supporting my aspirations."
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* GCash */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-card p-8">

          <div className="bg-[hsl(220,80%,55%)] rounded-xl p-3 inline-block mb-4">
            <span className="text-white font-bold text-lg font-sans">GCash</span>
          </div>
          <img

          alt="GCash QR Code"
          className="w-56 h-auto mx-auto rounded-lg mb-4" src="/lovable-uploads/321f4d4a-7f8f-4049-8bea-e1630753c527.jpg" />

          <p className="text-sm text-muted-foreground mb-1">Account Name</p>
          <p className="font-semibold text-foreground font-sans mb-3">Earl Lawrence Obguia <CopyButton text="Earl Lawrence Obguia" /></p>
          <p className="text-sm text-muted-foreground mb-1">Account Number</p>
          <p className="font-semibold text-foreground font-sans">09202313282 <CopyButton text="09202313282" /></p>
        </motion.div>

        {/* GoTyme */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-card rounded-2xl shadow-card p-8">

          <div className="bg-foreground rounded-xl p-3 inline-block mb-4">
            <span className="text-card font-bold text-lg font-sans">GoTyme</span>
          </div>
          <img
          src={gotymeQr}
          alt="GoTyme QR Code"
          className="w-56 h-auto mx-auto rounded-lg mb-4" />

          <p className="text-sm text-muted-foreground mb-1">Account Name</p>
          <p className="font-semibold text-foreground font-sans mb-3">Earl Lawrence Obguia <CopyButton text="Earl Lawrence Obguia" /></p>
          <p className="text-sm text-muted-foreground mb-1">Account Number</p>
          <p className="font-semibold text-foreground font-sans">4240320473753956 <CopyButton text="4240320473753956" /></p>
        </motion.div>
      </div>
    </div>
  </section>;


export default DonateSection;