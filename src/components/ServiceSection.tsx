"use client";

import React from "react";
import type { ServiceSectionProps } from "./service/types";
import ServiceBlock from "./service/ServiceBlock";

export const ServiceSection: React.FC<ServiceSectionProps> = ({ items }) => {
  return (
    <section className="max-w-7xl mx-auto border-[0.5px] border-soft-olive border-t-0">
      {items.map((serviceData, index) => (
        <ServiceBlock key={index} data={serviceData} />
      ))}
    </section>
  );
};

export default ServiceSection;
