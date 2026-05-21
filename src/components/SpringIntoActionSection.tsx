"use client";

import React from "react";
import { DecoratedTitle } from "./DecoratedTitle";

interface SpringIntoActionSectionProps {}

export const SpringIntoActionSection: React.FC<
  SpringIntoActionSectionProps
> = () => {
  return (
    <section className="border-y border-black/10 bg-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-2xl min-w-0 text-center">
        <div className="flex min-w-0 flex-col items-center">
          <DecoratedTitle size="md" as="h2">
            <span className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
              Built on Heritage. Designed for Connection
            </span>
          </DecoratedTitle>
        </div>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          <p>
            America has always been shaped by visionaries, communities, and
            moments shared together. From historic landmarks to meaningful
            celebrations, gathering has long been part of the story.
          </p>

          <p>
            At MMEink and our family of hospitality, catering, entertainment,
            and creative partners, we believe exceptional events are built with
            purpose, thoughtful execution, and spaces that inspire connection.
          </p>

          <p>
            Whether hosting distinguished corporate functions, private
            celebrations, elegant receptions, or large-scale productions, our
            teams create experiences rooted in craftsmanship, elevated service,
            and memorable hospitality.
          </p>

          <p>
            This season, we celebrate the places, people, and traditions that
            continue to bring us together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpringIntoActionSection;
