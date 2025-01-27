import React from "react";
import Image from "next/image";
import HeroOverlay from "./HeroOverlay";

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/images/hero_desktop.jpg"
          alt="Jeremy and Yunita"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/images/hero_mobile.jpg"
          alt="Jeremy and Yunita"
          fill
          className="object-cover block md:hidden"
          priority
        />

        <HeroOverlay />
      </div>
    </div>
  );
};

export default HeroSection;
