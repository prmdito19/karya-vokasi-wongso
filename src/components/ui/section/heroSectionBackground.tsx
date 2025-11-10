import type { ReactNode } from "react";

type HeroSectionBackgroundProps = {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  reverse?: boolean;
  showTopRightCircle?: boolean;   // 👈 tambahan
  showBottomLeftCircle?: boolean; // 👈 tambahan
};

export function HeroSectionBackground({
  children,
  backgroundColor = "#ffffff",
  className = "",
  reverse = false,
  showTopRightCircle = true,   // default aktif
  showBottomLeftCircle = true, // default aktif
}: HeroSectionBackgroundProps) {
  return (
    <div
      className={`relative flex justify-center overflow-hidden ${className}`}
      style={{ background: backgroundColor }}
    >
      {/* Circle kiri bawah */}
      {showBottomLeftCircle && (
        <div className="absolute -bottom-[250px] -left-[200px] w-[600px] h-[600px] rounded-full bg-white opacity-40"></div>
      )}

      {/* Circle kanan atas */}
      {showTopRightCircle && (
        <div className="absolute -top-[250px] -right-[200px] w-[600px] h-[600px] rounded-full bg-white opacity-40"></div>
      )}

      <div className="max-w-[1920px] px-1 lg:px-0 py-20 sm:py-20 relative z-10">
        <div
          className={`
            grid grid-cols-1 gap-y-6 
            sm:gap-y-8 
            md:gap-y-10 
            lg:gap-y-12
            sm:mx-8
            md:mx-10
            lg:mx-[120px]
            sm:gap-x-[10px] 
            md:gap-x-[50px] 
            lg:gap-x-[175px] 
            sm:grid-cols-1 
            md:grid-cols-2 
            items-center
            ${reverse ? "md:[direction:rtl] text-left" : ""}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
