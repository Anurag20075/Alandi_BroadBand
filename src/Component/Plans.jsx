import { motion } from "framer-motion";
import PlanCard from "./PlanCard";

const PLANS_DATA = [
  {
    title: "Basic",
    subtitle: "Perfect for home use",
    speed: "50",
    price: "499",
    features: ["Unlimited Data", "Up to 3 Devices", "Standard Router"],
  },
  {
    title: "Standard",
    subtitle: "Great for families",
    speed: "200",
    price: "799",
    recommended: true,
    features: [
      "Unlimited Data",
      "Up to 8 Devices",
      "Wi-Fi 6 Router",
      "Priority Support",
    ],
  },
  {
    title: "Pro",
    subtitle: "Small business hero",
    speed: "1000",
    price: "1299",
    features: [
      "Symmetric Gigabit",
      "Unlimited Devices",
      "Dedicated IP Ready",
      "VIP Business Support",
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-32 bg-[#f9fafb] px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-black">
            Simple Plans. No Hidden Fees.
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PLANS_DATA.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
            >
              <PlanCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}