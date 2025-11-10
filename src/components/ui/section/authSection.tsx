import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import decor from "@/assets/images/left-section-1.png";

interface AuthSectionProps {
  children: ReactNode;
  images: string[];
}

export default function AuthSection({ children, images }: AuthSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      {/* Back Button */}
      <button
        className="fixed top-4 left-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
            rounded-full bg-white/20 backdrop-blur-md border border-white/30 
            shadow-lg text-white hover:bg-white/30 transition z-10 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>


      {/* Left Section (Carousel Auto Fade) */}
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-screen bg-[#BAE4C5] flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute max-w-[40%] sm:max-w-[60%] md:max-w-[500px] lg:max-w-[400px] aspect-square object-contain transition-opacity duration-1000 
              ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Decorative Element di bawah kanan */}
        <img
          src={decor}
          alt="Decoration"
          className="
            absolute 
            bottom-0 right-[-1rem]
            sm:bottom-8 sm:right-[-1rem] 
            md:bottom-12 md:right-[-1.25rem] 
            lg:bottom-16 lg:right-[-1.5rem] 
            w-20 h-20 
            sm:w-20 sm:h-20 
            md:w-28 md:h-28 
            lg:w-32 lg:h-32 
            object-contain pointer-events-none select-none
          "
        />
        {/* Decorative Element di atas kanan (flip) */}
        <img
          src={decor}
          alt="Decoration"
          className="
            absolute 
            top-0 right-[-1rem]
            sm:top-8 sm:right-[-1rem] 
            md:top-12 md:right-[-1.25rem] 
            lg:top-0 lg:right-[-1.5rem] 
            w-20 h-20 
            sm:w-20 sm:h-20 
            md:w-28 md:h-28 
            lg:w-32 lg:h-32 
            object-contain pointer-events-none select-none transform -scale-x-100
          "
        />
        {/* Decorative Element di bawah kiri (flip) */}
        <img
          src={decor}
          alt="Decoration"
          className="
            absolute 
            bottom-0 left-[-1rem]
            sm:bottom-8 sm:left-[-1rem] 
            md:bottom-12 md:left-[-1.25rem] 
            lg:bottom-16 lg:left-[-1.5rem] 
            w-20 h-20 
            sm:w-20 sm:h-20 
            md:w-28 md:h-28 
            lg:w-32 lg:h-32 
            object-contain pointer-events-none select-none transform -scale-x-100
          "
        />
        {/* Decorative Element di atas kiri */}
        <img
          src={decor}
          alt="Decoration"
          className="
            absolute 
            top-0 left-[-1rem]
            sm:top-8 sm:left-[-1rem] 
            md:top-12 md:left-[-1.25rem] 
            lg:top-0 lg:left-[-1.5rem] 
            w-20 h-20 
            sm:w-24 sm:h-24 
            md:w-28 md:h-28 
            lg:w-32 lg:h-32 
            object-contain pointer-events-none select-none 
          "
        />
      </div>

      {/* Right Section (Content) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">{children}</div>
      </div>
    </div>
  );
}
