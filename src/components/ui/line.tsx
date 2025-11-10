import React from "react";

type LineProps = {
  length?: string;
  color?: string;
  thickness?: string;
  className?: string;
};

export const Line: React.FC<LineProps> = ({
  length = "80px",
  color = "#000",
  thickness = "2px",
  className = "",
}) => {
  return (
    <div
      className={`mb-[120px] -mx-[20px] border-t-2 border-dashed ${className}`}
      style={{
        borderColor: color,
        width: length,
        borderTopWidth: thickness,
      }}
    />
  );
};
