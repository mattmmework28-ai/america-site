"use client";

import React from "react";
import type { ServiceSectionProps } from "./service/types";
import ServiceBlock from "./service/ServiceBlock";

export const ServiceSection: React.FC<ServiceSectionProps> = ({ items }) => {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl border-[0.5px] border-primary border-t-0">
      {items.map((serviceData, index) => (
        <ServiceBlock key={index} data={serviceData} />
      ))}
    </section>
  );
};

export default ServiceSection;
