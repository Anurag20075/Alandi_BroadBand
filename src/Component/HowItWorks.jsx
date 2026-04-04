// import { motion } from "framer-motion";
// import { Globe, RocketLaunch, Devices } from "@phosphor-icons/react";

// const STEPS = [
//   {
//     step: "01",
//     icon: Globe,
//     title: "Choose Your Plan",
//     desc: "Select the speed that fits your daily requirement.",
//   },
//   {
//     step: "02",
//     icon: RocketLaunch,
//     title: "We Install in 24 Hours",
//     desc: "Our technicians set up your high-speed link fast.",
//   },
//   {
//     step: "03",
//     icon: Devices,
//     title: "Enjoy Fast Internet",
//     desc: "Connect your devices and experience zero latency.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="py-32 bg-white px-6">
//       <div className="max-w-[1400px] mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ type: "spring", stiffness: 80, damping: 20 }}
//           className="text-4xl font-bold tracking-tight mb-20 text-black"
//         >
//           How It Works
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//           {STEPS.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{
//                 delay: i * 0.2,
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 20,
//               }}
//               className="relative group"
//             >
//               <div className="text-8xl font-black text-black/5 absolute -top-12 left-1/2 -translate-x-1/2 group-hover:text-accent/10 transition-colors uppercase italic tracking-tighter">
//                 {item.step}
//               </div>
//               <div className="relative z-10">
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <item.icon
//                     size={56}
//                     weight="duotone"
//                     className="text-accent mx-auto mb-8"
//                   />
//                 </motion.div>
//                 <h3 className="text-2xl font-bold mb-4 tracking-tight text-zinc-900">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 max-w-[20ch] mx-auto">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Globe, RocketLaunch, Devices } from "@phosphor-icons/react";

const STEPS = [
  {
    step: "01",
    icon: Globe,
    title: "Choose Your Plan",
    desc: "Select the speed that fits your daily requirement.",
  },
  {
    step: "02",
    icon: RocketLaunch,
    title: "We Install in 24 Hours",
    desc: "Our technicians set up your high-speed link fast.",
  },
  {
    step: "03",
    icon: Devices,
    title: "Enjoy Fast Internet",
    desc: "Connect your devices and experience zero latency.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="text-4xl font-bold tracking-tight mb-20 text-black"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {STEPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              whileHover={{ y: -10 }}
              className="group relative cursor-default"
            >
              {/* Card container */}
              <div className="relative z-10 flex flex-col items-center rounded-3xl border border-black/5 bg-white p-10 pt-12 pb-10 transition-shadow duration-500 ease-out shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08),0_20px_60px_-15px_rgba(14,165,233,0.12)]">

                {/* Accent glow underneath */}
                <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 h-16 w-3/4 rounded-[50%] bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110" />

                {/* Background step number */}
                <div className="text-8xl font-black text-black/[0.03] absolute top-2 left-1/2 -translate-x-1/2 group-hover:text-accent/[0.07] transition-colors duration-500 uppercase italic tracking-tighter select-none">
                  {item.step}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 mb-8"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/5 border border-accent/10 transition-colors duration-500 group-hover:bg-accent/10 group-hover:border-accent/20">
                    <item.icon
                      size={40}
                      weight="duotone"
                      className="text-accent transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold mb-4 tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="relative z-10 text-gray-500 max-w-[22ch] mx-auto leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}