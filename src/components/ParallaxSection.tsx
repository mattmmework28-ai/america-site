import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="
        relative 
        h-[50vh]
        overflow-hidden
        parallax-bg
        mt-28
      "
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-10 lg:px-16">
        <h2 className="text-white text-center font-light tracking-wide drop-shadow-xl uppercase font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-7xl leading-relaxed">
          Where meaningful gatherings come to life with strategic precision,
          seamless execution, and lasting impact.
        </h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
