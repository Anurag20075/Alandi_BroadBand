import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import SpotlightCard from "./SpotlightCard";

export default function PlanCard({
  title,
  speed,
  price,
  features,
  recommended = false,
  subtitle = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <SpotlightCard
        className={`flex flex-col h-full transition-all duration-500 ${
          recommended
            ? "border-accent/40 ring-1 ring-accent/10 lg:scale-105 shadow-2xl z-10"
            : ""
        }`}
      >
        {recommended && (
          <div className="absolute top-4 right-6 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-accent/20">
            Most Popular
          </div>
        )}

        <div className="mb-8">
          <h4 className="text-gray-500 text-sm font-bold mb-1 uppercase tracking-widest">
            {title}
          </h4>
          <p className="text-xs text-gray-400 mb-4">{subtitle}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight">{speed}</span>
            <span className="text-gray-400 font-medium tracking-tight italic">
              Mbps
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-10 flex-grow">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle
                weight="fill"
                className="text-accent w-4 h-4 flex-shrink-0"
              />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-black/5">
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold">₹{price}</span>
            <span className="text-gray-400 text-sm font-medium">/month</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className={`w-full py-4 rounded-2xl font-bold transition-all ${
              recommended
                ? "bg-accent text-white shadow-xl shadow-accent/30"
                : "bg-[#09090b] text-white hover:bg-black"
            }`}
          >
            Get Started
          </motion.button>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}