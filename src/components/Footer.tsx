import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-gradient text-primary-foreground py-12 px-6 text-center">
    <GraduationCap className="w-8 h-8 text-secondary mx-auto mb-3" />
    <h3 className="text-xl font-bold mb-1">Thank You for Your Support</h3>
    <p className="text-primary-foreground/70 text-sm font-sans">
      BS Computer Science — University of Mindanao
    </p>
    <p className="text-primary-foreground/50 text-xs font-sans mt-1">
      Educational Tour — May 2026
    </p>
  </footer>
);

export default Footer;
