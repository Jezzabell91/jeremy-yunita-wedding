import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const HeroOverlay = () => {
  const [daysUntil, setDaysUntil] = useState<number>(0);

  useEffect(() => {
    const calculateDaysUntil = () => {
      // Create date objects for current time and wedding date in AEST
      const now = new Date();
      const weddingDate = new Date("2025-05-05T00:00:00+10:00"); // AEST timezone offset

      // Calculate the difference in milliseconds
      const diffTime = weddingDate.getTime() - now.getTime();

      // Convert to days and round down
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setDaysUntil(diffDays);
    };

    // Calculate initially
    calculateDaysUntil();

    // Update every day
    const timer = setInterval(calculateDaysUntil, 86400000); // 24 hours in milliseconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start sm:items-center justify-center">
      <div className="text-center text-white p-8 bg-black bg-opacity-20 rounded-lg backdrop-blur-sm border border-white border-opacity-20 mt-[20vh] sm:mt-0">
        <div className="flex justify-center mb-6">
          <Heart className="text-pink-300 w-12 h-12" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif mb-6">
          Jeremy & Yunita
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-6">
          Are getting married in {daysUntil} {daysUntil === 1 ? "day" : "days"}!
        </p>
        <p className="text-xl; sm:text-2xl mb-6 font-light">
          Monday, 5th May 2025
        </p>
      </div>
    </div>
  );
};

export default HeroOverlay;
