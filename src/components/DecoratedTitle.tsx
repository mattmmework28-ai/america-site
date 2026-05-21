import React from "react";

type DecoratedTitleSize = "sm" | "md" | "lg";
type DecoratedTitleAlign = "left" | "center";

interface DecoratedTitleProps {
  children: React.ReactNode;
  size?: DecoratedTitleSize;
  align?: DecoratedTitleAlign;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

const PART_HEIGHT: Record<DecoratedTitleSize, string> = {
  sm: "h-[1.5rem] sm:h-[3.6rem] lg:h-[4.8rem]",
  md: "h-[2.1rem] sm:h-[4.8rem] lg:h-[7.2rem]",
  lg: "h-[2.7rem] sm:h-[6rem] lg:h-[9.6rem]",
};

const GAP_TO_TITLE: Record<DecoratedTitleSize, string> = {
  sm: "gap-x-2 sm:gap-x-6 lg:gap-x-8",
  md: "gap-x-3 sm:gap-x-8 lg:gap-x-12",
  lg: "gap-x-4 sm:gap-x-10 lg:gap-x-16",
};

const ALIGN: Record<DecoratedTitleAlign, string> = {
  left: "justify-start",
  center: "justify-center",
};

interface FlourishProps {
  heightClass: string;
  mirrored?: boolean;
}

const Flourish: React.FC<FlourishProps> = ({ heightClass, mirrored = false }) => (
  <img
    src="/decorations/flourish.png"
    alt=""
    aria-hidden="true"
    draggable={false}
    className={`${heightClass} max-w-[min(96px,26vw)] w-auto shrink-0 object-contain select-none sm:max-w-none ${
      mirrored ? "-scale-x-100" : ""
    }`}
  />
);

export const DecoratedTitle: React.FC<DecoratedTitleProps> = ({
  children,
  size = "md",
  align = "center",
  className = "",
  as: Tag = "span",
}) => {
  const heightClass = PART_HEIGHT[size];

  return (
    <div
      className={`flex w-full min-w-0 items-center ${ALIGN[align]} ${GAP_TO_TITLE[size]} ${className}`}
    >
      <Flourish heightClass={heightClass} />
      <Tag className="min-w-0 max-w-full text-center">{children}</Tag>
      <Flourish heightClass={heightClass} mirrored />
    </div>
  );
};

export default DecoratedTitle;
