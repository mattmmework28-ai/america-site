"use client";

import React from "react";
import { DecoratedTitle } from "./DecoratedTitle";

interface SpringIntoActionSectionProps {}

export const SpringIntoActionSection: React.FC<
  SpringIntoActionSectionProps
> = () => {
  return (
    <section className="border-y border-black/10 bg-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Celebrate Summer in Style
          </p>

          <DecoratedTitle size="lg" as="h2" className="mt-4">
            <span className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[2rem]">
              Summer Has Arrived
            </span>
          </DecoratedTitle>
        </div>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          <p>
            Where meaningful gatherings are executed with strategy and
            precision. Through trusted partnerships and streamlined planning, we
            ensure every event is delivered seamlessly, producing measurable
            impact and lasting impressions.
          </p>

          <p>
            The season of connection has arrived. Let&apos;s begin planning
            elevated experiences designed to bring people together beautifully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpringIntoActionSection;
