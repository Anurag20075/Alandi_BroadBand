import { motion } from "framer-motion";
import {
  WifiHigh,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const EXPLORE_LINKS = [
  { label: "Plans", href: "#plans" },
  { label: "Coverage", href: "#coverage" },
  { label: "About", href: "#about" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "#contact" },
  { label: "Contact", href: "#contact" },
  { label: "View Plans", href: "#plans" },
];

const SOCIAL_ICONS = [
  { Icon: FacebookLogo, label: "Facebook" },
  { Icon: InstagramLogo, label: "Instagram" },
  { Icon: WhatsappLogo, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pt-24 pb-12 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between mb-20 gap-16">
          {/* Brand */}
          <motion.div
            className="max-w-xs mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="font-black text-2xl tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-6">
              <WifiHigh weight="bold" className="text-accent w-8 h-8" />
              Alandi
              <span className="text-gray-400 font-light">Broadband</span>
            </div>
            <p className="text-gray-500 mb-8 font-medium leading-relaxed">
              The gold standard for connectivity in Alandi. Delivering the future
              of fiber internet to your doorstep.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {SOCIAL_ICONS.map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-2 gap-16 font-bold text-[10px] tracking-widest uppercase text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-black mb-2 text-xs">Explore</p>
              {EXPLORE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-black mb-2 text-xs">Support</p>
              {SUPPORT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2026 Alandi City Broadband. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}