import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, MapPin, Users } from "lucide-react";

const heroImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/kl-towers_fb1bc7d3.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/langkawi-beach_5d07ae11.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/perhentian_a9df2a03.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/cameron-highlands_dac2a51a.jpg",
];

const stats = [
  { icon: MapPin, value: "9+", label: "Destinations" },
  { icon: Star, value: "4.8", label: "Avg Rating" },
  { icon: Users, value: "50K+", label: "Happy Travelers" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#destinations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slideshow with Parallax */}
      {heroImages.map((img, i) => (
        <motion.div
          key={img}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img
            src={img}
            alt="Malaysia"
            className="w-full h-full object-cover scale-110"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/70 via-[#0a0f1e]/40 to-[#0a0f1e]/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/60 via-transparent to-[#0a0f1e]/40 z-10" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4dd9c0]/10 blur-3xl z-10 animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#f5c842]/10 blur-3xl z-10"
        style={{ animation: "float 8s ease-in-out infinite reverse" }}
      />

      {/* Content */}
      <div className="relative z-20 container text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#4dd9c0] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#4dd9c0] animate-pulse" />
          Discover the Magic of Malaysia
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Explore{" "}
          <span className="font-display italic text-gradient">
            Malaysia
          </span>
          <br />
          <span className="text-white/90">Like Never Before</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From the gleaming towers of Kuala Lumpur to the pristine beaches of Langkawi,
          discover the best destinations, perfect travel timing, and smart budget tips.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={handleScrollDown}
            className="px-8 py-4 rounded-2xl font-semibold text-[#0a0f1e] bg-[#4dd9c0] hover:bg-[#3dc9b0] transition-all duration-300 glow-teal text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Exploring
          </motion.button>
          <motion.button
            onClick={() => document.querySelector("#budget")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl font-semibold text-white glass-card hover:bg-white/15 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Plan My Budget
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex items-center justify-center gap-4 md:gap-8 flex-wrap"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
              <Icon className="w-5 h-5 text-[#4dd9c0]" />
              <div className="text-left">
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentImage
                ? "w-8 h-2 bg-[#4dd9c0]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
