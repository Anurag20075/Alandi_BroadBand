// import { motion } from "framer-motion";

// export default function Coverage() {
//   return (
//     <motion.section
//       id="coverage"
//       className="py-24 bg-accent px-6"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-4xl mx-auto text-center text-white">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ type: "spring", stiffness: 80, damping: 20 }}
//           className="text-4xl font-bold mb-8 tracking-tight"
//         >
//           Check If We Cover Your Area
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, type: "spring", stiffness: 80, damping: 20 }}
//           className="flex flex-col sm:flex-row gap-4 bg-white/10 p-3 rounded-3xl sm:rounded-full backdrop-blur-md border border-white/20"
//         >
//           <input
//             type="text"
//             placeholder="Enter your area or PIN code"
//             className="flex-1 bg-transparent border-none px-6 py-4 sm:py-0 text-white placeholder:text-white/50 outline-none text-lg text-center sm:text-left"
//           />
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-accent px-10 py-5 rounded-2xl sm:rounded-full font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl text-sm"
//           >
//             Check Availability
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }