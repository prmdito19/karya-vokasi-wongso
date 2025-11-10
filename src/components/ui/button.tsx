import * as React from "react";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

type AppButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: ButtonProps["sx"]; // override styling
};

export function AppButton({
  label,
  onClick,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  fullWidth = false,
  disabled = false,
  sx,
}: AppButtonProps) {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        borderRadius: "10px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        textTransform: "none",
        boxShadow: "none", // 🚀 hilangkan shadow
        "&:hover": {
          boxShadow: "none", // 🚀 hilangkan shadow saat hover juga
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}
