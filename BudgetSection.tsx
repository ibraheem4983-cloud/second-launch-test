import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Hotel, UtensilsCrossed, Car, Ticket, DollarSign } from "lucide-react";
import { destinations, budgetCategories } from "../data/malaysia";

type BudgetTier = "budget" | "midrange" | "luxury";

const tierColors: Record<BudgetTier, string> = {
  budget: "#4dd9c0",
  midrange: "#f5c842",
  luxury: "#ff7b5e",
};

const tierLabels: Record<BudgetTier, string> = {
  budget: "Budget Traveler",
  midrange: "Mid-Range",
  luxury: "Luxury",
};

const tierDescriptions: Record<BudgetTier, string> = {
  budget: "Hostels, hawker food, public transport",
  midrange: "3-star hotels, casual dining, Grab rides",
  luxury: "5-star resorts, fine dining, private transfers",
};

const dailyCosts: Record<BudgetTier, { accommodation: number; food: number; transport: number; activities: number }> = {
  budget: { accommodation: 20, food: 15, transport: 8, activities: 12 },
  midrange: { accommodation: 80, food: 40, transport: 25, activities: 50 },
  luxury: { accommodation: 300, food: 120, transport: 80, activities: 150 },
};

const categoryIcons = {
  accommodation: Hotel,
  food: UtensilsCrossed,
  transport: Car,
  activities: Ticket,
};

const categoryColors = {
  accommodation: "#4dd9c0",
  food: "#f5c842",
  transport: "#ff7b5e",
  activities: "#a78bfa",
};

// Currency conversion rates (USD base)
const currencyRates: Record<string, { symbol: string; rate: number; code: string }> = {
  USD: { symbol: "$", rate: 1, code: "USD" },
  EUR: { symbol: "€", rate: 0.92, code: "EUR" },
  GBP: { symbol: "£", rate: 0.79, code: "GBP" },
  AUD: { symbol: "A$", rate: 1.53, code: "AUD" },
  SGD: { symbol: "S$", rate: 1.35, code: "SGD" },
  MYR: { symbol: "RM", rate: 4.7, code: "MYR" },
};

