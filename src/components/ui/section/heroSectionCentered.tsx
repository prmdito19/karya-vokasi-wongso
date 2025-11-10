import type { ReactNode } from "react";

type HeroSectionCenteredProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  backgroundColor?: string;
  className?: string;

  titleSize?: string;
  titleColor?: string; 

  subtitleSize?: string;
  subtitleColor?: string;
  layout?: "grid" | "full";
};

export function HeroSectionCentered({
  title,
  subtitle,
  children,
  backgroundColor = "#ffffff",
  className = "",
  titleSize = "text-3xl md:text-[64px]",
  titleColor = "text-[#3C3C43]",
  subtitleSize = "text-xl md:text-[64px]",
  subtitleColor = "text-[#3C3C43]",
  layout = "grid"

  
}: HeroSectionCenteredProps) {
  return (
    <div
      className={`flex justify-center ${className}`}
      style={{ background: backgroundColor }}
    >
      <div className="max-w-[1920px] w-full px-6 lg:px-20 py-20 text-center">
        {/* Title Section */}
        <div className="mb-10">
          <h2 className={`${titleSize} font-semibold ${titleColor}`}>
            {title}
          </h2>
          {subtitle && (
            <h3 className={`${subtitleSize} font-semibold ${subtitleColor} mb-4`}>
              {subtitle}
            </h3>
          )}
        </div>

        {/* Content Section */}
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
              : "grid-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
