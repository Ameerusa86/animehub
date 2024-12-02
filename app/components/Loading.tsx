"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.img
      src="/Images/marvel-logo.png"
      alt="Marvel Logo"
      className="w-32 h-32"
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      }}
    />
  );
}
