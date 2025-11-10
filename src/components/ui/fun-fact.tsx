import React from "react";

type StatItem = {
  icon: string;
  value: string;
  label: string;
};

type StatsSectionProps = {
  items: StatItem[];
};

export const StatsSection: React.FC<StatsSectionProps> = ({ items }) => {
  return (
    <div
      className="w-full max-w-[1280px] bg-white px-6 sm:px-10 lg:px-[100px] py-10 mx-auto
      grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[20px] lg:gap-[20px]
      xl:flex xl:flex-row xl:justify-center xl:items-center"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-row justify-center items-center text-center sm:text-left min-w-[300px]"
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-12 h-12 sm:w-16 sm:h-16 mb-2"
          />
          <div className="flex flex-col items-start ml-4">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {item.value}
            </p>
            <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
