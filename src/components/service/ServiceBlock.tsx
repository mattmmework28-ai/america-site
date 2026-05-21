"use client";

import React from "react";
import type { ServiceData } from "./types";
import { VenueCard } from "./VenueCard";
import { DecoratedTitle } from "../DecoratedTitle";

interface ServiceBlockProps {
  data: ServiceData;
}

const DEFAULT_MAIN_LOGO_HEIGHT = "h-16 sm:h-20 lg:h-24";

export const ServiceBlock: React.FC<ServiceBlockProps> = ({ data }) => {
  const logoHeight = data.logoHeight || DEFAULT_MAIN_LOGO_HEIGHT;

  return (
    <div>
      <div className="bg-whitesmoke px-4 py-4 text-center sm:px-6 sm:py-8 lg:px-12 lg:py-12">
        <div className="mb-6 flex justify-center lg:mb-8">
          {data.logo ? (
            <img
              src={data.logo}
              alt="Company logo"
              className={`max-w-full w-auto object-contain ${logoHeight}`}
            />
          ) : (
            <DecoratedTitle size="lg" as="h2">
              <span className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                {data.logo_text}
              </span>
            </DecoratedTitle>
          )}
        </div>

        <div
          className="mx-auto max-w-4xl min-w-0 break-words text-sm leading-relaxed text-patriot-slate sm:text-base lg:text-lg [overflow-wrap:anywhere]"
          dangerouslySetInnerHTML={{ __html: data.maintext }}
        />

        {data.ctaText ? (
          <p className="mx-auto mt-6 max-w-3xl min-w-0 break-words text-sm sm:text-base lg:mt-8 lg:text-lg [overflow-wrap:anywhere]">
            <span className="font-semibold text-primary">
              {data.ctaText.split(",")[0]},
            </span>
            {data.ctaText.split(",").slice(1).join(",")}
          </p>
        ) : null}

        <a
          href={data.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-button-gradient px-8 py-3 text-md font-semibold text-white uppercase lg:mt-8"
        >
          {data.ctaButtonText}
        </a>
      </div>

      <div className="bg-primary-gradient z-10 h-1"></div>

      <div className="grid grid-cols-1">
        {data.section.map((item, index) => (
          <VenueCard key={index} item={item} isImageLeft={index % 2 !== 0} />
        ))}
      </div>

      <div className="bg-primary-gradient z-10 h-1"></div>
    </div>
  );
};

export default ServiceBlock;
