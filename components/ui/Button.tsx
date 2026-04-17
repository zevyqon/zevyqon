"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="px-6 py-3 bg-primary text-white rounded-xl shadow-glow hover:shadow-glowBlue transition-all"
    >
      {children}
    </motion.button>
  );
}
