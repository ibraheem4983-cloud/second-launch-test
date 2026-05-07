import { motion } from "framer-motion";
import { MapPin, Clock, Wallet, Bot, Star, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    color: "#4dd9c0",
    title: "Destination Explorer",
    description:
      "Discover 9+ of Malaysia's most breathtaking destinations with rich imagery, detailed guides, and insider highlights.",
  },
  {
    icon: Clock,
    color: "#f5c842",
    title: "Travel Timing Guide",
    description:
      "Interactive monthly weather calendar showing the best time to visit each destination, rainfall, and seasonal festivals.",
  },
  {
    icon: Wallet,
    color: "#ff7b5e",
    title: "Smart Budget Calculator",
    description:
      "Get detailed cost breakdowns for accommodation, food, transport, and activities across three budget tiers.",
  },
  {
    icon: Bot,
    color: "#a78bfa",
    title: "AI Travel Assistant",
    description:
      "Chat with our AI-powered Malaysia travel expert for personalized recommendations, tips, and trip planning help.",
  },
  {
    icon: Star,
    color: "#4dd9c0",
    title: "Curated Experiences",
    description:
      "Hand-picked highlights, local tips, and must-do activities for every destination, verified by travel experts.",
  },
  {
    icon: Shield,
    color: "#f5c842",
    title: "Trusted Information",
    description:
      "Up-to-date travel information, visa requirements, safety tips, and practical advice for a smooth Malaysia trip.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] to-[#0a0f1e]" />

      {/* Decorative background image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/penang-street_e65f8ca1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Explore Malaysia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-xl mx-auto text-lg"
          >
            Tour Malaysia is your all-in-one travel companion, combining beautiful visuals
            with practical planning tools.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4dd9c0] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass-card rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4dd9c0]/10 via-transparent to-[#f5c842]/10" />
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Malaysia?
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Start planning your dream Malaysian adventure today. Use our AI assistant
              for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => document.querySelector("#destinations")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-2xl font-semibold text-[#0a0f1e] bg-[#4dd9c0] hover:bg-[#3dc9b0] transition-all glow-teal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Destinations
              </motion.button>
              <motion.button
                onClick={() => document.querySelector("#budget")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-2xl font-semibold text-white glass hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Calculate Budget
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
