import React, { useState, useRef } from "react";
import Image from "next/image";
import { BookOpen as ImageIcon } from "lucide-react";
import { galleryItems } from "./Gallery";

const PhotoCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);
  const containerRef = useRef(null);

  const handleImageLoad = (index: number) => {
    setLoadedIndexes((prev) => {
      if (prev.includes(index)) return prev;
      return [...prev, index];
    });
  };

  const allImagesLoaded = loadedIndexes.length === galleryItems.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const offset = touchEnd - touchStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const minSwipeDistance = 50;

    if (Math.abs(dragOffset) > minSwipeDistance) {
      if (dragOffset > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }

    setDragOffset(0);
  };

  const getVisibleImages = () => {
    const visibleCount = window.innerWidth >= 640 ? 2 : 1;
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % galleryItems.length;
      images.push({ ...galleryItems[index], index });
    }
    return images;
  };

  const handlePrevious = () => {
    setStartIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <ImageIcon className="w-8 h-8 text-pink-400 mr-4" />
          <h2 className="text-3xl font-serif text-gray-800">Our Story</h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {!allImagesLoaded && (
            <div className="w-full h-96 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-400 border-t-transparent"></div>
            </div>
          )}

          {allImagesLoaded && (
            <div className="block sm:hidden">
              <div
                className="w-full transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: isDragging
                    ? `translateX(${dragOffset}px)`
                    : "translateX(0)",
                }}
              >
                <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
                  <div className="aspect-[9/16] relative">
                    <Image
                      src={galleryItems[startIndex].imageUrl}
                      alt={`Gallery image ${startIndex + 1}`}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20">
                      <p className="absolute bottom-0 text-white p-4 text-sm w-full bg-black bg-opacity-50 backdrop-blur-sm">
                        {galleryItems[startIndex].text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {allImagesLoaded && (
            <div className="hidden sm:grid sm:grid-cols-2 gap-4 md:gap-8">
              {getVisibleImages().map((item, index) => (
                <div
                  key={`${startIndex}-${index}`}
                  className="overflow-hidden rounded-lg border-4 border-white shadow-lg"
                >
                  <div className="aspect-[9/16] relative">
                    <Image
                      src={item.imageUrl}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20">
                      <p className="absolute bottom-0 text-white p-4 text-sm w-full bg-black bg-opacity-50 backdrop-blur-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {allImagesLoaded && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-pink-400 hover:bg-opacity-100 transition-all duration-300 shadow-lg z-10"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-pink-400 hover:bg-opacity-100 transition-all duration-300 shadow-lg z-10"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="hidden">
        {galleryItems.map((item, index) => (
          <Image
            key={`preload-${index}`}
            src={item.imageUrl}
            alt={`Preload ${index + 1}`}
            width={100}
            height={100}
            priority={true}
            onLoad={() => handleImageLoad(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
