import { motion } from "framer-motion";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#05070a] px-6 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <h2 className="text-5xl font-bold tracking-tight mb-12">
            Get in Touch
          </h2>

          <div className="space-y-8 mb-12">
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 20 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Phone size={32} weight="duotone" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
                  Call Us
                </p>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight">
                  Support Lines Available 24/7
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "spring", stiffness: 80, damping: 20 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Envelope size={32} weight="duotone" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
                  Email Us
                </p>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight">
                  service@alandibroadband.com
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white/5 p-8 rounded-[2rem] border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin size={24} className="text-accent" />
              <span className="font-bold text-lg">Main Office</span>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              Alandi Devachi, Pune Central, Maharashtra.
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          className="space-y-6 bg-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] text-black shadow-2xl relative z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-bold mb-8 tracking-tighter">
            Request a Callback
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                FullName
              </label>
              <input
                type="text"
                className="w-full h-14 bg-gray-50 rounded-xl px-5 border border-black/5 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                Phone
              </label>
              <input
                type="text"
                className="w-full h-14 bg-gray-50 rounded-xl px-5 border border-black/5 outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">
              Area Name / PIN Code
            </label>
            <input
              type="text"
              className="w-full h-14 bg-gray-50 rounded-xl px-5 border border-black/5 outline-none focus:border-accent transition-colors"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-5 rounded-[1.5rem] bg-accent text-white font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all text-sm"
          >
            Request Callback
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}