import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="
        relative 
        h-[50vh]
        overflow-hidden
        parallax-bg
      "
    >
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        preload="metadata"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex h-full items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full space-y-4 text-center [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.45))]">
          <p className="mx-auto w-full max-w-[86rem] font-primary text-xl font-light uppercase leading-relaxed tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Where timeless gatherings are brought to life through history,
            craftsmanship, connection, and unforgettable experiences.
          </p>
          <p className="mx-auto w-full max-w-7xl font-primary text-[1.2rem] font-light leading-relaxed tracking-wide text-white sm:text-[1.35rem] md:text-[1.5rem] lg:text-[1.8rem]">
            Honoring tradition. Creating moments. Bringing people together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
