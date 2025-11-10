import { motion } from "framer-motion";

type HeroSectionIllustrationProps = {
  src: string;
  alt?: string;
};

export function HeroSectionIllustration({ src, alt = "Hero Illustration" }: HeroSectionIllustrationProps) {
  return (
    <motion.div
      className="flex justify-center w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.7 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full max-w-[350px] sm:max-w-[350px] min-[769px]:max-w-[350px] lg:max-w-[600px]"
      />
    </motion.div>
  );
}
