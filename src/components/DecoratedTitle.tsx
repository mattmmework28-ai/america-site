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
  sm: "h-14 sm:h-16 lg:h-20",
  md: "h-20 sm:h-24 lg:h-28",
  lg: "h-24 sm:h-28 lg:h-36",
};

const GAP_TO_TITLE: Record<DecoratedTitleSize, string> = {
  sm: "gap-x-6 sm:gap-x-8",
  md: "gap-x-8 sm:gap-x-10 lg:gap-x-12",
  lg: "gap-x-10 sm:gap-x-12 lg:gap-x-16",
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
    className={`${heightClass} max-w-[min(240px,45vw)] w-auto shrink-0 object-contain select-none sm:max-w-none ${
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
