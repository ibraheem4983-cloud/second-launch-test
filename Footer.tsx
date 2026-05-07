import { motion } from "framer-motion";
import { MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="relative container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#4dd9c0]" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-gradient">Tour</span>
              <span className="text-white ml-1">Malaysia</span>
            </span>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            {["Destinations", "Best Time", "Budget", "About"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const id = link.toLowerCase().replace(" ", "");
                  const map: Record<string, string> = {
                    destinations: "#destinations",
                    besttime: "#timing",
                    budget: "#budget",
                    about: "#about",
                  };
                  document.querySelector(map[id])?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Credit */}
          <div className="flex items-center gap-1 text-sm text-white/40">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-[#ff7b5e] fill-[#ff7b5e]" />
            <span>for Malaysia travelers</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Tour Malaysia. All rights reserved. Travel information is for guidance purposes only.
        </div>
      </div>
    </footer>
  );
}
