import React from "react";

type StackedCircleBadgeProps = {
  number: number | string;
  color?: string;
};

export const StackedCircleBadge: React.FC<StackedCircleBadgeProps> = ({
  number,
  color = "#4BD270",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Layer 50% - 100px */}
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          opacity: 0.25,
          width: 100,
          height: 100,
        }}
      ></div>

      {/* Layer 75% - 75px */}
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          opacity: 0.5,
          width: 75,
          height: 75,
        }}
      ></div>

      {/* Layer 100% - 50px */}
      <div
        className="flex items-center justify-center rounded-full font-bold text-white text-lg"
        style={{
          backgroundColor: color,
          opacity: 0.75,
          width: 50,
          height: 50,
        }}
      >
        <span className="text-white font-bold text-lg">{number}</span>
      </div>
    </div>
  );
};

// Komponen gabungan untuk badge + judul + deskripsi
type StepItemProps = {
  number: number | string;
  title: string;
  description: string;
};

export const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[140px]">
      <StackedCircleBadge number={number} />
      <h3 className="mt-10 text-lg font-semibold text-green-600">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};