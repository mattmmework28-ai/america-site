import React from "react";

type DecoratedTitleAlign = "left" | "center";

interface DecoratedTitleProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  align?: DecoratedTitleAlign;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

const ALIGN: Record<DecoratedTitleAlign, string> = {
  left: "text-left",
  center: "text-center",
};

export const DecoratedTitle: React.FC<DecoratedTitleProps> = ({
  children,
  align = "center",
  className = "",
  as: Tag = "span",
}) => {
  return (
    <div className={`w-full min-w-0 ${ALIGN[align]} ${className}`}>
      <Tag className="min-w-0 max-w-full">{children}</Tag>
    </div>
  );
};

export default DecoratedTitle;
