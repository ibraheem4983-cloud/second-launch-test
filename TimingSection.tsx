import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, CloudRain, Thermometer, Droplets, Calendar } from "lucide-react";
import { klWeather, monthNames, monthFullNames, destinations } from "../data/malaysia";

export default function TimingSection() {
  const [selectedMonth, setSelectedMonth] = useState(6); // July (0-indexed)

  const weather = klWeather[selectedMonth];
  const month1Based = selectedMonth + 1;

  const bestDestinations = destinations.filter((d) =>
    d.bestMonths.includes(month1Based)
  );

  const getRainfallColor = (rainfall: number) => {
    if (rainfall < 150) return "bg-[#4dd9c0]";
    if (rainfall < 220) return "bg-[#f5c842]";
    return "bg-[#ff7b5e]";
  };

  const getRainfallLabel = (rainfall: number) => {
    if (rainfall < 150) return "Low";
    if (rainfall < 220) return "Moderate";
    return "High";
  };

  return (
    <section id="timing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1428] to-[#0a0f1e]" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#4dd9c0]/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#f5c842]/5 blur-3xl" />

      <div className="relative container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#f5c842] mb-4"
          >
            <Calendar className="w-4 h-4" />
            Travel Timing Guide
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            When to Visit{" "}
            <span className="text-gradient-gold">Malaysia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-lg"
          >
            Malaysia's tropical climate means year-round travel is possible. Select a month
            to discover the ideal destinations and weather conditions.
          </motion.p>
        </div>

        {/* Month Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6 mb-10"
        >
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {monthNames.map((m, i) => {
              const w = klWeather[i];
              return (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(i)}
                  className={`relative flex flex-col items-center gap-1 p-2 md:p-3 rounded-xl transition-all duration-300 ${
                    selectedMonth === i
                      ? "bg-[#4dd9c0]/20 border border-[#4dd9c0]/50 text-[#4dd9c0]"
                      : "hover:bg-white/10 text-white/60 hover:text-white border border-transparent"
                  }`}
                >
                  <span className="text-lg">{w.icon}</span>
                  <span className="text-xs font-medium">{m}</span>
                  {/* Rainfall bar */}
                  <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getRainfallColor(w.rainfall)}`}
                      style={{ width: `${Math.min(100, (w.rainfall / 300) * 100)}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Weather Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Weather Card */}
          <motion.div
            key={selectedMonth}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{weather.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">{monthFullNames[selectedMonth]}</h3>
                <p className="text-white/60">{weather.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-[#ff7b5e]" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Temperature</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {weather.temp.min}°–{weather.temp.max}°C
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CloudRain className="w-4 h-4 text-[#4dd9c0]" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Rainfall</span>
                </div>
                <div className="text-2xl font-bold text-white">{weather.rainfall}mm</div>
                <div className={`text-xs font-medium mt-1 ${
                  weather.rainfall < 150 ? "text-[#4dd9c0]" :
                  weather.rainfall < 220 ? "text-[#f5c842]" : "text-[#ff7b5e]"
                }`}>
                  {getRainfallLabel(weather.rainfall)} rainfall
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Humidity</span>
                </div>
                <div className="text-2xl font-bold text-white">{weather.humidity}%</div>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-[#f5c842]" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Best For</span>
                </div>
                <div className="text-sm font-medium text-white">
                  {weather.rainfall < 150 ? "All activities" :
                   weather.rainfall < 220 ? "City & highlands" : "Indoor & culture"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Best Destinations This Month */}
          <motion.div
            key={`dest-${selectedMonth}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Best Destinations in {monthFullNames[selectedMonth]}
            </h3>
            <p className="text-sm text-white/50 mb-6">
              {bestDestinations.length} destinations recommended this month
            </p>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {bestDestinations.map((dest, i) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/8 transition-colors group"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm group-hover:text-[#4dd9c0] transition-colors">
                      {dest.name}
                    </div>
                    <div className="text-xs text-white/50">{dest.region}</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {dest.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/8 text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-bold text-[#4dd9c0]">
                      ~${dest.budgetPerDay.budget}
                    </div>
                    <div className="text-xs text-white/40">per day</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Annual Rainfall Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-white mb-6">
            Annual Rainfall Overview — Kuala Lumpur
          </h3>
          <div className="flex items-end gap-2 h-32">
            {klWeather.map((w, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    i === selectedMonth ? "opacity-100" : "opacity-50"
                  } ${getRainfallColor(w.rainfall)}`}
                  style={{ height: `${(w.rainfall / 300) * 100}%` }}
                />
                <span className={`text-xs ${i === selectedMonth ? "text-white font-bold" : "text-white/40"}`}>
                  {monthNames[i]}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-4 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#4dd9c0]" />
              Low (&lt;150mm)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#f5c842]" />
              Moderate (150–220mm)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#ff7b5e]" />
              High (&gt;220mm)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
