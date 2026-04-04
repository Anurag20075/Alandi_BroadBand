import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, Headphones } from "lucide-react"; // Optional: npm i lucide-react

export default function About() {
  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Ultra-fast Fiber Speeds" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "99.9% Network Uptime" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 Local Support" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Visual Assets */}
        <motion.div
          className="relative group order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
          
          {/* Main Image Container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-zinc-100 border-8 border-white">
            <img
              src="https://i.pinimg.com/1200x/75/6a/a3/756aa3c54d6e62e9ea445745763992b2.jpg"
              alt="Our Infrastructure"
              className="w-full h-full object-cover aspect-[4/5] scale-105 group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-8 left-8 bg-black text-white p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-4xl font-bold italic mb-1">10+</p>
              <p className="text-[10px] uppercase tracking-widest font-medium opacity-80 leading-tight">
                Years of Digital <br /> Excellence
              </p>
            </motion.div>
          </div>

          {/* Background Outline Box */}
          <div className="absolute top-8 left-8 w-full h-full border-2 border-accent/20 rounded-[2rem] -z-0 translate-x-4 translate-y-4" />
        </motion.div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4 bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Our Story
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
              Redefining <span className="text-accent">Connectivity</span> in Alandi.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Alandi City Broadband isn't just about cables and routers. We are a locally grown 
              digital backbone built to empower the community of Alandi Devachi. We bridge the 
              gap between your home and the world with seamless fiber-to-the-home technology.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <div className="text-accent bg-accent/5 p-1 rounded-md">{item.icon}</div>
                  {item.text}
                </motion.li>
              ))}
            </ul>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-10">
              <motion.div
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="text-4xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-accent transition-colors">5k+</div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Active Users
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="text-4xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-accent transition-colors">200+</div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Local Partners
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}