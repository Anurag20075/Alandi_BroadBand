// import { motion } from "framer-motion";
// import { ArrowRight } from "@phosphor-icons/react";
// import { fadeUp, staggerContainer, scaleIn } from "../lib/animations";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-[#05070a] relative overflow-hidden flex items-center"
//     >
//       {/* Dot grid background */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10 pt-20">
//         {/* Text Side */}
//         <motion.div
//           className="lg:col-span-6 flex flex-col items-start text-left"
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             variants={fadeUp}
//             className="text-6xl sm:text-7xl lg:text-[6rem] tracking-tighter leading-[0.85] font-bold text-white mb-8"
//           >
//             Fast. Reliable.
//             <br />
//             <span className="text-accent underline decoration-white/10 underline-offset-8">
//               Always Connected.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="text-lg sm:text-xl text-gray-400 max-w-[45ch] leading-relaxed mb-12 font-medium"
//           >
//             High-speed WiFi broadband for homes and businesses across the city.
//             Experience the gold standard of internet.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="flex flex-col sm:flex-row gap-5 w-full"
//           >
//             <motion.button
//               whileHover={{ y: -4 }}
//               whileTap={{ y: 0 }}
//               className="h-16 px-12 rounded-2xl bg-accent text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent-dark transition-all shadow-2xl text-sm"
//             >
//               View Plans
//               <ArrowRight weight="bold" />
//             </motion.button>
//             <button className="h-16 px-12 rounded-2xl border-2 border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all text-sm">
//               Check Coverage
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Image Side */}
//         <motion.div className="lg:col-span-6" variants={scaleIn} initial="hidden" animate="visible">
//           <img
//             src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
//             alt="Fiber network visual"
//             className="rounded-[2.5rem] w-full shadow-2xl border border-white/5 opacity-80"
//             crossOrigin="anonymous"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, WifiHigh, ShieldCheck, Speedometer } from "@phosphor-icons/react";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Hero() {
  // Optional: Parallax effect for the image container
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#020408] relative overflow-hidden flex items-center pt-20"
    >
      {/* 1. Enhanced Background: Animated Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      {/* 2. Refined Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Side */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Micro-badge */}
          <motion.div 
            variants={fadeUp}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Now Live in Alandi Devachi
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] font-bold text-white mb-8"
          >
            Fast. Reliable. <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Always Online.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-400 max-w-[50ch] leading-relaxed mb-12"
          >
            Experience the next generation of fiber-optic connectivity. 
            Speeds up to <span className="text-white font-semibold">1 Gbps</span> with 
            zero downtime and local 24/7 support.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#0284c7" }}
              whileTap={{ scale: 0.98 }}
              className="h-16 px-10 rounded-2xl bg-accent text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(14,165,233,0.3)] transition-all text-sm"
            >
              Explore Plans
              <ArrowRight weight="bold" className="text-lg" />
            </motion.button>
            
            <motion.button 
              whileHover={{ border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.05)" }}
              className="h-16 px-10 rounded-2xl border border-white/10 text-white font-bold uppercase tracking-widest transition-all text-sm"
            >
              Check Coverage
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Side: "Glass & Depth" Concept */}
        <motion.div 
          className="lg:col-span-5 relative"
          style={{ y: y1 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Visual Container */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent z-10 opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
              alt="Fiber Network"
              className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
            />
            
            {/* Overlaying Info Card (Glassmorphism) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 z-20"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 uppercase tracking-tighter">Current Latency</span>
                  <span className="text-2xl font-mono font-bold text-green-400 tracking-tighter">2ms — Ultra Low</span>
                </div>
                <Speedometer size={40} weight="duotone" className="text-accent" />
              </div>
            </motion.div>
          </div>

          {/* Decorative Back Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 -right-4 w-24 h-24 bg-blue-500/20 border border-white/10 backdrop-blur-md rounded-2xl rotate-12 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}