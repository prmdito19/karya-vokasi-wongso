import { AppButton } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type HeroSectionTitleProps = {
  title: string;
  subtitle: string;
  description: string;
  highlightColor?: string;
  reverse?: boolean;
  showButton?: boolean;
};

export function HeroSectionTitle({
  title,
  subtitle,
  description,
  reverse = false,
  showButton = true,
}: HeroSectionTitleProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`text-[#3C3C43] w-full max-w-[600px] flex flex-col 
        ${reverse ? "items-center min-[769px]:items-end" : "items-center min-[769px]:items-start"}
      `}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reverse ? -50 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={title}
        alt="Hero title"
        className="w-full max-w-[500px] h-auto object-contain mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.p
        className={`mb-[12px] font-semibold text-[36px] 
          ${reverse ? "text-center min-[769px]:text-left" : "text-center min-[769px]:text-left"}
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>

      <motion.p
        className={`font-reguler text-[20px] text-[#3C3C43] max-w-[600px] whitespace-pre-line
          ${reverse ? "text-center min-[769px]:text-left" : "text-center min-[769px]:text-left"}
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>

      {showButton && (
        <motion.div
          className="mt-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AppButton
            label="Tentang Kami"
            color="success"
            onClick={() => navigate("/tentang-kami")}
            sx={{
              backgroundColor: "#4BD270",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#3BB75D",
              },
              padding: "10px 30px",
              fontSize: "24px",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
