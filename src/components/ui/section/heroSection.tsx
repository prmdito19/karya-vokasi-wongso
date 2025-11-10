import { HeroSectionBackground } from "@/components/ui/section/heroSectionBackground";
import { HeroSectionTitle } from "@/components/ui/section/heroSectionTitle";
import { HeroSectionIllustration } from "@/components/ui/section/heroSectionIllustration";

type HeroSectionProps = {
    title: string;
    subtitle?: string;
    description?: string;
    highlightColor?: string;
    imageSrc: string;
    imageAlt?: string;
    backgroundColor?: string;
    className?: string;
    reverse?: boolean;
    showButton?: boolean;
    showTopRightCircle?: boolean;
    showBottomLeftCircle?: boolean;
};

export function HeroSection({
    title,
    subtitle,
    description,
    highlightColor = "text-green-400",
    imageSrc,
    imageAlt,
    backgroundColor = "#ffffff",
    className = "",
    reverse = false,
    showButton = false,
    showTopRightCircle = true,
    showBottomLeftCircle = true,
}: HeroSectionProps) {
    return (
        <HeroSectionBackground backgroundColor={backgroundColor} className={className} reverse={reverse} showTopRightCircle={showTopRightCircle} showBottomLeftCircle={showBottomLeftCircle}>
            <HeroSectionTitle
                title={title}
                subtitle={subtitle ?? ""}
                description={description ?? ""}
                highlightColor={highlightColor}
                reverse={reverse}
                showButton={showButton}
            />
            <HeroSectionIllustration src={imageSrc} alt={imageAlt || title} />
        </HeroSectionBackground>
    );
}