export default function BudgetSection() {
  const [tier, setTier] = useState<BudgetTier>("midrange");
  const [days, setDays] = useState(7);
  const [destination, setDestination] = useState("kuala-lumpur");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const dest = destinations.find((d) => d.id === destination) || destinations[0];
  const costs = dailyCosts[tier];

  const totals = useMemo(() => {
    const base = {
      accommodation: costs.accommodation * days,
      food: costs.food * days,
      transport: costs.transport * days,
      activities: costs.activities * days,
    };
    const subtotal = Object.values(base).reduce((a, b) => a + b, 0);
    const flights = tier === "budget" ? 200 : tier === "midrange" ? 400 : 1000;
    const total = subtotal + flights;
    return { ...base, flights, subtotal, total };
  }, [tier, days, costs]);

  const categoryBreakdown = [
    { key: "accommodation" as const, label: "Accommodation", value: totals.accommodation },
    { key: "food" as const, label: "Food & Drinks", value: totals.food },
    { key: "transport" as const, label: "Local Transport", value: totals.transport },
    { key: "activities" as const, label: "Activities & Tours", value: totals.activities },
  ];

  return (
    <section id="budget" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1428] to-[#0a0f1e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4dd9c0]/3 blur-3xl" />

      <div className="relative container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#4dd9c0] mb-4"
          >
            <Calculator className="w-4 h-4" />
            Budget Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Plan Your{" "}
            <span className="text-gradient">Malaysia Budget</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-lg"
          >
            Get a detailed cost breakdown for your Malaysia trip. Adjust your travel style,
            duration, and destination to see real estimates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tier Selector */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                Travel Style
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {(["budget", "midrange", "luxury"] as BudgetTier[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                      tier === t
                        ? "border-opacity-60 bg-opacity-20"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    style={
                      tier === t
                        ? {
                            borderColor: tierColors[t],
                            backgroundColor: `${tierColors[t]}20`,
                          }
                        : {}
                    }
                  >
                    <div
                      className="text-lg font-bold mb-1"
                      style={{ color: tier === t ? tierColors[t] : "rgba(255,255,255,0.6)" }}
                    >
                      {tierLabels[t]}
                    </div>
                    <div className="text-xs text-white/40">{tierDescriptions[t]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                Trip Duration
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDays(Math.max(1, days - 1))}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-white">{days}</div>
                  <div className="text-sm text-white/50">days</div>
                </div>
                <button
                  onClick={() => setDays(Math.min(30, days + 1))}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                {[3, 5, 7, 10, 14, 21].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDays(d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      days === d
                        ? "bg-[#4dd9c0] text-[#0a0f1e]"
                        : "glass text-white/60 hover:text-white"
                    }`}
                  >
                    {d}d
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selector */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                Primary Destination
              </h3>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {destinations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDestination(d.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-left transition-all ${
                      destination === d.id
                        ? "bg-[#4dd9c0]/20 border border-[#4dd9c0]/40 text-[#4dd9c0]"
                        : "glass text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <span className="text-xs font-medium truncate">{d.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Total */}
            <motion.div
              key={`${tier}-${days}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 text-center relative overflow-hidden"
              style={{ borderColor: `${tierColors[tier]}40` }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: `radial-gradient(circle at center, ${tierColors[tier]}, transparent)` }}
              />
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5" style={{ color: tierColors[tier] }} />
                  <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                    Estimated Total
                  </span>
                </div>
                <div
                  className="text-6xl font-bold mb-2"
                  style={{ color: tierColors[tier] }}
                >
                  {currencyRates[selectedCurrency].symbol}
                  {Math.round(totals.total * currencyRates[selectedCurrency].rate).toLocaleString()}
                </div>
                <div className="text-white/50 text-sm">
                  for {days} days in {dest.name} · {tierLabels[tier]}
                </div>
                <div className="mt-4 text-sm text-white/40">
                  ~{currencyRates[selectedCurrency].symbol}
                  {Math.round((totals.total / days) * currencyRates[selectedCurrency].rate)}/day average
                </div>

                {/* Currency Selector */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {Object.entries(currencyRates).map(([code, { symbol }]) => (
                    <button
                      key={code}
                      onClick={() => setSelectedCurrency(code)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                        selectedCurrency === code
                          ? "bg-white/20 text-white border border-white/40"
                          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {symbol} {code}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Breakdown */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-5">
                Cost Breakdown
              </h3>
              <div className="space-y-4">
                {categoryBreakdown.map(({ key, label, value }) => {
                  const Icon = categoryIcons[key];
                  const color = categoryColors[key];
                  const pct = Math.round((value / totals.subtotal) * 100);
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${color}20` }}
                          >
                            <Icon className="w-4 h-4" style={{ color }} />
                          </div>
                          <span className="text-sm text-white/80">{label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white">${value}</span>
                          <span className="text-xs text-white/40 ml-1">({pct}%)</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Flights */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">✈️ Estimated Flights</span>
                    <span className="text-sm font-bold text-white/70">
                      ~${totals.flights}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                Money-Saving Tips
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                {tier === "budget" && [
                  "🍜 Eat at hawker centres — meals from RM 5",
                  "🚌 Use the KL Hop-On Hop-Off bus for sightseeing",
                  "🏨 Book hostels in advance for best rates",
                  "🆓 Many temples and parks are free to enter",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span>{tip}</span>
                  </li>
                ))}
                {tier === "midrange" && [
                  "🏨 Book hotels 2–3 months ahead for 30% savings",
                  "🍽️ Mix hawker meals with restaurant dinners",
                  "🚗 Grab is cheaper than taxis — use it for longer trips",
                  "🎟️ Buy attraction combo tickets for discounts",
                ].map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
                {tier === "luxury" && [
                  "🌴 Langkawi & Tioman offer the best luxury resorts",
                  "🍷 Many 5-star hotels have happy hour deals",
                  "✈️ Fly into KLIA for most international connections",
                  "🏌️ Golf, spa, and private tours are excellent value",
                ].map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
