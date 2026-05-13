"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionItem } from "./types";
import { DecoratedTitle } from "../DecoratedTitle";

interface VenueCardProps {
  item: SectionItem;
  isImageLeft: boolean;
}

const DEFAULT_SECTION_LOGO_HEIGHT = "h-12 sm:h-14 lg:h-16";

export const VenueCard: React.FC<VenueCardProps> = ({ item, isImageLeft }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  const normalizedIndex = currentImageIndex % item.images.length;

  useEffect(() => {
    if (item.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  useEffect(() => {
    const nextIndex = (normalizedIndex + 1) % item.images.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new Image();
      img.src = item.images[nextIndex];
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, nextIndex]));
      };
    }
  }, [normalizedIndex, item.images, loadedImages]);

  const goToImage = (idx: number) => {
    setCurrentImageIndex(idx);
  };

  const logoHeight = item.logoHeight || DEFAULT_SECTION_LOGO_HEIGHT;

  const contentSection = (
    <div className="flex w-full flex-col justify-center bg-white p-6 sm:p-8 lg:p-10 xl:p-12">
      <a className="mb-4 lg:mb-6 block" href={item.buttonLink}>
        {item.logo ? (
          <img
            src={item.logo}
            alt="Venue logo"
            className={`w-auto object-contain ${logoHeight}`}
          />
        ) : (
          <DecoratedTitle size="md" align="left" as="h3">
            <span className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
              {item.logo_text}
            </span>
          </DecoratedTitle>
        )}
      </a>

      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
        {item.description}
      </p>

      <a
        href={item.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block w-fit bg-button-gradient px-6 py-2.5 text-sm font-semibold text-dark-black uppercase"
      >
        {item.buttonText}
      </a>
    </div>
  );

  const imageSection = (
    <div className="relative h-[300px] w-full sm:h-[350px] lg:h-full lg:min-h-[400px]">
      <div className="relative h-full overflow-hidden bg-white">
        <AnimatePresence>
          <motion.img
            key={normalizedIndex}
            src={item.images[normalizedIndex]}
            className="absolute inset-0 h-full w-full object-cover"
            alt={`Venue - Image ${normalizedIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          />
        </AnimatePresence>

        {item.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {item.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === normalizedIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {isImageLeft ? (
        <>
          <div className="order-1 lg:order-2">{contentSection}</div>
          <div className="order-2 lg:order-1 lg:pr-[50px]">{imageSection}</div>
        </>
      ) : (
        <>
          <div className="order-1 lg:order-1">{contentSection}</div>
          <div className="order-2 lg:order-2 lg:pl-[120px]">{imageSection}</div>
        </>
      )}
    </div>
  );
};

export default VenueCard;
