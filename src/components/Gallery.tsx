"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Gallery images - easy to add more later
  const images = [
    "/gallery-01.jpg",
    "/gallery-02.jpg",
    "/gallery-03.jpg",
    "/gallery-04.jpg",
    "/gallery-05.jpg",
    "/gallery-06.jpg",
    "/gallery-07.jpg",
    "/gallery-08.jpg",
    "/gallery-09.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
    "/gallery-12.jpg",
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left -> next
      handleNext();
    } else if (touchEnd - touchStart > 50) {
      // Swiped right -> previous
      handlePrevious();
    }
  };

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#9d7e44" }}>
            Gallery
          </p>
          <h2 className="text-5xl font-serif font-light" style={{ color: "#b8b8b8" }}>
            Explore the <span style={{ color: "#9d7e44", fontStyle: "italic" }}>Dome</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto overflow-hidden rounded-lg" style={{ aspectRatio: "16 / 9", maxWidth: "900px" }}>
          {/* Images */}
          <div
            className="relative w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-80 transition-opacity"
              aria-label="Previous image"
              style={{ color: "#9d7e44" }}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-80 transition-opacity"
              aria-label="Next image"
              style={{ color: "#9d7e44" }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(26, 26, 26, 0.8)" }}>
              <p className="text-sm font-light" style={{ color: "#a8a8a8" }}>
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-3 h-3" : "w-2 h-2 hover:opacity-70"
                }`}
                style={{
                  backgroundColor: index === currentIndex ? "#9d7e44" : "#a8a8a8",
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
