import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { WifiHigh, List, X } from "@phosphor-icons/react";
import { slideDown } from "../lib/animations";

const NAV_LINKS = ["Home", "Plans", "About", "Coverage", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const prevScrollY = useRef(0);

  useEffect(() => {
    return scrollY.onChange((current) => {
      const diff = current - prevScrollY.current;

      if (current > 100) {
        if (diff > 0) setVisible(false);
        else setVisible(true);
      } else {
        setVisible(true);
      }

      if (current > 50) setScrolled(true);
      else setScrolled(false);

      prevScrollY.current = current;
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="font-semibold text-xl tracking-tight flex items-center gap-2 group cursor-pointer">
        <div className="relative flex items-center justify-center">
          <WifiHigh
            weight="bold"
            className="text-accent w-7 h-7 relative z-10 transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent via-sky-300 to-blue-500 blur-xl rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out" />
        </div>
        <span
          className={`font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Alandi
          <span
            className={`font-light ${
              scrolled ? "text-gray-400" : "text-white/60"
            }`}
          >
            Broadband
          </span>
        </span>
      </div>

      {/* Desktop Links */}
      <div
        className={`hidden lg:flex gap-10 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
          scrolled ? "text-gray-500/80 px-1" : "text-white/80"
        }`}
      >
        {NAV_LINKS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative transition-colors group px-1 ${
              scrolled ? "hover:text-black" : "hover:text-white"
            }`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* <button className="hidden sm:block bg-accent text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[0.98] active:scale-[0.95] transition-all shadow-lg hover:shadow-accent/50">
          Check Availability
        </button> */}

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? "text-black hover:bg-black/5"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-20 left-6 right-6 p-8 bg-white border border-black/5 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 lg:hidden z-50 text-black overflow-hidden shadow-accent/10"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter border-b border-black/5 pb-2"
              >
                {item}
              </a>
            ))}
            {/* <button className="w-full bg-accent text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-accent/20 mt-4">
              Check Availability
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}