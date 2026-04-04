import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      className={`relative group overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 transition-shadow hover:shadow-xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.08), transparent 80%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}