import React from "react";

type VMCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export const VMCard: React.FC<VMCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "illustration",
}) => {
  return (
    <div
      className="
        relative
        w-[350px] h-[220px] p-4   /* default (mobile < lg) */
        sm:w-[500px] sm:h-[300px] sm:p-6
        md:w-[600px] md:h-[360px] md:p-8
        lg:w-[700px] lg:h-[420px] lg:p-10
        bg-[#EAD9C5] rounded-3xl overflow-hidden
      "
    >
      {/* Text Section */}
      <div className="flex-1">
        <h2
          className="
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px]
            font-bold text-[#DC9679] mb-1
          "
        >
          {title}
        </h2>
        <p
          className="
            text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px]
            text-[#4B4B4B] font-semibold
            max-w-[250px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
          "
        >
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div
        className="
          absolute
          -bottom-10 sm:-bottom-14 md:-bottom-20 lg:-bottom-24
          -right-10 sm:-right-14 md:-right-16 lg:-right-20
        "
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="
            max-h-[180px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[400px]
            object-contain mix-blend-overlay
          "
        />
      </div>
    </div>
  );
};
