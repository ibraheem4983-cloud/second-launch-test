import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Clock, MapPin, ChevronRight } from "lucide-react";
import { destinations, type Destination, monthNames } from "../data/malaysia";

const regions = ["All", "Peninsular", "Islands", "Borneo"] as const;

function DestinationCard({
  dest,
  index,
  onClick,
}: {
  dest: Destination;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={revealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl glass-card hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Region Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold glass text-white/90">
              {dest.region}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass">
            <Star className="w-3 h-3 text-[#f5c842] fill-[#f5c842]" />
            <span className="text-xs font-bold text-white">{dest.rating}</span>
          </div>

          {/* Duration */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#4dd9c0]" />
            <span className="text-xs text-white/80">{dest.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#4dd9c0] transition-colors">
                {dest.name}
              </h3>
              <p className="text-xs text-[#f5c842] font-medium">{dest.tagline}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#4dd9c0] group-hover:translate-x-1 transition-all mt-1" />
          </div>

          <p className="text-sm text-white/60 line-clamp-2 mb-4 leading-relaxed">
            {dest.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {dest.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-lg text-xs bg-white/8 text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Budget Preview */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-white/50">Budget from</span>
            <span className="text-sm font-bold text-[#4dd9c0]">
              ~USD {dest.budgetPerDay.budget}/day
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DestinationModal({
  dest,
  onClose,
}: {
  dest: Destination;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#4dd9c0]" />
                <span className="text-sm text-white/80">{dest.region}, Malaysia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{dest.name}</h2>
              <p className="text-[#f5c842] font-medium mt-1">{dest.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <p className="text-white/80 leading-relaxed mb-8 text-base">{dest.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Highlights */}
              <div>
                <h3 className="text-sm font-semibold text-[#4dd9c0] uppercase tracking-wider mb-3">
                  Top Highlights
                </h3>
                <ul className="space-y-2">
                  {dest.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4dd9c0] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-sm font-semibold text-[#f5c842] uppercase tracking-wider mb-3">
                  Activities
                </h3>
                <ul className="space-y-2">
                  {dest.activities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best Months */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Best Months to Visit
              </h3>
              <div className="flex flex-wrap gap-2">
                {monthNames.map((m, i) => (
                  <span
                    key={m}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      dest.bestMonths.includes(i + 1)
                        ? "bg-[#4dd9c0]/20 text-[#4dd9c0] border border-[#4dd9c0]/30"
                        : "bg-white/5 text-white/30 border border-white/10"
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Daily Budget Estimate
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {(["budget", "midrange", "luxury"] as const).map((tier) => (
                  <div key={tier} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-xs text-white/50 capitalize mb-1">{tier}</div>
                    <div className="text-lg font-bold text-white">
                      ~${dest.budgetPerDay[tier]}
                    </div>
                    <div className="text-xs text-white/40">per day</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function DestinationsSection() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const filtered = activeRegion === "All"
    ? destinations
    : destinations.filter((d) => d.region === activeRegion);

  return (
    <section id="destinations" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1428] to-[#0a0f1e]" />

      <div className="relative container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#4dd9c0] mb-4"
          >
            <MapPin className="w-4 h-4" />
            Destination Explorer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Best Places to{" "}
            <span className="text-gradient">Visit in Malaysia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-lg"
          >
            From ancient rainforests to glittering skylines — explore Malaysia's most
            breathtaking destinations.
          </motion.p>
        </div>

        {/* Region Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeRegion === region
                  ? "bg-[#4dd9c0] text-[#0a0f1e] glow-teal"
                  : "glass text-white/70 hover:text-white hover:bg-white/15"
              }`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                index={i}
                onClick={() => setSelectedDest(dest)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      {selectedDest && (
        <DestinationModal dest={selectedDest} onClose={() => setSelectedDest(null)} />
      )}
    </section>
  );
}
