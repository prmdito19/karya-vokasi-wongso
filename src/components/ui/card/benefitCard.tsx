import React from "react";

type BenefitCardProps = {
    iconSrc: string;
    iconAlt?: string;      
    title: string;
    description: string;
    backgroundColor?: string;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({
    iconSrc,
    iconAlt = "icon",
    title,
    description,
    backgroundColor = "#000000", // default hitam
}) => {
    return (
        <div
            className="flex items-center gap-4 p-4 shadow-sm text-left w-[300px] h-[100px]"
            style={{ backgroundColor }}
        >
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-white shrink-0">
                <img src={iconSrc} alt={iconAlt} className="w-[30px] h-[30px] object-contain" />
            </div>

            <div>
                <h3 className="text-[#3C3C43] font-reguler text-[16px]">{title}</h3>
                <p className="text-[#6E7485] font-reguler text-[14px]">{description}</p>
            </div>
        </div>
    );
};
