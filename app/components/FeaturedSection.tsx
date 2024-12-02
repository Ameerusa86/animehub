"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "./Loading";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface FeaturedSectionProps {
  title: string;
  items: Character[];
}

export default function FeaturedSection({
  title,
  items,
}: FeaturedSectionProps) {
  const [loading, setLoading] = useState(true);

  // Update loading state based on items prop
  useEffect(() => {
    if (items && items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  // Background animation
  const backgroundAnimation = {
    background: [
      "linear-gradient(90deg, rgba(0.0.0.0,1) 0%, rgba(220,38,38,1) 100%)",
      "linear-gradient(90deg, rgba(220,38,38,1) 0%, rgba(0.0.0.0,1) 100%)",
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  return (
    <motion.section
      className="py-12 px-6 relative overflow-hidden bg-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={backgroundAnimation}
        style={{ backgroundSize: "300% 300%" }}
      />
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-center text-light text-shadow-lg">
          {title}
        </h2>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        )}

        {/* Grid */}
        {!loading && items.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="card relative group"
                whileHover={{ scale: 1.05, translateY: -5 }}
              >
                {/* Image */}
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:brightness-75 transition"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary group-hover:text-yellow-400 transition">
                    {item.name}
                  </h3>
                  <p className="text-light mt-2 text-sm group-hover:text-gray-200 transition">
                    Explore the adventures of {item.name}.
                  </p>
                  <button className="btn btn-primary relative mt-4 overflow-hidden">
                    <span className="absolute inset-0 bg-white opacity-20 group-hover:scale-150 transition-transform"></span>
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
