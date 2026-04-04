import { motion } from "framer-motion";
import { RocketLaunch, ChartLineUp, Headset, Clock } from "@phosphor-icons/react";

const FEATURES = [
  {
    icon: RocketLaunch,
    title: "Ultra-Fast Speeds",
    desc: "Experience the true power of fiber with synchronous download and upload speeds up to 1 Gbps.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: ChartLineUp,
    title: "99.9% Uptime",
    desc: "Our redundant infrastructure ensures your connection stays rock-solid, even during peak hours.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Talk to real humans in Alandi. Our local technical experts are just a phone call away.",
    color: "from-orange-500 to-yellow-400",
  },
  {
    icon: Clock,
    title: "Quick Install",
    desc: "Don't wait weeks for a technician. Get connected with professional setup in under 24 hours.",
    color: "from-purple-500 to-pink-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-slate-50/50 px-6 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Superior Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Built for the next generation <br className="hidden md:block" /> of the internet.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg max-w-md pb-1"
          >
            We've invested in the most advanced fiber-optic network to bring world-class connectivity to Alandi.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Number Index */}
              <span className="absolute top-8 right-10 text-slate-100 font-black text-5xl group-hover:text-accent/10 transition-colors duration-500">
                0{i + 1}
              </span>

              {/* Icon with Gradient Backdrop */}
              <div className="relative mb-8 inline-block">
                <div className={`absolute inset-0 blur-xl opacity-20 bg-gradient-to-br ${feature.color} scale-150 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
                  <feature.icon
                    size={32}
                    weight="duotone"
                    className="text-accent transition-transform duration-500 group-hover:rotate-[10deg]"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                {feature.desc}
              </p>

              {/* Bottom Decorative Bar */}
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-700 ease-in-out`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}