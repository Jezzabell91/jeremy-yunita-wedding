"use client";
import React from "react";
import Section from "./Section";
import HeroSection from "./HeroSection";
import CeremonyDetails from "./CeremonyDetails";
import AccommodationSection from "./AccommodationSection";
import WishingWellDetails from "./WishingWellDetails";
import FAQ from "./FAQ";
import PhotoCarousel from "./PhotoCarousel";

const sections = [
  { Component: CeremonyDetails, alternate: true },
  { Component: AccommodationSection, alternate: false },
  { Component: WishingWellDetails, alternate: true },
  { Component: FAQ, alternate: false },
  { Component: PhotoCarousel, alternate: true },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      {sections.map(({ Component, alternate }, index) => (
        <Section key={index} alternate={alternate}>
          <Component />
        </Section>
      ))}
    </>
  );
}
