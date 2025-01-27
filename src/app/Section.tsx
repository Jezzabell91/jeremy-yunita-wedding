import React from "react";

interface SectionProps {
  children: React.ReactNode;
  alternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  alternate = false,
}) => {
  return (
    <div className={alternate ? "bg-pink-50" : "bg-white"}>{children}</div>
  );
};

export default Section;
