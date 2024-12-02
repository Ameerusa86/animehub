"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "./components/Loading";
import FeaturedSection from "./components/FeaturedSection";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("/api/marvel/characters?limit=12");
        const data = await response.json();

        console.log("API Response:", data); // Debug the API response

        if (data?.data?.results) {
          setCharacters(data.data.results);
        } else {
          console.error("Invalid API response:", data);
        }
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-black via-gray-800 to-gray-900 h-[60vh] flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/Images/marvel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Marvel Saga Chronicles
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Dive into the Marvel Universe and explore your favorite heroes,
            villains, and stories.
          </p>
          <button className="px-6 py-3 bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Character Grid */}
      <FeaturedSection title="Featured Characters" items={characters} />

      {/* Call to Action */}
      <section className="bg-red-500 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Want to Create Your Own Marvel Story?
        </h2>
        <p className="mb-6">
          Use our custom storytelling tool to combine characters and events into
          your own Marvel saga.
        </p>
        <button className="px-6 py-3 bg-white text-red-500 font-bold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
